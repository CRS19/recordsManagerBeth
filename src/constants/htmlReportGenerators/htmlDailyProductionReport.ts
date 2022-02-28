import {IDailyMilkLab} from './../../interfaces/DailyMilkLab';
import {
  ENGLISH_DAYS_ENUM,
  getCurrentDate,
  getDayName,
  MONTHS,
  SPANISH_DAYS,
} from '../../utils/time-utils';
import {indexOf} from 'lodash';
import {useProductionDiario} from '../../screens/GlobalProduction/productionDiaria/useProductionDiario';

export const htmlDailyProductionReport = (
  labRecords: IDailyMilkLab,
  GET_ACTION: Record<string, () => string>,
) => {
  let totalMonthLab = 0;
  let totalMonthCalf = 0;
  let totalMonthMilk = 0;

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
    .signature-Names {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    align-items: center;

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
            <p class="rigth-table-header">CODIGO UAIBL</p>
            <p>INFORME N°</p>
            <p class="rigth-table-header">${
              indexOf(MONTHS, labRecords.monthYear.split('-')[0]) + 1
            }</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <h1 style="font-size: 16; height: 20">
        PRODUCCIÓN TOTAL DIARIA ESTACIÓN TUNSHI
      </h1>
      <p>${labRecords.monthYear}<p>

      <table>
        <thead>
          <tr>
            <td style="border: 2px solid black" rowspan="2">#</td>
            <td style="border: 2px solid black" rowspan="2">DÍA</td>
            <td style="border: 2px solid black" colspan="3">
              LABORATORIO DE LACTEOS
            </td>
            <td style="border: 2px solid black" colspan="3">TERNEROS</td>
            <td style="border: 2px solid black" rowspan="2">TOTAL DIARIO</td>
            <td style="border: 2px solid black" rowspan="2">TOTAL VACAS</td>
            <td style="border: 2px solid black" rowspan="2">PRODUCCIÓN VACA</td>
          </tr>
          <tr>
            <td style="border: 2px solid black">MAÑANA</td>
            <td style="border: 2px solid black">TARDE</td>
            <td style="border: 2px solid black">ENTREGA</td>
            <td style="border: 2px solid black">MAÑANA</td>
            <td style="border: 2px solid black">TARDE</td>
            <td style="border: 2px solid black">CONSUMO</td>
          </tr>
        </thead>
        <tbody>

            ${labRecords.data
              .map((data, index) => {
                totalMonthLab += data.totalLab;
                totalMonthCalf += data.totalCalf;
                totalMonthMilk += data.totalLab + data.totalCalf;
                return `<tr>
            <td style="border: 1px solid black">${index + 1}</td>
            <td style="border: 1px solid black">${SPANISH_DAYS[
              getDayName(data.timestamp) as ENGLISH_DAYS_ENUM
            ].slice(0, 1)}</td>
            <td style="border: 1px solid black">${data.morningLab}</td>
            <td style="border: 1px solid black">${data.aftermoonLab}</td>
            <td style="border: 1px solid black">${data.totalLab}</td>
            <td style="border: 1px solid black">${data.morningCalf}</td>
            <td style="border: 1px solid black">${data.aftermoonCalf}</td>
            <td style="border: 1px solid black">${data.totalCalf}</td>

            <td style="border: 1px solid black">${
              data.totalCalf + data.totalLab
            }</td>
            <td style="border: 1px solid black">${data.totalCows}</td>
            <td style="border: 1px solid black">${(
              (data.totalCalf + data.totalLab) /
              data.totalCows
            ).toFixed(2)}</td>
          </tr>`;
              })
              .join('')}

          
          <tr>
            <td style="border: 0px solid black"></td>
            <td style="border: 0px solid black"></td>
            <td style="border: 0px solid black"></td>
            <td style="border: 0px solid black">
              <p>Total</p>
            </td>
            <td style="border: 1px solid black">${totalMonthLab}</td>
            <td style="border: 1px solid black"></td>
            <td style="border: 1px solid black"></td>
            <td style="border: 1px solid black">${totalMonthCalf}</td>

            <td style="border: 1px solid black">${totalMonthMilk}</td>
            <td style="border: 1px solid black"></td>
            <td style="border: 1px solid black"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div style="float: left">
        <table style="margin-top: 30; width: 202">
          <tbody>
            <tr>
              <td style="border: 1px solid black;  text-align: start">Costo de Litro</td>
              <td style="border: 1px solid black">${GET_ACTION[
                'Costo de litro'
              ]()}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">
                Total Entregado PD Mensual
              </td>
              <td style="border: 1px solid black">${GET_ACTION[
                'Total Entregado PL Mensual'
              ]()}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">Total USD</td>
              <td style="border: 1px solid black">
              ${GET_ACTION['Total USD']()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="float: left; margin-left: 142">
        <table style="margin-top: 30; width: 202">
          <tbody>
            <tr>
              <td style="border: 1px solid black; text-align: start">Días del mes</td>
              <td style="border: 1px solid black"> ${GET_ACTION[
                'Dias del mes'
              ]()}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">Prom Vacas en Producción</td>
              <td style="border: 1px solid black">
              ${GET_ACTION['Prom. Vacas en Producción']()}</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">Redondeo</td>
              <td style="border: 1px solid black">
              ${GET_ACTION['Redondeo']()}
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">Prom./Vaca/día/productiva</td>
              <td style="border: 1px solid black">
              ${GET_ACTION['Prom/Vaca/Día/Productiva']()}
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid black; text-align: start">
                Promedio Producción Diaria
              </td>
              <td style="border: 1px solid black">
              ${GET_ACTION['Promedio Producción Diaria']()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top: 180">
      <p>Observaciones</p>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30;
      "
    >
      <div class="signature-Names">
        <p style="margin-left: 125">Elaborado por:</p>
        <p style="margin-left: 10; font-family: cursive; font-size: 12">
          Dr. Pedro Castillo C. MVZ
        </p>
      </div>
      <div class="signature-Names">
        <p>Revisado por:</p>
        <p
          style="
            margin-left: 10;
            font-family: cursive;
            font-size: 12;
            margin-right: 150;
          "
        >
          Ing Carlos Santos C, Mgs CP.
        </p>
      </div>
    </div>
  </body>
</html>
`;
};
