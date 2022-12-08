export const titularTemplate = (data) => {
  const {subsidiary, field, project, unit, subUnit, questionnaireType, year, cipher, title} = data;

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="generator"
      content="PhpSpreadsheet, https://github.com/PHPOffice/PhpSpreadsheet"
    />
    <meta name="author" content="Admin" />
    <style type="text/css">
      html {
        font-family: Calibri, Arial, Helvetica, sans-serif;
        font-size: 11pt;
        background-color: white;
      }
      a.comment-indicator:hover + div.comment {
        background: #ffd;
        position: absolute;
        display: block;
        border: 1px solid black;
        padding: 0.5em;
      }
      a.comment-indicator {
        background: red;
        display: inline-block;
        border: 1px solid black;
        width: 0.5em;
        height: 0.5em;
      }
      div.comment {
        display: none;
      }
      table {
        border-collapse: collapse;
        page-break-after: always;
      }
      .gridlines td {
        border: 1px dotted black;
      }
      .gridlines th {
        border: 1px dotted black;
      }
      .b {
        text-align: center;
      }
      .e {
        text-align: center;
      }
      .f {
        text-align: right;
      }
      .inlineStr {
        text-align: left;
      }
      .n {
        text-align: right;
      }
      .s {
        text-align: left;
      }
      td.style0 {
        vertical-align: bottom;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      th.style0 {
        vertical-align: bottom;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      td.style1 {
        vertical-align: top;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style1 {
        vertical-align: top;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style2 {
        vertical-align: top;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style2 {
        vertical-align: top;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style3 {
        vertical-align: top;
        text-align: left;
        padding-left: 9px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style3 {
        vertical-align: top;
        text-align: left;
        padding-left: 9px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style4 {
        vertical-align: bottom;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 14pt;
        background-color: white;
      }
      th.style4 {
        vertical-align: bottom;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 14pt;
        background-color: white;
      }
      td.style5 {
        vertical-align: bottom;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style5 {
        vertical-align: bottom;
        text-align: right;
        padding-right: 0px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style6 {
        vertical-align: bottom;
        text-align: left;
        padding-left: 9px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style6 {
        vertical-align: bottom;
        text-align: left;
        padding-left: 9px;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style7 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 10pt;
        background-color: white;
      }
      th.style7 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 10pt;
        background-color: white;
      }
      td.style8 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style8 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style9 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 10pt;
        background-color: white;
      }
      th.style9 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 10pt;
        background-color: white;
      }
      td.style10 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style10 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        font-weight: bold;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      td.style11 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      th.style11 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Arial";
        font-size: 14pt;
        background-color: white;
      }
      table.sheet0 col.col0 {
        width: 216.8888864pt;
      }
      table.sheet0 col.col1 {
        width: 231.12221957pt;
      }
      table.sheet0 tr {
        height: 15pt;
      }
      table.sheet0 tr.row0 {
        height: 119.1pt;
      }
      table.sheet0 tr.row1 {
        height: 34pt;
      }
      table.sheet0 tr.row2 {
        height: 34pt;
      }
      table.sheet0 tr.row3 {
        height: 17pt;
      }
      table.sheet0 tr.row4 {
        height: 24.95pt;
      }
      table.sheet0 tr.row5 {
        height: 51pt;
      }
      table.sheet0 tr.row6 {
        height: 51pt;
      }
      table.sheet0 tr.row7 {
        height: 34pt;
      }
      table.sheet0 tr.row8 {
        height: 68pt;
      }
      table.sheet0 tr.row9 {
        height: 34pt;
      }
      table.sheet0 tr.row10 {
        height: 34pt;
      }
      table.sheet0 tr.row11 {
        height: 17pt;
      }
      table.sheet0 tr.row12 {
        height: 51pt;
      }
      table.sheet0 tr.row13 {
        height: 40pt;
      }
      table.sheet0 tr.row14 {
        height: 17pt;
      }
    </style>
  </head>

  <body>
    <style>
      @page {
        margin-left: 0in;
      }
      body {
        margin: 0in;
      }
    </style>
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      id="sheet0"
      class="sheet0 gridlines"
    >
      <col class="col0" />
      <col class="col1" />
      <tbody>
        <tr class="row0">
          <td class="column0 style7 null style7" colspan="2">
            <div style="position: relative;">
              <img
                style="position: absolute; z-index: 1;"
                src="./gpn.png"
                border="0"
              />
            </div>
          </td>
        </tr>
        <tr class="row1">
          <td class="column0 style8 s style8" colspan="2">
            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
          </td>
        </tr>
        <tr class="row2">
          <td class="column0 style8 s style8" colspan="2">
            «ГАЗПРОМНЕФТЬ-АВТОМАТИЗАЦИЯ»
          </td>
        </tr>
        <tr class="row3">
          <td class="column0 style9 s style9" colspan="2">
            (ООО «Газпромнефть-Автоматизация»)
          </td>
        </tr>
        <tr class="row4">
          <td class="column0 style9 null style9" colspan="2"></td>
        </tr>
        <tr class="row5">
          <td class="column0 style2 s">Заказчик:</td>
          <td class="column1 style3 s">${subsidiary}</td>
        </tr>
        <tr class="row6">
          <td class="column0 style2 s">Месторождение:</td>
          <td class="column1 style3 s">${field}</td>
        </tr>
        <tr class="row7">
          <td class="column0 style2 s">Объект (проект):</td>
          <td class="column1 style3 s">project/unit/subUnit</td>
        </tr>
        <tr class="row8">
          <td class="column0 style7 null style7" colspan="2"></td>
        </tr>
        <tr class="row9">
          <td class="column0 style1 s">Опросный лист на</td>
          <td class="column1 style3 s">${title}</td>
        </tr>
        <tr class="row10">
          <td class="column0 style7 null style7" colspan="2"></td>
        </tr>
        <tr class="row11">
          <td class="column0 style11 s style11" colspan="2">
            ${questionnaireType}
          </td>
        </tr>
        <tr class="row12">
          <td class="column0 style7 null style7" colspan="2"></td>
        </tr>
        <tr class="row13">
          <td class="column0 style10 null style10" colspan="2"></td>
        </tr>
        <tr class="row14">
          <td class="column0 style5 s">Тюмень -</td>
          <td class="column1 style6 s">${year}</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

  `
}