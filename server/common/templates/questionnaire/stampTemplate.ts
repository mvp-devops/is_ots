export const stampTemplate = (data: any) => {

  const {listNumber, cipher, item} = data;

  return `
<!DOCTYPE html >
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
        text-align: center;
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
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style1 {
        vertical-align: top;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style2 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style2 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style3 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style3 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style4 {
        vertical-align: top;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style4 {
        vertical-align: top;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style5 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style5 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style6 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style6 {
        vertical-align: middle;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style7 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      th.style7 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      td.style8 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      th.style8 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      td.style9 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      th.style9 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      td.style10 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      th.style10 {
        vertical-align: bottom;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "Calibri";
        font-size: 11pt;
        background-color: white;
      }
      td.style11 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style11 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style12 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style12 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style13 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style13 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style14 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style14 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style15 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style15 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style16 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style16 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style17 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style17 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style18 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style18 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style19 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      th.style19 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      td.style20 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      th.style20 {
        vertical-align: middle;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      td.style21 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      th.style21 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 14pt;
        background-color: white;
      }
      td.style22 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      th.style22 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      td.style23 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style23 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style24 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style24 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style25 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style25 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style26 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style26 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style27 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style27 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style28 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style28 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style29 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style29 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style30 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      th.style30 {
        vertical-align: middle;
        text-align: left;
        padding-left: 0px;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 8pt;
        background-color: white;
      }
      td.style31 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      th.style31 {
        vertical-align: middle;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: 2px solid #000000 !important;
        border-left: 2px solid #000000 !important;
        border-right: 2px solid #000000 !important;
        font-style: italic;
        color: #000000;
        font-family: "GOST type A";
        font-size: 10pt;
        background-color: white;
      }
      td.style32 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style32 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style33 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style33 {
        vertical-align: top;
        text-align: center;
        border-bottom: none #000000;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style34 {
        vertical-align: top;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style34 {
        vertical-align: top;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: 2px solid #000000 !important;
        border-right: none #000000;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      td.style35 {
        vertical-align: top;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      th.style35 {
        vertical-align: top;
        text-align: center;
        border-bottom: 2px solid #000000 !important;
        border-top: none #000000;
        border-left: none #000000;
        border-right: 2px solid #000000 !important;
        color: #000000;
        font-family: "GOST type A";
        font-size: 11pt;
        background-color: white;
      }
      table.sheet0 col.col0 {
        width: 8.13333324pt;
      }
      table.sheet0 col.col1 {
        width: 12.87777763pt;
      }
      table.sheet0 col.col2 {
        width: 12.87777763pt;
      }
      table.sheet0 col.col3 {
        width: 18.97777756pt;
      }
      table.sheet0 col.col4 {
        width: 27.1111108pt;
      }
      table.sheet0 col.col5 {
        width: 18.97777756pt;
      }
      table.sheet0 col.col6 {
        width: 24.39999972pt;
      }
      table.sheet0 col.col7 {
        width: 31.85555519pt;
      }
      table.sheet0 col.col8 {
        width: 25.07777749pt;
      }
      table.sheet0 col.col9 {
        width: 264.3333303pt;
      }
      table.sheet0 col.col10 {
        width: 25.07777749pt;
      }
      table.sheet0 col.col11 {
        width: 8.13333324pt;
      }
      table.sheet0 tr {
        height: 15pt;
      }
      table.sheet0 tr.row0 {
        height: 15pt;
      }
      table.sheet0 tr.row1 {
        height: 550pt;
      }
      table.sheet0 tr.row2 {
        height: 399.95pt;
      }
      table.sheet0 tr.row3 {
        height: 72pt;
      }
      table.sheet0 tr.row4 {
        height: 60pt;
      }
      table.sheet0 tr.row5 {
        height: 12pt;
      }
      table.sheet0 tr.row6 {
        height: 12pt;
      }
      table.sheet0 tr.row7 {
        height: 12pt;
      }
      table.sheet0 tr.row8 {
        height: 12pt;
      }
      table.sheet0 tr.row9 {
        height: 12pt;
      }
      table.sheet0 tr.row10 {
        height: 12pt;
      }
      table.sheet0 tr.row11 {
        height: 12pt;
      }
      table.sheet0 tr.row12 {
        height: 12pt;
      }
      table.sheet0 tr.row13 {
        height: 12pt;
      }
      table.sheet0 tr.row14 {
        height: 12pt;
      }
    </style>
  </head>

  <div>
    <table
      id="sheet0"
      class="sheet0 gridlines"
      style="        width: 21cm;
      height: 29.7cm;"
    >
      <col class="col0"/>
      <col class="col1" />
      <col class="col2" />
      <col class="col3" />
      <col class="col4" />
      <col class="col5" />
      <col class="col6" />
      <col class="col7" />
      <col class="col8" />
      <col class="col9" />
      <col class="col10" />
      <col class="col11" />
      <tbody>
        <tr class="row0">
          <td class="column0 style9 null style9" colspan="12"></td>
        </tr>
        <tr class="row1">
          <td class="column0 style9 null style10" colspan="3"></td>
          <td class="column3 style11 s style16" colspan="8" rowspan="3">
            <iframe
              src=${item}
              style="        width: 19.5cm;
              height: 24cm;"
            
          style="           overflow: hidden; border: none"
        
            ></iframe>
          </td>
          <td class="column11 style9 null style9" rowspan="12"></td>
        </tr>
        <tr class="row3">
          <td class="column0 style7 null"></td>
          <td
            class="column1 style8 s"
            style="writing-mode: vertical-rl; transform: scale(-1);"
          >
            Взам.инв.н.
          </td>
          <td class="column2 style8 null"></td>
        </tr>
        <tr class="row4">
          <td class="column0 style7 null"></td>
          <td
            class="column1 style22 s style22"
            rowspan="4"
            style="writing-mode: vertical-rl; transform: scale(-1);"
          >
            Подп. и дата
          </td>
          <td class="column2 style22 null style22" rowspan="4"></td>
        </tr>
        <tr class="row5">
          <td class="column0 style9 null style9" rowspan="10"></td>
          <td class="column3 style4 s">Изм.</td>
          <td class="column4 style4 s">Кол.уч.</td>
          <td class="column5 style4 s">Лист</td>
          <td class="column6 style1 s">№ док.</td>
          <td class="column7 style2 s">Подпись</td>
          <td class="column8 style2 s">Дата</td>
          <td class="column9 style32 null style35" colspan="2" rowspan="6"></td>
        </tr>
        <tr class="row6">
          <td class="column3 style25 s style26" colspan="2">Разраб.</td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style5 null"></td>
        </tr>
        <tr class="row7">
          <td class="column3 style25 s style26" colspan="2">Проверил</td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style5 null"></td>
        </tr>
        <tr class="row8">
          <td
            class="column1 style22 s style22"
            rowspan="6"
            style="writing-mode: vertical-rl; transform: scale(-1);"
          >
            Инв. н. подл
          </td>
          <td class="column2 style31 null style31" rowspan="6"></td>
          <td class="column3 style25 s style26" colspan="2">Гл.спец.</td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style5 null"></td>
        </tr>
        <tr class="row9">
          <td class="column3 style29 null style30" colspan="2"></td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style5 null"></td>
        </tr>
        <tr class="row10">
          <td class="column3 style25 s style26" colspan="2">Н.контр.</td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style5 null"></td>
        </tr>
        <tr class="row11">
          <td class="column3 style2 s">Изм.</td>
          <td class="column4 style2 s">Лист</td>
          <td class="column5 style25 s style26" colspan="2">№ докум.</td>
          <td class="column7 style2 s">Подпись</td>
          <td class="column8 style2 s">Дата</td>
          <td class="column9 style19 s style21" rowspan="3">${cipher}</td>
          <td class="column10 style6 s">Лист</td>
        </tr>
        <tr class="row12">
          <td class="column3 style3 null"></td>
          <td class="column4 style3 null"></td>
          <td class="column5 style27 null style28" colspan="2"></td>
          <td class="column7 style3 null"></td>
          <td class="column8 style3 null"></td>
          <td class="column10 style17 s style18" rowspan="2">${listNumber}</td>
        </tr>
        <tr class="row13">
          <td class="column3 style2 null"></td>
          <td class="column4 style2 null"></td>
          <td class="column5 style23 null style24" colspan="2"></td>
          <td class="column7 style2 null"></td>
          <td class="column8 style2 null"></td>
        </tr>
        <tr class="row14">
          <td class="column1 style9 null style9" colspan="11"></td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

  `
}