import {IDrug} from '../../interfaces/Drug.interface';
import {
  getCurrentDate,
  getDateOfDay,
  getSemester,
} from '../../utils/time-utils';
import {DRUGS_PRESENTATIONS} from '../PresentationEnum';

export const htmlDrugsReport = (durgs: IDrug[]): string => {
  return `<html>
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
            <p class="rigth-table-header">FÁRMACOS</p>
            <p>SEMESTRE</p>
            <p class="rigth-table-header">${getSemester()}</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <h1 style="font-size: 16">INVENTARIO DE FÁRMACOS</h1>

      <table>
        <tr>
          <th style="border: 1px solid black">Fecha de ingreso</th>
          <th style="border: 1px solid black">Nombre del producto</th>
          <th style="border: 1px solid black">Fecha de caducidad</th>
          <th style="border: 1px solid black">Presentación</th>
          <th style="border: 1px solid black">unidad de medida</th>
          <th style="border: 1px solid black">Contenido por unidad</th>
          <th style="border: 1px solid black">Cantidad</th>
          <th style="border: 1px solid black">Disponible</th>
        </tr>

        ${durgs
          .map(
            drug => `
        <tr>
          <th style="border: 1px solid black">${getDateOfDay(drug.created)}</th>
          <th style="border: 1px solid black">${drug.name}</th>
          <th style="border: 1px solid black">${getDateOfDay(
            drug.expDate,
            'DD/MM/yyyy',
          )}</th>
          <th style="border: 1px solid black">${drug.presentationForm}</th>
          <th style="border: 1px solid black">${
            DRUGS_PRESENTATIONS.find(el => el.value === drug.unitType)!
              .description
          }</th>
          <th style="border: 1px solid black">${drug.unitContent}</th>
          <th style="border: 1px solid black">${drug.amount}</th>
          <th style="border: 1px solid black">${drug.available}</th>
        </tr>
        `,
          )
          .join('')}
      </table>
    </div>
  </body>
</html>
`;
};
