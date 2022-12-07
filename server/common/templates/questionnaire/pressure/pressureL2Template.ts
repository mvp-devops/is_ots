export const pressureL2Template = (data: any) => {

  const {tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax,
    measureType, connectionScheme, settingRange, localIndication,
    selfDiagnostic, hart, hartVersion, blockageDiagnostic, currentLoopIntegrityDiagnostic,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, safety, connectionType, connection, valveBlockCorpMaterial,
    valveBlock, valveBlockType, airBleedValve, accuracy, cableEntry, reserveCableEntryStub,
    calibrationStamp, verification, mpi, heating, thermCase, thermBox, mountingBracket
  } = data;

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
      td.style1 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style1 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style2 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style2 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style3 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style3 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style4 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style4 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style5 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style5 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style6 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style6 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style7 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style7 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style8 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style8 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style9 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style9 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style10 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style10 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style11 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style11 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      table.sheet0 col.col0 { width:15.58888871pt }
      table.sheet0 col.col1 { width:216.8888864pt }
      table.sheet0 col.col2 { width:117.25555421pt }
      table.sheet0 col.col3 { width:117.25555421pt }
      table.sheet0 col.col4 { width:15.58888871pt }
      table.sheet0 tr { height:15pt }
      table.sheet0 tr.row0 { height:17.1pt }
      table.sheet0 tr.row1 { height:17.1pt }
      table.sheet0 tr.row2 { height:17.1pt }
      table.sheet0 tr.row3 { height:17.1pt }
      table.sheet0 tr.row4 { height:17.1pt }
      table.sheet0 tr.row5 { height:17.1pt }
      table.sheet0 tr.row6 { height:17.1pt }
      table.sheet0 tr.row7 { height:17.1pt }
      table.sheet0 tr.row8 { height:17.1pt }
      table.sheet0 tr.row9 { height:17.1pt }
      table.sheet0 tr.row10 { height:17.1pt }
      table.sheet0 tr.row11 { height:17.1pt }
      table.sheet0 tr.row12 { height:17.1pt }
      table.sheet0 tr.row13 { height:17.1pt }
      table.sheet0 tr.row14 { height:17.1pt }
      table.sheet0 tr.row15 { height:17.1pt }
      table.sheet0 tr.row16 { height:17.1pt }
      table.sheet0 tr.row17 { height:17.1pt }
      table.sheet0 tr.row18 { height:17.1pt }
      table.sheet0 tr.row19 { height:17.1pt }
      table.sheet0 tr.row20 { height:17.1pt }
      table.sheet0 tr.row21 { height:17.1pt }
      table.sheet0 tr.row22 { height:17.1pt }
      table.sheet0 tr.row23 { height:17.1pt }
      table.sheet0 tr.row24 { height:17.1pt }
      table.sheet0 tr.row25 { height:17.1pt }
      table.sheet0 tr.row26 { height:17.1pt }
      table.sheet0 tr.row27 { height:17.1pt }
      table.sheet0 tr.row28 { height:17.1pt }
      table.sheet0 tr.row29 { height:17.1pt }
      table.sheet0 tr.row30 { height:17.1pt }
      table.sheet0 tr.row31 { height:17.1pt }
      table.sheet0 tr.row32 { height:17.1pt }
      table.sheet0 tr.row33 { height:17.1pt }
      table.sheet0 tr.row34 { height:17.1pt }
      table.sheet0 tr.row35 { height:17.1pt }
      table.sheet0 tr.row36 { height:33.95pt }
      table.sheet0 tr.row37 { height:17.1pt }
      table.sheet0 tr.row38 { height:17.1pt }
      table.sheet0 tr.row39 { height:17.1pt }
      table.sheet0 tr.row40 { height:33.95pt }
      table.sheet0 tr.row41 { height:33.95pt }
      table.sheet0 tr.row42 { height:33.95pt }
      table.sheet0 tr.row43 { height:51pt }
    </style>
  </head>

  <body>
<style>
@page { margin: 0in }
body { margin: 0in }
</style>
    <table border="0" cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
        <col class="col0">
        <col class="col1">
        <col class="col2">
        <col class="col3">
        <col class="col4">
        <tbody>
          <tr class="row0">
            <td class="column0 style8 null style8" colspan="4"></td>
            <td class="column4 style8 null style8" rowspan="45"></td>
          </tr>
          <tr class="row1">
            <td class="column0 style8 null style8" rowspan="44"></td>
            <td class="column1 style1 s">Позиция на схеме (TAG)</td>
            <td class="column2 style6 s style6" colspan="2">${tag}</td>
          </tr>
          <tr class="row2">
            <td class="column1 style1 s">Количество, шт.</td>
            <td class="column2 style6 s style6" colspan="2">${count}</td>
          </tr>
          <tr class="row3">
            <td class="column1 style1 s">Номер аппарата или линии</td>
            <td class="column2 style6 s style6" colspan="2">${location}</td>
          </tr>
          <tr class="row4">
            <td class="column1 style1 s">No схемы автоматизации функциональной</td>
            <td class="column2 style6 s style6" colspan="2">${fda}</td>
          </tr>
          <tr class="row5">
            <td class="column1 style4 s">Контроллируемый параметр</td>
            <td class="column2 style6 s style6" colspan="2">${parameter}</td>
          </tr>
          <tr class="row6">
            <td class="column1 style2 s">Температура окружающей среды, °C</td>
            <td class="column2 style6 s style6" colspan="2">${tempAmbientMin} … ${tempAmbientMax}</td>
          </tr>
          <tr class="row7">
            <td class="column1 style1 s">Вид измерений</td>
            <td class="column2 style6 s style6" colspan="2">${measureType}</td>
          </tr>
          <tr class="row8">
            <td class="column1 style1 s">Измеряемая среда</td>
            <td class="column2 style6 s style6" colspan="2">${measuredArea}</td>
          </tr>
          <tr class="row9">
            <td class="column1 style4 s">Диапазон измеряемых значений, Мпа</td>
            <td class="column2 style6 s style6" colspan="2">${measureRangeMin} … ${measureRangeMax}</td>
          </tr>
          <tr class="row10">
            <td class="column1 style2 s">Давление измеряемой среды (изб.), МПа.</td>
            <td class="column2 style6 s style6" colspan="2">${pressureMeasureAreaMin} … ${pressureMeasureAreaMax}</td>
          </tr>
          <tr class="row11">
            <td class="column1 style1 s">Температура измеряемой среды, °C</td>
            <td class="column2 style6 s style6" colspan="2">${tempMeasureAreaMin} … ${tempMeasureAreaMax}</td>
          </tr>
          <tr class="row12">
            <td class="column1 style2 s">Схема подключения вторичного преобразователя</td>
            <td class="column2 style6 s style6" colspan="2">${connectionScheme}</td>
          </tr>
          <tr class="row13">
            <td class="column1 style10 s style10" rowspan="4">Преобразователь</td>
            <td class="column2 style5 s">Наличие HART</td>
            <td class="column3 style5 s">${hart ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row14">
            <td class="column2 style5 s">Версия HART</td>
            <td class="column3 style5 s">${hartVersion ? hartVersion : "-"}</td>
          </tr>
          <tr class="row15">
            <td class="column2 style5 s">Диапазон настройки</td>
            <td class="column3 style5 s">${settingRange}</td>
          </tr>
          <tr class="row16">
            <td class="column2 style5 s">Внутренняя диагностика</td>
            <td class="column3 style5 s">${internalDiagnostic ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row17">
            <td class="column1 style2 s">Наличие местной индикации</td>
            <td class="column2 style6 s style6" colspan="2">${localIndication ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row18">
            <td class="column1 style2 s">Самодиагностики</td>
            <td class="column2 style6 s style6" colspan="2">${selfDiagnostic ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row19">
            <td class="column1 style2 s">Диагностика закупорки импульсных линий</td>
            <td class="column2 style6 s style6" colspan="2">${blockageDiagnostic ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row20">
            <td class="column1 style2 s">Диагностика целостности токовой цепи</td>
            <td class="column2 style6 s style6" colspan="2">${currentLoopIntegrityDiagnostic ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row21">
            <td class="column1 style4 s">Выходной сигнал</td>
            <td class="column2 style6 s style6" colspan="2">${outputSignal}</td>
          </tr>
          <tr class="row22">
            <td class="column1 style4 s">Напряжение питания</td>
            <td class="column2 style6 s style6" colspan="2">${voltage}</td>
          </tr>
          <tr class="row23">
            <td class="column1 style2 s">Средний срок службы, мес.</td>
            <td class="column2 style6 s style6" colspan="2">${lifeTime}</td>
          </tr>
          <tr class="row24">
            <td class="column1 style2 s">Средняя наработка на отказ, тыс. часов</td>
            <td class="column2 style6 s style6" colspan="2">${mtbf}</td>
          </tr>
          <tr class="row25">
            <td class="column1 style2 s">Материал корпуса</td>
            <td class="column2 style6 s style6" colspan="2">${corpsMaterial}</td>
          </tr>
          <tr class="row26">
            <td class="column1 style2 s">Степень защиты корпуса, не ниже</td>
            <td class="column2 style6 s style6" colspan="2">${protection}</td>
          </tr>
          <tr class="row27">
            <td class="column1 style2 s">Вид взрывозащиты</td>
            <td class="column2 style6 s style6" colspan="2">${explosionType}</td>
          </tr>
          <tr class="row28">
            <td class="column1 style2 s">Маркировка взрывозащиты</td>
            <td class="column2 style6 s style6" colspan="2">${explosionMark}</td>
          </tr>
          <tr class="row29">
            <td class="column1 style2 s">Степень безопасности SIL</td>
            <td class="column2 style6 s style6" colspan="2">${safety}</td>
          </tr>
          <tr class="row30">
            <td class="column1 style1 s">Тип присоединения к тех.процессу</td>
            <td class="column2 style6 s style6" colspan="2">${connectionType}</td>
          </tr>
          <tr class="row31">
            <td class="column1 style1 s">Соединение с тех. процессом</td>
            <td class="column2 style6 s style6" colspan="2">${connection}</td>
          </tr>
          <tr class="row32">
            <td class="column1 style1 s">Клапанный блок:</td>
            <td class="column2 style6 s style6" colspan="2">${valveBlock ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row33">
            <td class="column1 style1 s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- исполнение клапанного блока</td>
            <td class="column2 style6 s style6" colspan="2">${valveBlockType}</td>
          </tr>
          <tr class="row34">
            <td class="column1 style2 s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- наличие клапана для стравливания воздуха:</td>
            <td class="column2 style6 s style6" colspan="2">${airBleedValve ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row35">
            <td class="column1 style1 s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- материал корпуса:</td>
            <td class="column2 style6 s style6" colspan="2">${valveBlockCorpMaterial}</td>
          </tr>
          <tr class="row36">
            <td class="column1 style2 s">Предел допускаемой основной приведенной погрешности, %</td>
            <td class="column2 style7 s style7" colspan="2">${accuracy}</td>
          </tr>
          <tr class="row37">
            <td class="column1 style2 s">Наличие штампа заводской калибровки</td>
            <td class="column2 style6 s style6" colspan="2">${calibrationStamp ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row38">
            <td class="column1 style2 s">Первичная повека</td>
            <td class="column2 style6 s style6" colspan="2">${verification ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row39">
            <td class="column1 style2 s">Межповерочный интервал, мес.</td>
            <td class="column2 style6 s style6" colspan="2">${mpi}</td>
          </tr>
          <tr class="row40">
            <td class="column1 style9 s style9" rowspan="4">Принадлежности</td>
            <td class="column2 style3 s">Кабельный ввод</td>
            <td class="column3 style3 s">${cableEntry}</td>
          </tr>
          <tr class="row41">
            <td class="column2 style3 s">Заглушка резервного кабельного ввода</td>
            <td class="column3 style3 s">${reserveCableEntryStub}</td>
          </tr>
          <tr class="row42">
            <td class="column2 style3 s">Обогрев</td>
            <td class="column3 style3 s">${heating === "Не предусмотрено" ? heating : thermCase ? thermCase : thermBox ? thermBox : ""}</td>
          </tr>
          <tr class="row43">
            <td class="column2 style3 s">Монтажный кронштейн</td>
            <td class="column3 style3 s">${mountingBracket}</td>
          </tr>
          <tr class="row44">
            <td class="column1 style11 null style11" colspan="3"></td>
          </tr>
        </tbody>
    </table>
  </body>
</html>
  `
}