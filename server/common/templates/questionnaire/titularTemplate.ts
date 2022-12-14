export const titularTemplate = (data) => {
  const {subsidiary, field, project, unit, subUnit, questionnaireType, year, title} = data;

  return `
            <style>
              table.titular {
                border-collapse: collapse;
                border: none;
                color: #000000;
                font-family: "Arial";
                font-size: 14pt;
                background-color: white;
                text-align: center;
              }
              col.titular-col0 {
                width: 35%;
              }
              col.titular-col1 {
                width: 65%;
              }
              tr.titular-row {
                height: 17pt;
              }
              tr.titular-row1 {
                height: 34pt;
              }
              tr.titular-row3 {
                height: 51pt;
              }
              tr.titular-row4 {
                height: 68pt;
              }
              tr.titular-row5 {
                height: 85pt;
              }
              tr.titular-row6 {
                height: 102pt;
              }
              td.titular-td {
                vertical-align: middle;
                font-weight: 600;
              }
              td.titular-td-style0 {
                vertical-align: top !important;
                text-align: right !important;
              }
              td.titular-td-style1 {
                vertical-align: top !important;
                text-align: left !important;
                font-weight: 400;
                padding-left: 10px;
              }
              td.titular-style2 {
                vertical-align: top !important;
                text-align: right !important;
                font-weight: 400;
              }
            </style>
            <table class="titular">
              <col class="titular-col0" />
              <col class="titular-col1" />
              <tbody>
                <tr class="titular-row6">
                  <td colspan="2" class="titular-td">
                    <svg
                      style="position: relative;"
                      height="200"
                      viewBox="7.081 7.088 680.184 326.916"
                      width="300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#0079c2">
                        <path
                          d="m217.168 107.863h43.168v14.105h-20.535v99.105h-22.633zm68.761 70.71 3.879-56.605h1.299l3.879 56.605zm-25.064 42.5h22.16l2.096-30.066h10.672l2.106 30.066h22.15l-11.803-113.21h-35.578zm91.598-39.623v21.342c0 2.877 2.227 3.712 3.526 3.712 2.134 0 3.619-1.763 3.619-3.712v-26.352c0-3.527-.65-7.424-9.094-7.424h-9.187v-12.434h9.558c6.403 0 8.723-1.485 8.723-8.445v-22.457c0-1.949-1.485-3.712-3.62-3.712-1.298 0-3.525.742-3.525 3.712v18.466h-22.643v-16.053c0-7.888.928-20.23 16.795-20.23h18.745c15.868 0 16.889 12.342 16.889 20.23v18.094c0 12.342-8.63 15.683-15.404 15.404v1.114c15.218-.371 15.404 11.32 15.404 15.311v22.828c0 7.98-1.021 20.229-16.889 20.229h-18.745c-15.867 0-16.795-12.25-16.795-20.23v-19.393zm44.634-73.587h52.429v113.21h-22.642v-99.105h-7.145v99.105h-22.642zm89.918 62.266v-48.16h2.97c2.412 0 4.175 2.04 4.175 5.66v36.839c0 3.62-1.763 5.66-4.176 5.66zm-22.642 50.944h22.642v-38.51h12.99c15.776 0 16.797-12.249 16.797-20.23v-34.24c0-7.888-1.021-20.23-16.796-20.23h-35.633zm97.063-18.281c0 1.949-1.485 3.712-3.619 3.712-1.3 0-3.526-.835-3.526-3.712v-77.112c0-2.97 2.227-3.712 3.526-3.712 2.134 0 3.619 1.763 3.619 3.712zm-29.787-1.948c0 7.98 1.02 20.229 16.796 20.229h18.837c15.775 0 16.796-12.25 16.796-20.23v-72.75c0-7.888-1.02-20.23-16.796-20.23h-18.837c-15.775 0-16.796 12.342-16.796 20.23zm126.108-92.981h29.508v113.21h-22.641v-70.988h-.836l-11.692 70.988h-18.095l-11.599-70.988h-.835v70.988h-22.642v-113.21h29.416l14.754 79.618zm-469.931-41.757c-6.931-30.344-24.303-55.027-26.697-59.018-3.786 5.66-17.64 27.468-24.683 51.594-7.693 27.003-8.825 50.944-6.17 74.421 2.635 23.57 12.591 47.79 12.591 47.79 5.29 12.62 13.214 26.26 18.374 32.942 7.562-9.836 24.943-39.16 30.362-77.391 3.016-21.343 3.146-39.994-3.777-70.338zm-26.697 140.12c-3.405-6.403-8.695-18.56-9.196-37.49-.13-18.187 7.173-33.87 9.308-37.117 1.902 3.248 8.193 16.888 8.945 35.54.51 18.188-5.54 32.57-9.057 39.067zm24.684-88.62c-.26 11.6-1.643 23.849-3.406 31.18.631-12.62-.881-30.344-3.777-44.263-2.895-13.827-11.089-37.025-17.63-47.697-6.041 10.208-13.484 30.251-17.381 47.604-3.916 17.352-4.027 38.417-4.027 44.727-1.04-5.29-3.638-24.312-2.905-43.335.613-15.682 4.287-31.921 6.301-39.345 7.683-24.776 16.378-40.644 18.011-43.15 1.634 2.506 12.583 22.086 18.262 42.593 5.652 20.508 6.793 40.18 6.552 51.687"
                        />
                        <path
                          d="m172.886 220.887h-52.698v35.355c.047 0 .084-.093.13-.093 12.416-12.434 32.553-12.434 44.978 0 12.416 12.342 12.416 32.478 0 44.913-.056.092-.112.092-.167.185-.065 0-.13.093-.186.186-12.388 12.249-28.571 18.373-44.755 18.373-16.257 0-32.515-6.124-44.912-18.559-21.863-21.807-24.452-55.677-7.786-80.36a64.287 64.287 0 0 1 7.786-9.465c12.397-12.434 28.655-18.559 44.912-18.559v-85c-62.469 0-113.107 50.573-113.107 113.024s50.638 113.117 113.107 113.117c32.571 0 61.913-13.827 82.55-35.819v-77.298zm514.379 33.261h-470.097v79.856h470.097zm-40.65 55.748h5.965v-12.054h-5.965zm0-21.094h9.025l6.043 3.014 1.49 3.013 1.492 6.027v3.013c-.157 21.589-14.047 13.686-28.644 15.068v-49.722h10.594zm-78.396-19.587v9.04h-7.534v40.682h-12.007v-40.682h-7.533v-9.04zm-109.944 36.161h1.491l2.982-1.507v-21.094h-4.473zm-12.085-22.6h-4.552v21.093l3.06 1.507h1.492zm12.085-13.561v4.52h7.534l4.473 3.013 3.06 3.014 1.491 6.027v16.574l-1.49 6.027-3.061 3.013-4.473 3.013h-7.534v4.52h-12.085v-4.52h-7.534l-4.551-3.013-2.982-3.013-1.491-6.027v-16.574l1.49-6.027 2.983-3.014 4.551-3.013h7.534v-4.52zm-97.968 0v9.04h-9.04v10.547h9.04v9.04h-9.04v12.054h10.547v9.04h-22.601v-49.721zm-108.484 19.587h6.027v-19.587h10.547v49.722h-10.547v-21.095h-6.027v21.095h-12.054v-49.722h12.054z"
                        />
                      </g>
                    </svg>
                  </td>
                </tr>
                <tr class="titular-row0">
                  <td colspan="2" class="titular-td">
                    ???????????????? ?? ???????????????????????? ????????????????????????????????
                  </td>
                </tr>
                <tr class="titular-row0">
                  <td colspan="2" class="titular-td">
                    ??????????????????????????-????????????????????????????
                  </td>
                </tr>
                <tr class="titular-row1">
                  <td style="font-weight: 400;" colspan="2" class="titular-td">
                    (?????? ??????????????????????????-????????????????????????????)
                  </td>
                </tr>
                <tr class="titular-row5">
                  <td colspan="2" class="titular-td"></td>
                </tr>
     
                </tr>
                <tr class="titular-row1">
                  <td class="titular-td titular-td-style0">????????????????:</td>
                  <td class="titular-td titular-td-style1">${subsidiary}</td>
                </tr>
                <tr class="titular-row1">
                  <td class="titular-td titular-td-style0">??????????????????????????:</td>
                  <td class="titular-td titular-td-style1">${field}</td>
                </tr>
                <tr class="titular-row4">
                  <td class="titular-td titular-td-style0">???????????? (????????????):</td>
                  <td class="titular-td titular-td-style1">
                    ${`${project} ${unit} ${subUnit}`}
                  </td>
                </tr>
                <tr class="titular-row2">
                  <td colspan="2" class="titular-td"></td>
                </tr>
                <tr class="titular-row3">
                  <td
                    class="titular-td titular-td-style0"
                    style="font-weight: 400;"
                  >
                    ???????????????? ???????? ????
                  </td>
                  <td class="titular=td titular-td-style1">${title}</td>
                </tr>
                <tr>
                  <td colspan="2" class="titular-td"></td>
                </tr>
                <tr>
                  <td colspan="2" class="titular-td">
                    ${questionnaireType}
                  </td>
                </tr>
                <tr class="titular-row">
                  <td colspan="2" class="titular-td"></td>
                </tr>
                <tr>
                  <td colspan="2" class="titular-td">???????????? ${year} ??.</td>
                </tr>
                <tr class="titular-row">
                  <td colspan="2" class="titular-td"></td>
                </tr>
              </tbody>
            </table>
  `
}