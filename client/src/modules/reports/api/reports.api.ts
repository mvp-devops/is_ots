import {setUrl} from "../../main";
import axios from "axios";
import download from "js-file-download";
import {saveAs} from 'file-saver';


export const buildReportPerMonth = (target: string, id: string, data: any, title: string) => {
  const baseUrl = "api/position-tree";
  const url = setUrl(`${baseUrl}/report`);
  const {direction, period} = data;

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const month = +period.split(".")[0];
  const year = period.split(".")[1];
  const reportPeriod = `${months[month - 1]} ${year} г.`
  const fileName = `${title}. Отчет за ${reportPeriod} (${direction}).pdf`;

   axios.post(url, data, {params: {target, id}})
    .then(
      ({data: fileLocation}) =>
reportDownload(fileLocation, fileName)


    );
}


export const reportDownload = (fileLocation: string, fileName: string) => {
  const baseUrl = "api/position-tree";
  const url = setUrl(`${baseUrl}/report/download`);

  axios
    .get(url, {
      responseType: "blob",
      params: {0: fileLocation},
    })
    .then((resp) => {

      download(resp.data, fileName);

    })
};