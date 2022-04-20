import {
  categoryInfo,
  IDataCow,
  sexInfo,
} from './../../screens/Reproductors/TotalReproductores/stateDeleteme/useDeleteme';
import {has} from 'lodash';

export const registroAreteLogic = (cow: IDataCow) =>
  cow.registro === 'S/R' ? ['Arete', cow.arete] : ['Registro N°', cow.registro];

const isLongText = (text: string, fontSize: string) => {
  console.log(`${text} -> ${text.length}`);
  return text.length > 29 ? `font-size: ${fontSize}px;` : '';
};

const islongtextBool = (text: string) => {
  return text.length > 29 ? true : false;
};

const hasInscriptionNumber = (cowData: IDataCow) =>
  has(cowData, 'inscripcion')
    ? `<div
                  style="
                    display: flex;

                    width: 40%;
                    height: 100%;
                    flex-direction: row;
                  "
                >
                  <div
                    style="
                      display: flex;
                      margin-top: 25px;
                      justify-content: flex-end;
                    "
                  >
                    <span>
                      <strong>Inscripción N°</strong>
                    </span>
                    <div
                      style="
                        display: flex;
                        position: relative;
                        height: 50px;
                        width: 50px;
                        top: -20px;
                        right: -45px;
                        background-color: #f5f5f5;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      <strong
                        style="
                          font-family: Cambria, Cochin, Georgia, Times,
                            'Times New Roman', serif;
                          font-size: 25px;
                        "
                        >${cowData.inscripcion}</strong
                      >
                    </div>
                  </div>
                </div>`
    : '';

export const generateCatalog = (
  cowData: IDataCow[],
  isLast: boolean,
  raza: string,
  subTitle: string,
  sexInfo: sexInfo,
  categoryInfo: categoryInfo,
) => `
<!DOCTYPE html>
<html>
  <style>
    @media print {
      tr.vendorListHeading {
        background-color: #1a4567 !important;
        -webkit-print-color-adjust: exact;
      }
    }

    strong {
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif,
        sans-serif;
      font-size: 14px;
    }

    em {
      font-size: 14px;
    }

    @media print {
      .vendorListHeading th {
        color: white !important;
      }
    }
    h1 {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;

      font-weight: normal;
      font-size: 22px;
    }

    h2 {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
    .headRaza {
      background-color: white;
      display: inline-block;
      border-width: 2px;
      border-color: black;
      border-radius: 15px;
      border-style: solid;
      padding-left: 80px;
      padding-right: 80px;
      height: 30;
    }
    .categoryFrame {
      display: flex;
      height: 980px;
      width: 65px;
      background-color: ${categoryInfo.categoryColor};
      border-width: 1px;
      border-color: black;
      border-style: solid;
      margin-top: 15px;
      flex-direction: column;
      justify-content: flex-end;
    }
    .cowCardContainer {
      margin-top: 5px;
      height: 320px;
      width: 620px;
      background-color: white;
      border-width: 1px;
      border-color: black;
      border-style: solid;
    }
  </style>
  <body>
    <div
      style="
        display: flex;
        height: 1100px;
        width: 794px;

        justify-content: center;
      "
    >
      <div
        style="
          flex-direction: column;
          text-align: center;
          z-index: 1;
        "
      >
        <div class="headRaza">
          <h1>RAZA: ${raza.toLocaleUpperCase()}</h1>
        </div>
        <div
          style="
            z-index: -1;
            position: absolute;
            left: 0;
            top: 40px;
            height: 2px;
            width: 794px;
            background-color: black;
          "
        />
        <div>
          <img
            style="
              position: absolute;
              object-fit: cover;
              top: 30px;
              left: 200px;
            "
            src="https://i.imgur.com/AYJISTU.png"
            height="40"
            width="400"
          />
          <div style="position: absolute; top: 30px; left: 300px">
            <h2>${subTitle.toLocaleUpperCase()}</h2>
          </div>
        </div>
        <div
          style="
            position: absolute;
            left: 20px;
            top: -55px;
            background-color: white;
            border-radius: 100px;
          "
        >
          <img src="https://i.imgur.com/13u7qgo.png" height="110" width="110" />
        </div>
        <div style="position: absolute; right: 20px; top: -50px">
          <img
            src="https://i.imgur.com/GSnf0uX_d.webp?maxwidth=760&fidelity=grand"
            height="125"
            width="125"
          />
        </div>
        <div
          style="
            z-index: -1;
            position: absolute;
            left: 0;
            top: 60px;
            height: 4px;
            width: 794px;
            background-color: black;
          "
        />
        <div
          style="
            display: flex;
            width: 794px;
            height: 1030px;
            justify-content: flex-end;
          "
        >
          <div
            style="
              flex-direction: column;
              height: 400px;
              width: 630px;
              margin-top: 10px;
            "
          >
   ${cowData
     .map(
       cow => `
   <div class="cowCardContainer">
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  height: 55px;

                  width: 100%;
                "
              >
                <div
                  style="
                    display: flex;
                    width: 60%;
                    height: 100%;
                    flex-direction: row;
                    text-align: start;
                  "
                >
                  <div style="display: flex">
                    <img
                      src="https://i.imgur.com/1Ay9O8g.png"
                      height="60px"
                    />
                  </div>
                  <div style="display: flex; margin-top: ${
                    islongtextBool(cow.nombreEjemplar) ? '3px' : ' 25px'
                  } ">
                    <span>
                      <strong>Nombre:</strong>
                      <em style="text-transform: uppercase; ${isLongText(
                        cow.nombreEjemplar,
                        '10',
                      )}">${cow.nombreEjemplar}</em>
                    </span>
                  </div>
                </div>
                ${hasInscriptionNumber(cow)}
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 2px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/CS4BxZK.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>F. Nacimiento:</strong>
                      <em style="text-transform: uppercase">${
                        cow.fechaNacimiento
                      }</em>
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/XlX0WuA.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Padre:</strong>
                      <em style="text-transform: uppercase; ${isLongText(
                        cow.nombrePadre,
                        '10',
                      )}">${cow.nombrePadre}</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 1px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/lXaPOCU.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Sangre:</strong>
                      <em style="text-transform: uppercase"
                        >${cow.sangre}</em
                      >
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/3gaaS8K.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Registro #:</strong>
                      <em style="text-transform: uppercase">${
                        cow.registroPadre
                      }</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 1px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/3gaaS8K.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>${registroAreteLogic(cow)[0]}:</strong>
                      <em style="text-transform: uppercase">${
                        registroAreteLogic(cow)[1]
                      }</em>
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/XGEesSi.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Madre:</strong>
                      <em style="text-transform: uppercase; ${isLongText(
                        cow.nombreMadre,
                        '10',
                      )}">${cow.nombreMadre}</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 1px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/4pMH8PO.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Provincia:</strong>
                      <em style="text-transform: uppercase">${
                        cow.provincia
                      }</em>
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/3gaaS8K.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Registro #:</strong>
                      <em style="text-transform: uppercase">${
                        cow.registroMadre
                      }</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 1px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/j6zn9Ak.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Sexo:</strong>
                      <em style="text-transform: uppercase">${cow.sexo}</em>
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 50%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/3GsIpl2.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Criadero</strong>
                      <em style="text-transform: uppercase">${cow.criadero}</em>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  height: 40px;
                  width: 100%;
                  border-width: 1px;
                  border-color: white;
                  border-style: solid;
                  border-right-width: 0px;
                  border-left-width: 0px;
                "
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 75%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/tF7vju4.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Propietario:</strong>
                      <em style="text-transform: capitalize; ${isLongText(
                        cow.propietario,
                        '10',
                      )}"
                        >${cow.propietario}</em
                      >
                    </span>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 25%;
                    background-image: linear-gradient(to right, white, #e7e6e6);
                  "
                >
                  <img
                    style="margin-left: 15px"
                    src="https://i.imgur.com/M3J2pGa.png"
                    height="30px"
                  />
                  <div style="display: flex; margin-left: 10px">
                    <span>
                      <strong>Remate</strong>
                      <strong style="text-transform: uppercase">${
                        cow.remate
                      }</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
   `,
     )
     .join('')}
        ${
          isLast
            ? `            
            <div
              style="
                display: flex;
                height: 300px;
                width: 100%;
                margin-top: 15px;
                flex-direction: column;
                text-align: start;
              "
            >
              <span style="margin-bottom: 20px; margin-top: 20px">
                <strong>Primer Lugar: </strong>
                <em>________________________________________________</em>
              </span>
              <span style="margin-bottom: 20px">
                <strong>Segundo Lugar: </strong>
                <em>______________________________________________</em>
              </span>
              <span style="margin-bottom: 20px">
                <strong>Tercer Lugar: </strong>
                <em>_______________________________________________</em>
              </span>
            </div>`
            : ''
        }
          </div>

          <div class="categoryFrame">
            <div
              style="
                display: flex;
                position: absolute;
                margin-top: 40px;
                padding-right: 30px;
                top: 0px;
                right: -40px;
                height: 600px;
              "
            >
              <h1
                style="
                  color: white;
                  writing-mode: vertical-lr;
                  -webkit-transform: rotate(-180deg);
                  padding-right: 5px;
                  padding-left: 5px;
                  padding-top: 15px;
                  padding-bottom: 15px;
                  font-size: 30px;
                  background-color: ${sexInfo.sexColor};
                "
              >
                ${sexInfo.sexTitle}
              </h1>
            </div>
            <div style="display: flex;  height: 400px; text-align: start; margin-bottom: 10px;">
              <h1
                style="
                  writing-mode: vertical-lr;
                  -webkit-transform: rotate(-180deg);
                  ${islongtextBool(
                    categoryInfo.categoryTitle
                      ? 'font-size: 10px'
                      : 'font-size: 30px',
                  )}
                "
              >CATEGORIA: ${categoryInfo.categoryTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

`;
