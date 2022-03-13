import {IPreniezDataReportInfo} from './../../interfaces/ReproductionRecord';
import {getCurrentDate, getSemester} from '../../utils/time-utils';

export const htmlPreniezReport = (
  preniezReportData: IPreniezDataReportInfo[],
) =>
  `<html>
  <style>
    .trimmed-cover {
      object-fit: cover;
      width: 100%;
      height: 177px;
      object-position: center 40%;
    }
    .epoch-logo {
      width: 150;
      height: 150;
    }
    .rigth-table-header {
      border-bottom: 3px solid black;
      padding-bottom: 10px;
    }
    h1 {
      font-family: arial, sans-serif;
    }
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    td,
    th {
      border: 3px solid black;
      text-align: center;
      padding: 8px;
      font-size: 8;
    }
    p {
      font-size: 11;
    }
  </style>
  <body>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      "
    >
      <table>
        <tr>
          <th style="width: 10">
            <img class="epoch-logo" src="https://i.imgur.com/W63pabO.png" />
          </th>
          <th>
            <h2 style="font-size: 12">
              ESCUELA SUPERIOR POLITÉCTNICA DE CHIMBORAZO
            </h2>
            <h1 style="font-size: 14">FACULTAD DE CIENCIAS PECUARIAS</h1>
            <h1 style="font-size: 14">ESTACIÓN EXPERIMENTAL TUNSHI</h1>
            <h2 style="font-size: 10">
              UNIDAD ACADÉMICA Y DE INVESTIGACIÓN BOVINOS LECHEROS
            </h2>
            <h2 style="font-size: 10">Km 12, Riobamba Vía a Licto</h2>
          </th>
          <th style="width: 150; padding: 0px">
            <p class="rigth-table-header">PREÑEZ</p>
            <p>SEMESTRE</p>
            <p class="rigth-table-header">${getSemester()}</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <h1 style="font-size: 16">REPORTE DE PREÑEZ MENSUAL</h1>

      <table>
        <tr>
          <th style="border: 1px solid black">N°</th>
          <th style="border: 1px solid black">N° ARETE VACA</th>
          <th style="border: 1px solid black">FECHA DE IA/MONTA</th>
          <th style="border: 1px solid black">DIAS DE PREÑEZ</th>
          <th style="border: 1px solid black">POSIBLE PARTO</th>
          <th style="border: 1px solid black">N° DE PARTOS</th>
        </tr>

        ${preniezReportData
          .map(
            (record, index) => `
        <tr>
          <th style="border: 1px solid black">${index + 1}</th>
          <th style="border: 1px solid black">${record.numeroAreteVaca}</th>
          <th style="border: 1px solid black">${record.fechaMonta}</th>
          <th style="border: 1px solid black">${record.preniesDays}</th>
          <th style="border: 1px solid black">${record.fechaPosibleParto}</th>
          <th style="border: 1px solid black">${record.numeroPartos}</th>
        </tr>
        `,
          )
          .join('')}
      </table>
    </div>
  </body>
</html>
`;
