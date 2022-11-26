import ArrayBufferView = NodeJS.ArrayBufferView;
import {resolve, join, parse} from "path";
import {existsSync, readdirSync, statSync, mkdirSync, writeFileSync, unlink} from "fs";
import {copy, remove} from "fs-extra";
import {rimraf} from "rimraf";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {v4} from "uuid";
import {File, FileProperties, FileTypes} from "../../../common/types/file-storage";

@Injectable()
export class NewFileStorageService {
  constructor() {
  }

  //Функция для форматирования вывода размера файлов и директорий
  formatBytes = (bytes: string | number, decimals = 2): string => {
    if (+bytes === 0) {
      return '0 б';
    } else {
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
      const i = Math.floor(Math.log(+bytes) / Math.log(k));
      return parseFloat((+bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }

  //TODO: сделать выбор пути к корневой директории из конфигурации приложения
  readonly getCurrentPath = (folder: string): string => {
    return resolve(__dirname, '..', '..', '..', 'file-storage', folder)
  }

  getFolderSize = (path: string): string => {
    try {
      let size = 0;
      const destination = this.getCurrentPath(path)
      const files = readdirSync(destination);
      for (let i = 0; i < files.length; i++) {
        const file = join(destination, files[i]);
        size += statSync(file).size;
      }
      return this.formatBytes(size)
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  createDirectory = (path: string): string => {
    const destination = this.getCurrentPath(path);

    try {
      if (!existsSync(destination)) {
        mkdirSync(destination, {recursive: true})
      }
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN)
    }

    return destination;
  }

  //удаление файлов и директорий с вложениями
  removeDirectoryOrFile = (path: string): void => {
    const destination = this.getCurrentPath(path);
    try {
      if (statSync(destination).isFile()) {
        unlink(destination, (e: any) => {
          if (e) throw new HttpException(e.message, HttpStatus.FORBIDDEN);
          return HttpStatus.OK;
        });
      }
      if (statSync(destination).isDirectory()) {
        rimraf.sync(destination);
        // rmSync(destination, {recursive: true, force: true})
      }
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN)
    }
  }

  //перемещение директории (или файла) со всеми вложениями по новому пути
  moveDirectoryOrFile = (oldPath: string, newPath: string): void => {
    const from = this.getCurrentPath(oldPath);
    const to = this.getCurrentPath(newPath);

    newPath !== oldPath && copy(from, to)
      .catch((e: any) => {
        throw new HttpException(e.message, HttpStatus.FORBIDDEN)
      })
      .then(() => remove(from))
      .catch((e: any) => {
        throw new HttpException(e.message, HttpStatus.FORBIDDEN)
      })
      .finally(() => HttpStatus.OK);
  }

  getFileProperties = (file: File, generateFileName = false): FileProperties => {
    try {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString(
        'utf8'
      );

      const fullName = file.originalname.toString();
      const extName = parse(file.originalname).ext.slice(1).toLowerCase();
      const size = this.formatBytes(file.size)
      const nameWithoutExt = parse(file.originalname).name;
      const fileName = generateFileName ? `${v4()}.${extName}` : fullName;
      const mimeType = file.mimetype;
      const buffer = file.buffer;

      return {
        fileName,
        extName,
        nameWithoutExt,
        size,
        mimeType,
        buffer
      }
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  fileUpload = (path: string, file: Express.Multer.File, generateFileName = false): FileProperties => {
    try {
      const {
        fileName,
        extName,
        nameWithoutExt,
        size,
        mimeType,
        buffer
      } = this.getFileProperties(file, generateFileName);

      const destination = this.getCurrentPath(path);
      const pathToFile = this.getPath([destination, fileName]);

      if (!existsSync(destination)) {
        this.createDirectory(destination);
      }
      writeFileSync(pathToFile, buffer);
      return {
        destination,
        fileName,
        extName,
        nameWithoutExt,
        size,
        mimeType,
        buffer
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  fileExport = <T extends ArrayBufferView | string>(data: T, path: string, fileName: string, fileType: string): string => {
    try {
      const destination = this.getCurrentPath(this.getPath([path, 'exports']));
      const file = `${fileName}.${fileType}`;
      const pathToFile = this.getPath([destination, file])

      if (!existsSync(destination)) {
        this.createDirectory(destination);
      }

      switch (fileType) {
        case FileTypes.JSON : {
          writeFileSync(pathToFile, data)
          break
        }
        //TODO: Добавить реализацию записи для остальных типов файлов

        default:
          break
      }
      return pathToFile
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  generateFolderName = (prefix: string, index?: number): string => {
    // регулярное выражение ждя исключения запрещенных символов
    const regex = '^(?!><:"/\\\\\\|\\?.*$)(.*)$';
    const pref = prefix.replace(regex, "-");

    return !index ? pref : index < 10 ? `00${index}. ${pref}` : index < 10 ? `0${index}. ${pref}` : `${index}. ${pref}`
  }

  getPath = (path: string[]): string => (join(...path))
}