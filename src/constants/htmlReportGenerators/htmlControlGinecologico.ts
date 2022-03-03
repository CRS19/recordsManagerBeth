import {IControlGinecologicoRowData} from '../../interfaces/ControlGinecologico';
import {getCurrentDate} from '../../utils/time-utils';

export const getHtmlControlGinecologicoReport = (
  rowsData: IControlGinecologicoRowData[],
  year: number,
) => {
  const html = `<html>
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
            <p class="rigth-table-header">REGISTRO CONTROL GINECOLÓGICO</p>
            <p>AÑO</p>
            <p class="rigth-table-header">${year}</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <h1 style="font-size: 16">REGISTRO CONTROL GINECOLÓGICO</h1>

      <table>
        <tr>
          <th style="border: 1px solid black">N° DE ARETE</th>
          <th style="border: 1px solid black">FECHA DE NACIMIENTO</th>
          <th style="border: 1px solid black">ENE.30</th>
          <th style="border: 1px solid black">FEB.28</th>
          <th style="border: 1px solid black">MAR.31</th>
          <th style="border: 1px solid black">ABR.30</th>
          <th style="border: 1px solid black">MAY.31</th>
          <th style="border: 1px solid black">JUN.30</th>
          <th style="border: 1px solid black">JUL.31</th>
          <th style="border: 1px solid black">AGO.31</th>
          <th style="border: 1px solid black">SEP.30</th>
          <th style="border: 1px solid black">OCT.31</th>
          <th style="border: 1px solid black">NOV.30</th>
          <th style="border: 1px solid black">DIC.31</th>
        </tr>
        ${rowsData
          .map(
            data => `
         <tr>
          <th style="border: 1px solid black">${data.numeroArete}</th>
          <th style="border: 1px solid black">${data.fechaNacimiento}</th>
          <th style="border: 1px solid black">${data.ene}</th>
          <th style="border: 1px solid black">${data.feb}</th>
          <th style="border: 1px solid black">${data.mar}</th>
          <th style="border: 1px solid black">${data.abr}</th>
          <th style="border: 1px solid black">${data.may}</th>
          <th style="border: 1px solid black">${data.jun}</th>
          <th style="border: 1px solid black">${data.jul}</th>
          <th style="border: 1px solid black">${data.ago}</th>
          <th style="border: 1px solid black">${data.sep}</th>
          <th style="border: 1px solid black">${data.oct}</th>
          <th style="border: 1px solid black">${data.nov}</th>
          <th style="border: 1px solid black">${data.dic}</th>
        </tr>
        `,
          )
          .join('')}
       
      </table>
    </div>
  </body>
</html>
`;

  return html;
};
