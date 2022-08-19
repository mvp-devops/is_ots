import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";
import * as uuid from "uuid";
import { setCurrentDate } from "../../../common/utils";
import { LogoCreationAttrs } from "../../../common/types/file-storage";
import { LogoEntity } from "./entities";
import { InjectModel } from "@nestjs/sequelize";

export enum FileType {
  PDF = "pdf",
  IMAGE = "image",
}

@Injectable()
export class FileStorageService {
  constructor(
    @InjectModel(LogoEntity)
    private repository: typeof LogoEntity
  ) {}

  createLogo = async (
    parrentId: string,
    target: string,
    file: any
  ): Promise<void> => {
    const logo: LogoCreationAttrs = {
      subsidiaryId: null,
      counterpartyId: null,
      designId: null,
      userId: null,
      filePath: "logo",
      fileName: "",
      fileType: "",
    };

    if (file) {
      const fileName = this.fileUpload("logo", file);

      logo.fileName = fileName;
      logo.fileType = this.getFileType(file);

      switch (target) {
        case "subsidiary": {
          logo.subsidiaryId = +parrentId;
          break;
        }
        case "counterparty": {
          logo.counterpartyId = +parrentId;
          break;
        }
        case "design": {
          logo.designId = +parrentId;
          break;
        }
        case "user": {
          logo.userId = +parrentId;
          break;
        }
        default:
          break;
      }

      await this.repository.create(logo);
    }
  };

  updateLogo = async (
    parrentId: string,
    target: string,
    file: any
  ): Promise<void> => {
    let item: LogoEntity | null = null;

    if (file) {
      switch (target) {
        case "subsidiary": {
          item = await this.repository.findOne({
            where: { subsidiaryId: +parrentId },
          });
          break;
        }
        case "counterparty": {
          item = await this.repository.findOne({
            where: { counterpartyId: +parrentId },
          });
          break;
        }
        case "design": {
          item = await this.repository.findOne({
            where: { designId: +parrentId },
          });
          break;
        }
        case "user": {
          item = await this.repository.findOne({
            where: { userId: +parrentId },
          });
          break;
        }
        default:
          break;
      }

      if (item) {
        this.fileUpload("logo", file);
        this.removeDirectoryOrFile(`${item.filePath}/${item.fileName}`);
      } else this.createLogo(parrentId, target, file);
    }
  };

  deleteLogo = async (parrentId: string, target: string): Promise<void> => {
    let item: any = null;
    switch (target) {
      case "subsidiary": {
        item = await this.repository.findOne({
          where: { subsidiaryId: parrentId },
        });
        break;
      }
      case "counterparty": {
        item = await this.repository.findOne({
          where: { counterpartyId: parrentId },
        });
        break;
      }
      case "design": {
        item = await this.repository.findOne({
          where: { designId: parrentId },
        });
        break;
      }
      case "user": {
        item = await this.repository.findOne({
          where: { userId: parrentId },
        });
        break;
      }
      default:
        break;
    }

    if (item) {
      this.removeDirectoryOrFile(`${item.filePath}/${item.fileName}`);
    }
  };

  getFilePath = (folder: string): string => {
    try {
      const filePath: string = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "file-storage",
        folder
      );

      return filePath;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //получение пути к директории
  getPath = (arr: string[]): string => {
    try {
      return arr.join("/");
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //получить расширение файла
  getFileType = (file: any): string => {
    try {
      return path.extname(file.originalname);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  generateFileName(file: any): string {
    try {
      return `${uuid.v4()}${this.getFileType(file)}`;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  generateFolderName(
    target: string,
    num: number,
    prefix: string,
    postfix?: string
  ): string {
    try {
      let folderName: string;
      let regex: string = `/[&\/\\#,+()$~%.'":*?<>{}]/g`;
      switch (target) {
        case "subsidiary":
        case "field": {
          if (num < 10) {
            folderName = `00${num}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${num}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${num}. ${prefix.replace(regex, "")}`;
          }
          break;
        }
        case "stage": {
          if (num < 10) {
            folderName = `00${+num + 2}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${+num + 2}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${+num + 2}. ${prefix.replace(regex, "")}`;
          }
          break;
        }

        case "section": {
          if (num < 10) {
            folderName = `00${num}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${num}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${num}. ${prefix.replace(regex, "")}`;
          }
          break;
        }
        case "project":
        case "unit":
        case "sub-unit": {
          folderName = `${prefix.replace(regex, "")}. ${postfix.replace(
            regex,
            ""
          )}`;
          break;
        }
        default:
          break;
      }
      return folderName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //получить имя файла
  getFileName = (fileName: string): string => {
    try {
      return path.parse(fileName).name;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //загрузка файла на сервер
  fileUpload = (folder: string, file: any): string => {
    try {
      const fileName: string = this.generateFileName(file);

      const fileFolder: string = this.getFilePath(folder);

      const filePath = this.getPath([fileFolder, fileName]);

      const dir: string = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(path.join(filePath), file.buffer);
      } else {
        fs.writeFileSync(path.join(filePath), file.buffer);

        return fileName;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  // создание директории
  createDirectory = (dirName: string): string => {
    try {
      const dir: string = this.getFilePath(dirName);
      fse.ensureDir(dir).then(() => HttpStatus.OK);
      return dir;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //перемещение директории (или файла) со всеми вложениями по новому пути
  moveDirectoryOrFile = (oldPath: string, newPath: string): void => {
    try {
      const from: string = this.getFilePath(oldPath);
      const to: string = this.getFilePath(newPath);
      fse.copy(from, to).then(() => fse.remove(from));
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //удаление файлов и директорий с вложениями
  removeDirectoryOrFile = (filePath: string): void => {
    try {
      const dir: string = this.getFilePath(filePath);
      if (fs.statSync(dir).isFile()) {
        fs.unlink(dir, (e) => {
          if (e)
            throw new HttpException(
              e.message,
              HttpStatus.INTERNAL_SERVER_ERROR
            );

          return HttpStatus.OK;
        });
      }
      if (fs.statSync(dir).isDirectory()) {
        fs.rm(dir, { recursive: true }, (e) => {
          if (e)
            throw new HttpException(
              e.message,
              HttpStatus.INTERNAL_SERVER_ERROR
            );

          return HttpStatus.OK;
        });
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  writeFile = (path: string, fileName: string, data: any): void => {
    const filePath = `${this.getFilePath(path)}/${fileName}.json`;

    const file = fs.createWriteStream(filePath);
    file.on("error", function (err) {
      /* error handling */
    });
    data.forEach(function (v) {
      file.write(v.join(", ") + "\n");
    });
    file.end();

    // fs.writeFileSync(filePath, data);
  };

  //Будем использовать в иных сервисах

  writeImportData = (unit: string, system: string, data: any) => {
    const filePath = this.getFilePath("imports");
    const fileName = `${filePath}/${unit}_${system}_${setCurrentDate()}.json`;
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log("Data has been added!");
    });

    // fs.open(fileName, 'r+', (err) => {
    //   if (err) throw err;
    //   console.log('File was created!');

    // });

    // console.log('data: ', data);
    // const json = JSON.parse(data);
    // console.log('JSON parse: ', json);
  };
}
