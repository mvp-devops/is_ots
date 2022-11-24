import {setUrl} from "../../main";
import axios from "axios";
import download from "js-file-download";


export const buildReportPerMonth = async (target: string, id: string, data: any, title: string)=> {
  const baseUrl = "api/position-tree";
  const url = setUrl(`${baseUrl}/report`);
  const {direction, period} = data;
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const month = +period.split(".")[0];
  const year = period.split(".")[1];
  const reportPeriod = `${months[month - 1]} ${year} г.`
  const fileName = `${title}. Отчет за ${reportPeriod} (${direction}).pdf`;

   const flag = axios.post(url, data, {params: {target, id}})
    .then(({data: fileLocation}) => reportDownload(fileLocation, fileName)).then(res => res)

   return flag
}

export const  reportDownload = async (fileLocation: string, fileName: string) => {
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

  return false

};