export const stampTemplate = (data: any) => {

  return `
  <!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
      html { font-family: Arial, Helvetica, sans-serif; font-size:10pt; background-color:white }
      table { border-collapse:collapse; page-break-after:always; margin: 1cm; width: 21cm; height: 29.7cm }
      .gridlines td { border:1px dotted black }
      .gridlines th { border:1px dotted black }
      .b { text-align:center }
      .e { text-align:center }
      .f { text-align:right }
      .inlineStr { text-align:left }
      .n { text-align:right }
      .s { text-align:left }
      td.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style1 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style1 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:1101pt; background-color:white }
      td.style2 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style2 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style3 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style3 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style4 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style4 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style5 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style5 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style6 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      th.style6 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
      td.style7 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style7 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style8 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style8 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style9 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style9 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style10 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style10 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style11 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; font-style:italic; color:black; font-family:'GOST type A'; font-size:14pt; background-color:white }
      th.style11 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; font-style:italic; color:#A5A5A5; font-family:'GOST type A'; font-size:14pt; background-color:white }
      td.style12 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style12 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style13 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style13 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style14 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style14 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style15 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style15 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style16 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:6pt; background-color:white }
      th.style16 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:6pt; background-color:white }
      td.style17 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background: transparent }
      th.style17 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style18 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style18 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style19 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style19 { vertical-align:middle; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style20 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      th.style20 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:8pt; background-color:white }
      td.style21 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style21 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style22 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style22 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style23 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style23 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:2px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      td.style24 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      th.style24 { vertical-align:middle; text-align:left; padding-left:0px; border-bottom:2px solid #000000 !important; border-top:2px solid #000000 !important; border-left:2px solid #000000 !important; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'GOST type A'; font-size:11pt; background-color:white }
      table.sheet0 col.col0 { width:7.45555547pt }
      table.sheet0 col.col1 { width:7.45555547pt }
      table.sheet0 col.col2 { width:7.45555547pt }
      table.sheet0 col.col3 { width:7.45555547pt }
      table.sheet0 col.col4 { width:7.45555547pt }
      table.sheet0 col.col5 { width:7.45555547pt }
      table.sheet0 col.col6 { width:7.45555547pt }
      table.sheet0 col.col7 { width:7.45555547pt }
      table.sheet0 col.col8 { width:7.45555547pt }
      table.sheet0 col.col9 { width:7.45555547pt }
      table.sheet0 col.col10 { width:7.45555547pt }
      table.sheet0 col.col11 { width:7.45555547pt }
      table.sheet0 col.col12 { width:7.45555547pt }
      table.sheet0 col.col13 { width:7.45555547pt }
      table.sheet0 col.col14 { width:7.45555547pt }
      table.sheet0 col.col15 { width:7.45555547pt }
      table.sheet0 col.col16 { width:7.45555547pt }
      table.sheet0 col.col17 { width:10.84444432pt }
      table.sheet0 col.col18 { width:7.45555547pt }
      table.sheet0 col.col19 { width:7.45555547pt }
      table.sheet0 col.col20 { width:7.45555547pt }
      table.sheet0 col.col21 { width:7.45555547pt }
      table.sheet0 col.col22 { width:7.45555547pt }
      table.sheet0 col.col23 { width:7.45555547pt }
      table.sheet0 col.col24 { width:7.45555547pt }
      table.sheet0 col.col25 { width:7.45555547pt }
      table.sheet0 col.col26 { width:7.45555547pt }
      table.sheet0 col.col27 { width:7.45555547pt }
      table.sheet0 col.col28 { width:7.45555547pt }
      table.sheet0 col.col29 { width:7.45555547pt }
      table.sheet0 col.col30 { width:7.45555547pt }
      table.sheet0 col.col31 { width:7.45555547pt }
      table.sheet0 col.col32 { width:7.45555547pt }
      table.sheet0 col.col33 { width:7.45555547pt }
      table.sheet0 col.col34 { width:7.45555547pt }
      table.sheet0 col.col35 { width:7.45555547pt }
      table.sheet0 col.col36 { width:7.45555547pt }
      table.sheet0 col.col37 { width:7.45555547pt }
      table.sheet0 col.col38 { width:7.45555547pt }
      table.sheet0 col.col39 { width:7.45555547pt }
      table.sheet0 col.col40 { width:7.45555547pt }
      table.sheet0 col.col41 { width:7.45555547pt }
      table.sheet0 col.col42 { width:7.45555547pt }
      table.sheet0 col.col43 { width:7.45555547pt }
      table.sheet0 col.col44 { width:7.45555547pt }
      table.sheet0 col.col45 { width:7.45555547pt }
      table.sheet0 col.col46 { width:7.45555547pt }
      table.sheet0 col.col47 { width:7.45555547pt }
      table.sheet0 col.col48 { width:7.45555547pt }
      table.sheet0 col.col49 { width:7.45555547pt }
      table.sheet0 col.col50 { width:7.45555547pt }
      table.sheet0 col.col51 { width:7.45555547pt }
      table.sheet0 col.col52 { width:7.45555547pt }
      table.sheet0 col.col53 { width:7.45555547pt }
      table.sheet0 col.col54 { width:7.45555547pt }
      table.sheet0 col.col55 { width:7.45555547pt }
      table.sheet0 col.col56 { width:7.45555547pt }
      table.sheet0 col.col57 { width:7.45555547pt }
      table.sheet0 col.col58 { width:7.45555547pt }
      table.sheet0 col.col59 { width:7.45555547pt }
      table.sheet0 col.col60 { width:7.45555547pt }
      table.sheet0 col.col61 { width:14.91111094pt }
      table.sheet0 tr { height:15pt }
      table.sheet0 tr.row0 { height:12pt }
      table.sheet0 tr.row1 { height:12pt }
      table.sheet0 tr.row2 { height:12pt }
      table.sheet0 tr.row3 { height:12pt }
      table.sheet0 tr.row4 { height:12pt }
      table.sheet0 tr.row5 { height:12pt }
      table.sheet0 tr.row6 { height:12pt }
      table.sheet0 tr.row7 { height:12pt }
      table.sheet0 tr.row8 { height:12pt }
      table.sheet0 tr.row9 { height:12pt }
      table.sheet0 tr.row10 { height:12pt }
      table.sheet0 tr.row11 { height:12pt }
      table.sheet0 tr.row12 { height:12pt }
      table.sheet0 tr.row13 { height:12pt }
      table.sheet0 tr.row14 { height:12pt }
      table.sheet0 tr.row15 { height:12pt }
      table.sheet0 tr.row16 { height:12pt }
      table.sheet0 tr.row17 { height:12pt }
      table.sheet0 tr.row18 { height:12pt }
      table.sheet0 tr.row19 { height:12pt }
      table.sheet0 tr.row20 { height:12pt }
      table.sheet0 tr.row21 { height:12pt }
      table.sheet0 tr.row22 { height:12pt }
      table.sheet0 tr.row23 { height:12pt }
      table.sheet0 tr.row24 { height:12pt }
      table.sheet0 tr.row25 { height:12pt }
      table.sheet0 tr.row26 { height:12pt }
      table.sheet0 tr.row27 { height:12pt }
      table.sheet0 tr.row28 { height:12pt }
      table.sheet0 tr.row29 { height:12pt }
      table.sheet0 tr.row30 { height:12pt }
      table.sheet0 tr.row31 { height:12pt }
      table.sheet0 tr.row32 { height:12pt }
      table.sheet0 tr.row33 { height:12pt }
      table.sheet0 tr.row34 { height:12pt }
      table.sheet0 tr.row35 { height:12pt }
      table.sheet0 tr.row36 { height:12pt }
      table.sheet0 tr.row37 { height:12pt }
      table.sheet0 tr.row38 { height:12pt }
      table.sheet0 tr.row39 { height:12pt }
      table.sheet0 tr.row40 { height:12pt }
      table.sheet0 tr.row41 { height:12pt }
      table.sheet0 tr.row42 { height:12pt }
      table.sheet0 tr.row43 { height:12pt }
      table.sheet0 tr.row44 { height:12pt }
      table.sheet0 tr.row45 { height:12pt }
      table.sheet0 tr.row46 { height:12pt }
      table.sheet0 tr.row47 { height:12pt }
      table.sheet0 tr.row48 { height:12pt }
      table.sheet0 tr.row49 { height:12pt }
      table.sheet0 tr.row50 { height:12pt }
      table.sheet0 tr.row51 { height:17.25pt }
      table.sheet0 tr.row52 { height:12pt }
      table.sheet0 tr.row53 { height:12pt }
      table.sheet0 tr.row54 { height:12pt }
      table.sheet0 tr.row55 { height:12pt }
      table.sheet0 tr.row56 { height:12pt }
      table.sheet0 tr.row57 { height:12pt }
      table.sheet0 tr.row58 { height:12pt }
      table.sheet0 tr.row59 { height:12pt }
      table.sheet0 tr.row60 { height:12pt }
      table.sheet0 tr.row61 { height:12pt }
    </style>
  </head>

  <body>
<style>
</style>
    <table border="0" cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
        <col class="col0">
        <col class="col1">
        <col class="col2">
        <col class="col3">
        <col class="col4">
        <col class="col5">
        <col class="col6">
        <col class="col7">
        <col class="col8">
        <col class="col9">
        <col class="col10">
        <col class="col11">
        <col class="col12">
        <col class="col13">
        <col class="col14">
        <col class="col15">
        <col class="col16">
        <col class="col17">
        <col class="col18">
        <col class="col19">
        <col class="col20">
        <col class="col21">
        <col class="col22">
        <col class="col23">
        <col class="col24">
        <col class="col25">
        <col class="col26">
        <col class="col27">
        <col class="col28">
        <col class="col29">
        <col class="col30">
        <col class="col31">
        <col class="col32">
        <col class="col33">
        <col class="col34">
        <col class="col35">
        <col class="col36">
        <col class="col37">
        <col class="col38">
        <col class="col39">
        <col class="col40">
        <col class="col41">
        <col class="col42">
        <col class="col43">
        <col class="col44">
        <col class="col45">
        <col class="col46">
        <col class="col47">
        <col class="col48">
        <col class="col49">
        <col class="col50">
        <col class="col51">
        <col class="col52">
        <col class="col53">
        <col class="col54">
        <col class="col55">
        <col class="col56">
        <col class="col57">
        <col class="col58">
        <col class="col59">
        <col class="col60">
        <col class="col61">
        <tbody>
          <tr class="row0">
            <td class="column0 style2 null style2" colspan="4" rowspan="42"></td>
            <td class="column4 style21 null style23" colspan="57"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row1">
            <td class="column4 style4 null style4" rowspan="51"></td>
              <td class="column5 style6 s style6" colspan="55" rowspan="51">
                  <iframe src="l2.html" width="648" height="900" style="border: none; content: center; margin: 0; padding: 0" hspace="0" vspace="0">
                      Ваш браузер не поддерживает плавающие фреймы!
                  </iframe>
              </td>
            <td class="column60 style3 null style3" rowspan="51"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row2">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row3">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row4">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row5">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row6">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row7">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row8">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row9">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row10">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row11">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row12">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row13">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row14">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row15">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row16">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row17">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row18">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row19">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row20">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row21">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row22">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row23">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row24">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row25">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row26">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row27">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row28">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row29">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row30">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row31">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row32">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row33">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row34">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row35">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row36">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row37">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row38">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row39">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row40">
              <td class="column61 style1 null"></td>
          </tr>
          <tr class="row41">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row42">
            <td class="column0 style17 s style17" colspan="2" rowspan="6"><span style="transform: rotate(90deg)">Взам.инв.№</span></td>
            <td class="column2 style17 null style19" colspan="2" rowspan="6"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row43">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row44">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row45">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row46">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row47">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row48">
            <td class="column0 style17 s style17" colspan="2" rowspan="8">Подп. и дата</td>
            <td class="column2 style17 null style19" colspan="2" rowspan="8"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row49">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row50">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row51">
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row52">
            <td class="column4 style7 null style9" colspan="57"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row53">
            <td class="column4 style20 s style20" colspan="3">Изм.</td>
            <td class="column7 style20 s style20" colspan="4">Кол.уч.</td>
            <td class="column11 style20 s style20" colspan="3">Лист</td>
            <td class="column14 style20 s style20" colspan="4">№ док.</td>
            <td class="column18 style5 s style5" colspan="4">Подп.</td>
            <td class="column22 style5 s style5" colspan="3">Дата</td>
            <td class="column25 style10 null style3" colspan="36" rowspan="6"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row54">
            <td class="column4 style14 s style14" colspan="7">Разраб.</td>
            <td class="column11 style15 null style15" colspan="7"></td>
            <td class="column18 style12 null style12" colspan="4"></td>
            <td class="column22 style16 null style16" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row55">
            <td class="column4 style14 s style14" colspan="7">Проверил</td>
            <td class="column11 style15 null style15" colspan="7"></td>
            <td class="column18 style12 null style12" colspan="4"></td>
            <td class="column22 style16 null style16" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row56">
            <td class="column0 style17 s style17" colspan="2" rowspan="6">Инв.№ подл</td>
            <td class="column2 style12 null style18" colspan="2" rowspan="6"></td>
            <td class="column4 style14 s style14" colspan="7">Гл.спец.</td>
            <td class="column11 style15 null style15" colspan="7"></td>
            <td class="column18 style12 null style12" colspan="4"></td>
            <td class="column22 style16 null style16" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row57">
            <td class="column4 style24 null style24" colspan="7"></td>
            <td class="column11 style15 null style15" colspan="7"></td>
            <td class="column18 style12 null style12" colspan="4"></td>
            <td class="column22 style16 null style16" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row58">
            <td class="column4 style14 s style14" colspan="7">Н.контр.</td>
            <td class="column11 style15 null style15" colspan="7"></td>
            <td class="column18 style12 null style12" colspan="4"></td>
            <td class="column22 style16 null style16" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row59">
            <td class="column4 style5 s style5" colspan="3">Изм.</td>
            <td class="column7 style5 s style5" colspan="4">Лист</td>
            <td class="column11 style5 s style5" colspan="7">№ докум.</td>
            <td class="column18 style5 s style5" colspan="4">Подп.</td>
            <td class="column22 style5 s style5" colspan="3">Дата</td>
            <td class="column25 style11 s style11" colspan="32" rowspan="3">шифр документа</td>
            <td class="column57 style12 s style12" colspan="4">Лист</td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row60">
            <td class="column4 style13 null style13" colspan="3"></td>
            <td class="column7 style13 null style13" colspan="4"></td>
            <td class="column11 style13 null style13" colspan="7"></td>
            <td class="column18 style13 null style13" colspan="4"></td>
            <td class="column22 style13 null style13" colspan="3"></td>
            <td class="column57 style5 s style5" colspan="4" rowspan="2">#</td>
            <td class="column61 style1 null"></td>
          </tr>
          <tr class="row61">
            <td class="column4 style5 null style5" colspan="3"></td>
            <td class="column7 style5 null style5" colspan="4"></td>
            <td class="column11 style5 null style5" colspan="7"></td>
            <td class="column18 style5 null style5" colspan="4"></td>
            <td class="column22 style5 null style5" colspan="3"></td>
            <td class="column61 style1 null"></td>
          </tr>
        </tbody>
    </table>
  </body>
</html>  
  `
}