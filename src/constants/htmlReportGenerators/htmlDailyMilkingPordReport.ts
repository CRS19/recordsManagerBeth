import {useDailyMilkingProdReportBuilder} from '../../components/Tables/ReportTables/state/useDailyMilkingProdReportBuilder';
import {IDailyMilkRecord} from '../../interfaces/DailyMilkRecord';
import {getCurrentDate} from '../../utils/time-utils';

export const getHtmlDailyMilkingReport = (
  record: IDailyMilkRecord,
  listNumber: number,
): string => {
  const {dataToPlot} = useDailyMilkingProdReportBuilder({dailyRecord: record});

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
            <p>VACA</p>
            <p class="rigth-table-header">${record.idVaca}</p>
            <p>PARTO N°</p>
            <p class="rigth-table-header">${listNumber}</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <h1 style="font-size: 16">
        REGISTRO LACTANCIA CICLO ${record.prodCicle}
      </h1>

      <table>
        <tr>
          <th style="border: 1px solid black">Día</th>
          <th style="border: 1px solid black">Fecha de producción</th>
          <th style="border: 1px solid black">Mañana</th>
          <th style="border: 1px solid black">Tarde</th>
          <th style="border: 1px solid black">Diario Total</th>
          <th style="border: 1px solid black">Producción semanal</th>
          <th style="border: 1px solid black">Producción mensual</th>
          <th style="border: 1px solid black">Producción Total</th>
          <th style="border: 1px solid black">Producción promedio</th>
        </tr>
        
            ${dataToPlot
              .map(
                record =>
                  `
                <tr>
                    <th style="border: 1px solid black">${record.day}</th>
                    <th style="border: 1px solid black">${record.date}</th>
                    <th style="border: 1px solid black">${record.morning}</th>
                    <th style="border: 1px solid black">${record.afternoon}</th>
                    <th style="border: 1px solid black">${record.dailyTotal}</th>
                    <th style="border: 1px solid black">${record.semnalProd}</th>
                    <th style="border: 1px solid black">${record.monthProd}</th>
                    <th style="border: 1px solid black">${record.TotalProd}</th>
                    <th style="border: 1px solid black">${record.averageProd}</th>
                </tr>`,
              )
              .join('')}
        
      </table>
    </div>
  </body>
</html>
`;

  return html;
};
