export const stampTemplate = (data: any) => {

  const {listNumber, cipher, item} = data;

  return `
   
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
  .list {
    size: A4;
    margin-left: 2cm;
    margin-top: 1cm;
    margin-bottom: 1cm;
    margin-right: 1cm;
  }

  table.stamp {
    border-collapse: collapse;
  }

  .container {
    border: none;
    display: block;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 5px;
  }

  td.stamp-td {
    vertical-align: middle;
    text-align: center;
    padding-left: 2px;
    border: 2px solid #000000 !important;
    color: #000000;
    font-family: "Arial";
    font-size: 8pt;
    background-color: white;
  }

  td.stamp-td-style0 {
    border-bottom: none !important;
  }

  td.stamp-td-style1 {
    text-align: left !important;
  }

  td.stamp-td-style2 {
    font-size: 10pt;
  }

  td.stamp-td-style3 {
    border-top: none !important;
  }

  tr.stamp-row {
    height: 15pt;
  }

  col.col0 {
    width: 1.3cm;
  }
  col.col1 {
    width: 1.7cm;
  }
  col.col2 {
    width: 15cm;
  }
</style>

<div class="list">
  <table class="stamp">
    <col class="col0" />
    <col class="col0" />
    <col class="col0" />
    <col class="col1" />
    <col class="col1" />
    <col class="col0" />
    <col class="col2" />
    <col class="col0" />
    <tbody>
      <tr>
        <td class="stamp-td stamp-td-style0" colspan="8">
          <div class="container">
${item}
          </div>
        </td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td">Изм.</td>
        <td class="stamp-td">Кол.уч.</td>
        <td class="stamp-td">Лист</td>
        <td class="stamp-td">№ док.</td>
        <td class="stamp-td">Подпись</td>
        <td class="stamp-td">Дата</td>
        <td class="stamp-td stamp-td-style3" colspan="2" rowspan="6"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td stamp-td-style1">Разраб.</td>
        <td class="stamp-td stamp-td-style1" colspan="2"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td stamp-td-style1">Проверил</td>
        <td class="stamp-td stamp-td-style1" colspan="2"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td stamp-td-style1">Гл.спец.</td>
        <td class="stamp-td stamp-td-style1" colspan="2"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td stamp-td-style1"></td>
        <td class="stamp-td stamp-td-style1" colspan="2"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td stamp-td-style1">Н.контр.</td>
        <td class="stamp-td stamp-td-style1" colspan="2"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td">Изм.</td>
        <td class="stamp-td"></td>
        <td class="stamp-td">Лист</td>
        <td class="stamp-td">№ док.</td>
        <td class="stamp-td">Подпись</td>
        <td class="stamp-td">Дата</td>
        <td class="stamp-td stamp-td-style2" rowspan="3">${cipher}</td>
        <td class="stamp-td">Лист</td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td" rowspan="2">${listNumber}</td>
      </tr>
      <tr class="stamp-row">
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
        <td class="stamp-td"></td>
      </tr>
    </tbody>
  </table>
</div>

  `
}