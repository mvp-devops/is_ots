export const gazAnalyzeL2Template = (data: any) => {
  const {
    tag, count, location, fda, parameter, tempAmbientMin, tempAmbientMax,
    measureType, measuredArea, measureRangeMin, measureRangeMax, warmingUp,
    responseTime, controlCableConnection, lowerThreshold, upperThreshold, fault,
    adjustment, zeroDrift, opticsCleanliness, registrationEvents, heating, dustProof,
    hart, hartVersion, internalDiagnostic, converterType, converter, localIndication,
    outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection, explosionType,
    explosionMark, safety, accuracy, relativeAccuracy, ambientPermissible, calibrationStamp,
    verification, mpi
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
      td.style3 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style3 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style4 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style4 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style5 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style5 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style6 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style6 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style7 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style7 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style8 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style8 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style9 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style9 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      td.style10 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style10 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style11 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style11 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style12 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style12 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style13 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style13 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style14 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style14 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style15 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style15 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style16 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style16 { vertical-align:bottom; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style17 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style17 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style18 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style18 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style19 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style19 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style20 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style20 { vertical-align:middle; text-align:left; padding-left:9px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style21 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
      th.style21 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
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
      table.sheet0 tr.row10 { height:33.95pt }
      table.sheet0 tr.row11 { height:33.95pt }
      table.sheet0 tr.row12 { height:17.1pt }
      table.sheet0 tr.row13 { height:17.1pt }
      table.sheet0 tr.row14 { height:17.1pt }
      table.sheet0 tr.row15 { height:17.1pt }
      table.sheet0 tr.row16 { height:33.95pt }
      table.sheet0 tr.row17 { height:17.1pt }
      table.sheet0 tr.row18 { height:17.1pt }
      table.sheet0 tr.row19 { height:17.1pt }
      table.sheet0 tr.row20 { height:17.1pt }
      table.sheet0 tr.row21 { height:17.1pt }
      table.sheet0 tr.row22 { height:17.1pt }
      table.sheet0 tr.row23 { height:17.1pt }
      table.sheet0 tr.row24 { height:17.1pt }
      table.sheet0 tr.row25 { height:33.95pt }
      table.sheet0 tr.row26 { height:33.95pt }
      table.sheet0 tr.row27 { height:17.1pt }
      table.sheet0 tr.row28 { height:17.1pt }
      table.sheet0 tr.row29 { height:17.1pt }
      table.sheet0 tr.row30 { height:17.1pt }
      table.sheet0 tr.row31 { height:17.1pt }
      table.sheet0 tr.row32 { height:17.1pt }
      table.sheet0 tr.row33 { height:17.1pt }
      table.sheet0 tr.row34 { height:17.1pt }
      table.sheet0 tr.row35 { height:17.1pt }
      table.sheet0 tr.row36 { height:17.1pt }
      table.sheet0 tr.row37 { height:17.1pt }
      table.sheet0 tr.row38 { height:33.95pt }
      table.sheet0 tr.row39 { height:51pt }
      table.sheet0 tr.row40 { height:17.1pt }
      table.sheet0 tr.row41 { height:17.1pt }
      table.sheet0 tr.row42 { height:17.1pt }
    </style>
  </head>

  <body>
<style>
@page { margin 0in }
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
            <td class="column0 style9 null style9" colspan="5"></td>
          </tr>
          <tr class="row1">
            <td class="column0 style21 null style21" rowspan="42"></td>
            <td class="column1 style2 s">Позиция на схеме (TAG)</td>
            <td class="column2 style10 s style10" colspan="2">${tag}</td>
            <td class="column4 style8 null style8" rowspan="42"></td>
          </tr>
          <tr class="row2">
            <td class="column1 style2 s">Количество, шт.</td>
            <td class="column2 style10 s style10" colspan="2">${count}</td>
          </tr>
          <tr class="row3">
            <td class="column1 style2 s">Номер аппарата или линии</td>
            <td class="column2 style10 s style10" colspan="2">${location}</td>
          </tr>
          <tr class="row4">
            <td class="column1 style2 s">No схемы автоматизации функциональной</td>
            <td class="column2 style10 s style10" colspan="2">${fda}</td>
          </tr>
          <tr class="row5">
            <td class="column1 style2 s">Контроллируемый параметр</td>
            <td class="column2 style10 s style10" colspan="2">${parameter}</td>
          </tr>
          <tr class="row6">
            <td class="column1 style1 s">Температура окружающей среды, °C</td>
            <td class="column2 style10 s style10" colspan="2">${tempAmbientMin} … ${tempAmbientMax}</td>
          </tr>
          <tr class="row7">
            <td class="column1 style2 s">Принцип измерений</td>
            <td class="column2 style10 s style10" colspan="2">${measureType}</td>
          </tr>
          <tr class="row8">
            <td class="column1 style2 s">Контролируемые газы</td>
            <td class="column2 style10 s style10" colspan="2">${measuredArea}</td>
          </tr>
          <tr class="row9">
            <td class="column1 style2 s">Диапазон измеряемых значений, % НКПР</td>
            <td class="column2 style10 s style10" colspan="2">${measureRangeMin} … ${measureRangeMax}</td>
          </tr>
          <tr class="row10">
            <td class="column1 style1 s">Предел времени прогрева газоанализатора, минут (не более)</td>
            <td class="column2 style20 s style20" colspan="2">${warmingUp}</td>
          </tr>
          <tr class="row11">
            <td class="column1 style1 s">Время установления показаний Т<span style="color:#000000; font-family:'Arial'; font-size:10pt"><sub>0,9 ном.</sub></span><span style="color:#000000; font-family:'Arial'; font-size:10pt">, сек. (не более)</span></td>
            <td class="column2 style11 s style12" colspan="2">${responseTime}</td>
          </tr>
          <tr class="row12">
            <td class="column1 style1 s">Место подключения контрольного кабеля</td>
            <td class="column2 style17 s style18" colspan="2">${controlCableConnection}</td>
          </tr>
          <tr class="row13">
            <td class="column1 style6 s">Выходное реле «Нижний порог», % НКПР</td>
            <td class="column2 style15 s style16" colspan="2">${lowerThreshold}</td>
          </tr>
          <tr class="row14">
            <td class="column1 style6 s">Выходное реле «Верхний порог», % НКПР</td>
            <td class="column2 style15 s style16" colspan="2">${upperThreshold}</td>
          </tr>
          <tr class="row15">
            <td class="column1 style6 s">Выходное реле «Неисправность»</td>
            <td class="column2 style15 s style16" colspan="2">${fault ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row16">
            <td class="column1 style4 s">Требуется ли настройка электроники при замене сенсора</td>
            <td class="column2 style17 s style18" colspan="2">${adjustment ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row17">
            <td class="column1 style4 s">Корректировка дрейфа нуля</td>
            <td class="column2 style15 s style16" colspan="2">${zeroDrift ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row18">
            <td class="column1 style4 s">Функция проверки чистоты оптики</td>
            <td class="column2 style15 s style16" colspan="2">${opticsCleanliness ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row19">
            <td class="column1 style4 s">Регистрация событий в энергонезависимой памяти</td>
            <td class="column2 style15 s style16" colspan="2">${registrationEvents ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row20">
            <td class="column1 style4 s">Подогрев оптики</td>
            <td class="column2 style15 s style16" colspan="2">${heating ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row21">
            <td class="column1 style4 s">Пылезащита, брызгозащита, фильтр по влаге</td>
            <td class="column2 style17 s style18" colspan="2">${dustProof ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row22">
            <td class="column1 style20 s style20" rowspan="5">Преобразователь</td>
            <td class="column2 style5 s">Наличие HART</td>
            <td class="column3 style5 s">${hart ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row23">
            <td class="column2 style5 s">Версия HART</td>
            <td class="column3 style5 s">${hartVersion ? hartVersion : "-"}</td>
          </tr>
          <tr class="row24">
            <td class="column2 style5 s">Внутренняя диагностика</td>
            <td class="column3 style5 s">${internalDiagnostic ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row25">
            <td class="column2 style1 s">Тип вторичного преобразователя</td>
            <td class="column3 style1 s">${converterType}</td>
          </tr>
          <tr class="row26">
            <td class="column2 style1 s">Монтаж вторичного преобразователя</td>
            <td class="column3 style1 s">${converter}</td>
          </tr>
          <tr class="row27">
            <td class="column1 style3 s">Визуальный OLED дисплей на русском языке</td>
            <td class="column2 style13 s style14" colspan="2">${localIndication ? "Да" : "Нет"}</td>
          </tr>
          <tr class="row28">
            <td class="column1 style2 s">Выходной сигнал</td>
            <td class="column2 style10 s style10" colspan="2">${outputSignal}</td>
          </tr>
          <tr class="row29">
            <td class="column1 style2 s">Напряжение питания, В</td>
            <td class="column2 style10 s style10" colspan="2">${voltage}</td>
          </tr>
          <tr class="row30">
            <td class="column1 style1 s">Средний срок службы, мес.</td>
            <td class="column2 style10 s style10" colspan="2">${lifeTime}</td>
          </tr>
          <tr class="row31">
            <td class="column1 style1 s">Средняя наработка на отказ, тыс. часов</td>
            <td class="column2 style10 s style10" colspan="2">${mtbf}</td>
          </tr>
          <tr class="row32">
            <td class="column1 style1 s">Материал корпуса</td>
            <td class="column2 style10 s style10" colspan="2">${corpsMaterial}</td>
          </tr>
          <tr class="row33">
            <td class="column1 style1 s">Степень защиты корпуса, не ниже</td>
            <td class="column2 style10 s style10" colspan="2">${protection}</td>
          </tr>
          <tr class="row34">
            <td class="column1 style1 s">Вид взрывозащиты</td>
            <td class="column2 style10 s style10" colspan="2">${explosionType}</td>
          </tr>
          <tr class="row35">
            <td class="column1 style1 s">Маркировка взрывозащиты</td>
            <td class="column2 style10 s style10" colspan="2">${explosionMark}</td>
          </tr>
          <tr class="row36">
            <td class="column1 style1 s">Степень безопасности SIL</td>
            <td class="column2 style10 s style10" colspan="2">${safety}</td>
          </tr>
          <tr class="row37">
            <td class="column1 style1 s">Погрешность измерения, не более, % НКПР</td>
            <td class="column2 style20 s style20" colspan="2">${accuracy}</td>
          </tr>
          <tr class="row38">
            <td class="column1 style4 s">Предел допускаемой вариации выходного сигнала, в долях от пределов допускаемой основной</td>
            <td class="column2 style19 s style19" colspan="2">${relativeAccuracy}</td>
          </tr>
          <tr class="row39">
            <td class="column1 style4 s">Предел допускаемой погрешности от изменения температуры окружающей среды от нормальной на каждые 10 °C, в долях от пределов допускаемой основной погрешности</td>
            <td class="column2 style19 s style19" colspan="2">${ambientPermissible}</td>
          </tr>
          <tr class="row40">
            <td class="column1 style1 s">Наличие штампа заводской калибровки</td>
            <td class="column2 style10 s style10" colspan="2">${calibrationStamp? "Да" : "Нет"}</td>
          </tr>
          <tr class="row41">
            <td class="column1 style1 s">Первичная повека</td>
            <td class="column2 style10 s style10" colspan="2">${verification? "Да" : "Нет"}</td>
          </tr>
          <tr class="row42">
            <td class="column1 style1 s">Межповерочный интервал, мес.</td>
            <td class="column2 style10 s style10" colspan="2">${mpi}</td>
          </tr>
        </tbody>
    </table>
  </body>
</html>

  `
}