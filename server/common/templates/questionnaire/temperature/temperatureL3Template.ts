export const temperatureL3Template = (data: any) => {
    const {cableEntry, reserveCableEntryStub, flowStraighteners, flanges, heating, thermCase, thermBox} = data;
    return `
  <!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
      html { font-family:Calibri, Arial, Helvetica, sans-serif; font-size:11pt; background-color:white }
      a.comment-indicator:hover + div.comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em }
      a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em }
      div.comment { display:none }
      table { border-collapse:collapse; page-break-after:always }
      .gridlines td { border:1px dotted black }
      .gridlines th { border:1px dotted black }
      .b { text-align:center }
      .e { text-align:center }
      .f { text-align:right }
      .inlineStr { text-align:left }
      .n { text-align:right }
      .s { text-align:left }
      td.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style1 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style1 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style2 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style2 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style3 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style3 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style4 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style4 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style5 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style5 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style6 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style6 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style7 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style7 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style8 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style8 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style9 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style9 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style10 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style10 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style11 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style11 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style12 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style12 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style13 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style13 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style14 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style14 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      table.sheet0 col.col0 { width:15.58888871pt }
      table.sheet0 col.col1 { width:216.8888864pt }
      table.sheet0 col.col2 { width:110.47777651pt }
      table.sheet0 col.col3 { width:110.47777651pt }
      table.sheet0 col.col4 { width:15.58888871pt }
      table.sheet0 tr { height:15pt }
      table.sheet0 tr.row0 { height:17.1pt }
      table.sheet0 tr.row1 { height:33.95pt }
      table.sheet0 tr.row2 { height:33.95pt }
      table.sheet0 tr.row3 { height:33.95pt }
      table.sheet0 tr.row4 { height:84.95pt }
      table.sheet0 tr.row5 { height:68.1pt }
      table.sheet0 tr.row6 { height:33.95pt }
      table.sheet0 tr.row7 { height:33.95pt }
      table.sheet0 tr.row8 { height:51pt }
      table.sheet0 tr.row9 { height:84.95pt }
      table.sheet0 tr.row10 { height:51pt }
      table.sheet0 tr.row11 { height:51pt }
      table.sheet0 tr.row12 { height:68.1pt }
      table.sheet0 tr.row13 { height:33.95pt }
      table.sheet0 tr.row14 { height:33.95pt }
      table.sheet0 tr.row16 { height:17.1pt }
      table.sheet0 tr.row17 { height:17.1pt }
      table.sheet0 tr.row18 { height:17.1pt }
      table.sheet0 tr.row19 { height:17.1pt }
      table.sheet0 tr.row20 { height:17.1pt }
      table.sheet0 tr.row21 { height:17.1pt }
      table.sheet0 tr.row22 { height:17.1pt }
      table.sheet0 tr.row23 { height:17.1pt }
    </style>
  </head>

  <body>
<style>
@page { margin-left: 0.23622047244094in; margin-right: 0in; margin-top: 0in; margin-bottom: 0in; }
body { margin-left: 0.23622047244094in; margin-right: 0in; margin-top: 0in; margin-bottom: 0in; }
</style>
    <table border="0" cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
        <col class="col0">
        <col class="col1">
        <col class="col2">
        <col class="col3">
        <col class="col4">
        <tbody>
          <tr class="row0">
            <td class="column0 style2 null style2" colspan="5"></td>
          </tr>
          <tr class="row1">
            <td class="column0 style3 null style3" rowspan="15"></td>
            <td class="column1 style12 s style14" rowspan="8">Принадлежности</td>
            <td class="column2 style1 s">Кабельный ввод</td>
            <td class="column3 style1 s">${cableEntry}</td>
            <td class="column4 style2 null style2" rowspan="15"></td>
          </tr>
          <tr class="row2">
            <td class="column2 style1 s">Заглушка резервного кабельного ввода</td>
            <td class="column3 style1 s">${reserveCableEntryStub}</td>
          </tr>
          <tr class="row3">
            <td class="column2 style1 s">Наличие струевыпрямителей</td>
            <td class="column3 style1 s">${flowStraighteners}</td>
          </tr>
          <tr class="row4">
            <td class="column2 style1 s">Наличие в комплекте поставки ответных фланцев, включая прокладки, крепежи и болты</td>
            <td class="column3 style1 s">${flanges}</td>
          </tr>
          <tr class="row5">
            <td class="column2 style1 s">Обогрев</td>
            <td class="column3 style1 s">${heating === "Не предусмотрено" ? heating : thermCase ? thermCase : thermBox ? thermBox : ""}</td>
          </tr>
          <tr class="row6">
            <td class="column2 style10 s style11" colspan="2">внешний заземляющий винт</td>
          </tr>
          <tr class="row7">
            <td class="column2 style10 s style11" colspan="2">маркировочная табличка из нержавеющей стали,с выгравированной позицией</td>
          </tr>
          <tr class="row8">
            <td class="column2 style10 s style11" colspan="2">Оборудование должно иметь положительный опыт промышленной эксплуатации в ДО ПАО «Газпромнефть» и входить в перечень КТ-610.</td>
          </tr>
          <tr class="row9">
            <td class="column1 style6 s style8" rowspan="6">Наличие документации, сертификация</td>
            <td class="column2 style9 s style9" colspan="2">1.Копия сертификата об утверждении типа средств измерений, выданное Федеральным агентством по техническому регулированию и метрологии с  описанием типа средства измерения со сроком окончания действия не менее 12 месяцев от даты поставки на склад Заказчика.</td>
          </tr>
          <tr class="row10">
            <td class="column2 style9 s style9" colspan="2">2.Копия сертификата (декларации) соответствия средств измерений техническому регламенту Таможенного союза, выданных органом по сертификации.</td>
          </tr>
          <tr class="row11">
            <td class="column2 style9 s style9" colspan="2">3.Технические средства должны иметь соответствующую сертификацию по взрывобезопасности в соответствии с Техническим регламентом таможенного союза ТР ТС 012/2011.</td>
          </tr>
          <tr class="row12">
            <td class="column2 style9 s style9" colspan="2">4.Свидетельство о первичной поверке, выданное аккредитованным органом на право проведения поверки со сроком окончания действия не менее 2/3 межповерочного интервала от даты поставки на склад Заказчика.</td>
          </tr>
          <tr class="row13">
            <td class="column2 style9 s style9" colspan="2">5.Заводской паспорт, руководство по эксплуатации и монтажу на русском языке.</td>
          </tr>
          <tr class="row14">
            <td class="column2 style9 s style9" colspan="2">6.Копия методики поверки, указанной в описании типа.</td>
          </tr>
          <tr class="row15">
            <td class="column1 style4 null style4" colspan="3"></td>
          </tr>
        </tbody>
    </table>
  </body>
</html>

  `
}