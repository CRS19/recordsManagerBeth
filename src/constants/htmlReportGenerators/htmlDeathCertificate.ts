import {getDateOfDay} from './../../utils/time-utils';
import {getCurrentDate, getSemester} from '../../utils/time-utils';
import {
  IDeathCertificate,
  IWitness,
} from './../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';

export const htmlDeathCertificateReport = (
  deathCertificate: IDeathCertificate,
): string => {
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
            <p class="rigth-table-header">ACTA DEFUNCIÓN</p>
            <p>INFORME N°</p>
            <p class="rigth-table-header">${getSemester()}</p>
            <p>FECHA</p>
            <p>${getCurrentDate()}</p>
          </th>
        </tr>
      </table>

      <table style="margin: 25px; width: 400px; align-self: center">
        <thead>
          <tr>
            <td style="border-width: 2px">
              <span style="font-size: 16; height: 20; font-weight: bold"
                >ACTA DE DEFUNCIÓN # ${
                  deathCertificate.deathCertificateId
                }</span
              >
            </td>
          </tr>
        </thead>
      </table>

      <h1
        style="font-size: 14; margin-top: 5; height: 15; align-self: flex-start"
      >
        EN LA FACULTAD DE CIENCIAS PECUARIAS A LOS 7 DIAS DEL MES DE MARZO DEL
        2022
      </h1>

      <h1
        style="
          font-size: 12;
          margin-top: 15;
          margin-bottom: 10;
          height: 15;
          align-self: flex-start;
        "
      >
        ESTUVIERON PRESENTES:
      </h1>

      <table style="width: 400; border-width: 0px">
        <tbody>
        ${deathCertificate.witnesses
          .map(
            (witness: IWitness, index: number) => `
        <tr>
            <td style="text-align: start; border-width: 1px">
              ${witness.fullName}
            </td>
            <td style="text-align: start; border-width: 1px">
              ${witness.possition}
            </td>
        </tr>
        `,
          )
          .join('')}

        </tbody>
      </table>

      <h1
        style="
          font-size: 12;
          margin-top: 30;
          margin-bottom: 30;
          height: 15;
          text-align: start;
        "
      >
        CON MOTIVO DE CONSTAR LA MUERTE DEL SEMOVIENTE DE LA PROPIEDAD DE LA
        ESCUELA DE INGENIERÁ ZOOTECNICA, DISTINGUIDO DE LAS SIGUIENTES
        CARACTERISTICAS:
      </h1>
    </div>

    <table>
      <thead>
        <tr>
          <th style="border-width: 1px">FECHA DE NACIMIENTO</th>
          <th style="border-width: 1px">ESPECIE</th>
          <th style="border-width: 1px">EDAD</th>
          <th style="border-width: 1px">RAZA</th>
          <th style="border-width: 1px">SEXO</th>
          <th style="border-width: 1px">N° DE ARETE</th>
          <th style="border-width: 1px">PRESIO USD</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td style="border-width: 1px">${getDateOfDay(
            deathCertificate.fechaNacimiento,
          )}</td>
          <td style="border-width: 1px">BOVINA</td>
          <td style="border-width: 1px">${deathCertificate.edadMeses} MESES</td>
          <td style="border-width: 1px">${deathCertificate.raza}</td>
          <td style="border-width: 1px">${deathCertificate.sexo}</td>
          <td style="border-width: 1px">${deathCertificate.areteNumber}</td>
          <td style="border-width: 1px">${deathCertificate.precio}</td>
        </tr>
      </tbody>
    </table>

    <h1
      style="
        font-size: 12;
        margin-top: 30;
        margin-bottom: 15;
        height: 15;
        align-self: flex-start;
      "
    >
      LA NECROPCIA FUE REALIZADA POR:
    </h1>
    <h2
      style="
        font-weight: normal;
        font-size: 14;
        margin-top: 15;
        margin-bottom: 15;
        height: 15;
        text-align: start;
      "
    >
      Dr. PEDRO CASTILLO.C
    </h2>
    <h1
      style="
        font-size: 12;
        margin-top: 30;
        margin-bottom: 15;
        height: 15;
        align-self: flex-start;
      "
    >
      DE ACUERDO CON LAS LECIONES SE DETERMINA QUE LA MUERTE FUE CAUSADA POR:
    </h1>
    <h2
      style="
        font-weight: normal;
        font-size: 14;
        margin-top: 15;
        margin-bottom: 15;
        height: 15;
        text-align: start;
      "
    >
      INFECCIÓN CRÓNICA CON DEGRADACIÓN HEPATICA, NEUMONÍA CRÓNICA, HIPERTROFÍA
      DEL MÚSCULO CARDIACO, HIPERTROFIA DE LOS GANGLIOS MESENTERICOS Y
      TORAXICOS.
    </h2>
    <h1
      style="
        font-size: 12;
        margin-top: 50;
        margin-bottom: 30;
        height: 15;
        align-self: flex-start;
      "
    >
      PARA CONSTANCIA Y EN FE DE CONFORMIDAD SUSCRIBEN LA PRESENTE ACTA LOS QUE
      EN ELLA ACTUARON Y ADMINISTRADOR ESTACIÓN EXPERIMENTAL TUNSHI.
    </h1>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30;
      "
    >
    ${deathCertificate.witnesses
      .map(
        (witness: IWitness, index: number) => `
      <div
        style="
          margin-top: 70;
          width: 50%;
          text-align: center;
        "
      >
        <p>Estuvo presente:</p>
        <p style="margin-left: 10; font-family: cursive; font-size: 12">
          ${witness.fullName}
        </p>
        <p>${witness.possition}</p>
      </div>
    `,
      )
      .join('')}
    </div>
    
  </body>
</html>
`;
};
