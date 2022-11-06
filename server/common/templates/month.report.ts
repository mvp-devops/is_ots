import {ReportView} from "../types/report.types";

export const monthReport = (report: ReportView) => {

  const {fields, rows, costs, totalRemarks, direction, period, customer, executor} = report;

  const {position: customerPosition, fio: customerFio} = customer;
  const {position: executorPosition, fio: executorFio} = executor;

  const {
    issued: totalIssued,
    repeated: totalRepeated,
    eliminated: totalEliminated,
    critical: totalCritical
  } = totalRemarks;


  // language=HTML
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <title>Отчет</title>
      </head>
      <style>
          .block {
              padding: 5px 5px;
              font-family: Arial, Helvetica, sans-serif;
              color: #000;
          }

          .header {
              text-align: center;
              font-size: 18px;
              margin-bottom: 10px;
          }

          .sub-header {
              font-weight: 500;
              text-align: center;
              font-size: 14px;
              margin-bottom: 20px;
          }

          .objects {
              max-width: 600px;
              font-size: 12px;
              margin-bottom: 10px;
          }

          .object-item {
              display: inline-block;
              padding: 5px 5px;
              border-bottom: 1px solid #000;
          }

          .item  {
              display: inline-block;
              padding: 5px 5px;
              margin-bottom: 5px;
              font-size: 12px;
                 content: '!!! ';
                          
          }

          .wp-table {
              display: inline-table;
              border-collapse: collapse;
              width: 100%;
              font-size: 10px;
          }

          .center {
              text-align: center;
          }

          .wp-table td {
              padding: 5px 5px;
              border: 1px solid #000;
          }

          .wp-table thead td {
              font-weight: 700;
              color: #fff;
              background: rgb(0, 120, 210);
          }

          .wp-table tfoot td {
              font-weight: 700;
              color: #fff;
              background: rgb(0, 120, 210);
          }

          .footer {
              padding: 5px 5px;
              display: flex;
              justify-items: stretch;
              justify-content: space-between;
              font-size: 12px;
              margin: 20px;
          }

          .footer-item {
              padding: 5px 5px;
              margin: 10px 0;
              font-size: 10px;
          }
      </style>
      <body class="block">
      <strong>
          <div class="header">
              Отчет
          </div>
      </strong>
      <div class="sub-header">об оказанных услугах в рамках организационно-технического сопровождения объектов
          строительства по направлению «${direction}»
      </div>
      <div class="objects">
          <div class="object-item">
              <strong>Объекты:</strong>
              ${fields.map(item => `<span> ${item}</span>`)}
          </div>
          <div class="object-item">
              <strong>Период оказания услуг:</strong>
              <span>
    ${period}
    </span>
          </div>
      </div>
      <div class="item" style="content: none">
          <strong>Перечень оказанных услуг: </strong>
      </div>

       <table class="wp-table">
          <thead>
          <tr class="center">
              <strong>
                  <td>№ п/п</td>
                  <td>Дата</td>
                  <td>Шифр проекта</td>
                  <td>Наименование проекта</td>
                  <td>Наименование документа</td>
                  <td>Вид работ (ОТС)</td>
                  <td>Выдано замечаний</td>
                  <td>Повторно выдано</td>
                  <td>Критичные</td>
                  <td>Снятые</td>
                  <td>Трудозатраты, чел/час</td>
              </strong>
          </tr>
          </thead>
          <tbody>
          ${rows.map(
                  (
                          {
                              index,
                              date,
                              code,
                              title,
                              documents,
                              typeOfWork,
                              remarks: {issued, repeated, critical, eliminated},
                              laborCosts
                          }
                  ) => {
                      return `<tr>
      <td class="center">${index}</td>
      <td class="center">${date}</td>
    <td class="center">${code}</td>
      <td>${title}</td>
    <td>${documents}</td>
    <td class="center">${typeOfWork}</td>
    <td class="center">${issued}</td>
      <td class="center">${repeated}</td>
      <td class="center">${critical}</td>
      <td class="center">${eliminated}</td>
      <td class="center">${laborCosts.toFixed(2)}</td>
    </tr>`
                  }).join("")}
          </tbody>
          <tfoot>
          <tr>
              <td colspan="6" style="text-align: end;">ИТОГО:</td>
              <td class="center">${totalIssued}</td>
              <td class="center">${totalRepeated}</td>
              <td class="center">${totalCritical}</td>
              <td class="center">${totalEliminated}</td>
              <td class="center">${costs}</td>
          </tr>
          </tfoot>
      </table>
      <div style="margin: 10px 0; font-size: 10px">
          <strong>* Приложение:</strong>
          <span>листы коллективной проверки на ____ л. </span>
      </div>
      <div class="footer">
          <div class="footer-item"><strong>ЗАКАЗЧИК:</strong>
              <div class="footer-item">${customerPosition}</div>
              <div class="footer-item"><span>____________________</span><span>${customerFio}</span></div>
              <div class="footer-item"><span>"____"_________________20____г.</span></div>
          </div>
          <div class="footer-item"><strong>ИСПОЛНИТЕЛЬ:</strong>
              <div class="footer-item">${executorPosition}</div>
              <div class="footer-item"><span>____________________</span><span>${executorFio}</span></div>
              <div class="footer-item"><span>"____"_________________20____г.</span></div>
          </div>
      </div>
      </body>
      </html>
  `
}