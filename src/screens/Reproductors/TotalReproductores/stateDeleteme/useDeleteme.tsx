import React, {useState} from 'react';
import {CategoryLogoInput} from '../../../../assets/CategoryLogoInput';
import {useCreatePdf} from '../../../../utils/useCreatePdf';

export interface IDataCow {
  inscripcion?: string;
  nombreEjemplar: string;
  registro: string;
  arete: string;
  fechaNacimiento: string;
  sangre: string;
  categoria: string;
  raza: string;
  sexo: string;
  exhibicion: string;
  remate: string;
  nombrePadre: string;
  registroPadre: string;
  nombreMadre: string;
  registroMadre: string;
  propietario: string;
  criadero: string;
  provincia: string;
}

export interface sexInfo {
  sexTitle: sexTitleEnum;
  sexColor: sexColorEnum;
}

export interface categoryInfo {
  categoryTitle: categoryTitleEnum;
  categoryColor: categoryColorEnum;
}

export enum sexTitleEnum {
  MACHO_PURO = 'MACHOS PUROS',
  HEMBRA_PURA_REGISTRADA = 'HEMBRAS PURAS REGISTRADAS',
  HEMBRA_MEZTIZA_SIN_REGISTRO = 'HEMBRAS MESTIZAS SIN REGISTRO',
  VACUNO_DE_REMATE = 'VACUNOS DE REMATE',
}

export enum subtitleEnum {
  VACUNO_EXPOSISCION = 'VACUNO DE EXPOSICIÓN',
  VACUNO_REMATE = 'VACUNO DE REMATE',
}

export enum sexColorEnum {
  MACHO_PURO = '#1B233A',
  HEMBRA_PURA_REGISTRADA = '#82000E',
  HEMBRA_MEZTIZA_SIN_REGISTRO = '#E8B312',
}

export enum categoryColorEnum {
  PRIMERA_CATEGORIA = '#50C2C9',
  SEGUNDA_CATEGORIA = '#77ADEC',
  TERCERA_CATEGORIA = '#2FBB3E',
  CUARTA_CATEGORIA = '#7C7CA7',
  QUINTA_CATEGORIA = '#D283C1',
  SEXTA_CATEGORIA = '#CDC3F4',
  SEPTIMA_CATEGORIA = '#CE8C8C',
  OCTAVA_CATEGORIA = '#FF9B7E',
  NOVENA_CATEGORIA = '#DCB178',
  DECIMA_CATEGORIA = '#E8E3C9',
  DECIMA_PRIMERA_CATEGORIA = '#A8723A',
  DECIMA_SEGUNDA_CATEGORIA = '#77BF95',
  DECIMA_TERCERA_CATEGORIA = '#426653',
}

export enum categoryTitleEnum {
  PRIMERA_CATEGORIA = 'PRIMERA',
  SEGUNDA_CATEGORIA = 'SEGUNDA',
  TERCERA_CATEGORIA = 'TERCERA',
  CUARTA_CATEGORIA = 'CUARTA',
  QUINTA_CATEGORIA = 'QUINTA',
  SEXTA_CATEGORIA = 'SEXTA',
  SEPTIMA_CATEGORIA = 'SÉPTIMA',
  OCTAVA_CATEGORIA = 'OCTAVA',
  NOVENA_CATEGORIA = 'NOVENA',
  DECIMA_CATEGORIA = 'DÉCIMA',
  DECIMA_PRIMERA_CATEGORIA = 'DÉCIMA PRIMERA',
  DECIMA_SEGUNDA_CATEGORIA = 'DÉCIMA SEGUNDA',
  DECIMA_TERCERA_CATEGORIA = 'DÉCIMA TERCERA',
}

export interface ICategoy {
  PRIMERACATEGORIAHolsteinMachoPuro: IDataCow[]; // aqui se copia
}

export const useDeleteme = () => {
  const {generateCatalogMacaji} = useCreatePdf();

  const data: ICategoy = {
    PRIMERACATEGORIAHolsteinMachoPuro: [
      {
        inscripcion: '230',
        nombreEjemplar: 'MOGULFLORA FLORENTINO',
        registro: '17120535-05',
        arete: 'S/D',
        fechaNacimiento: '25/11/2021',
        sangre: 'Mestiza con registro',
        categoria: 'primera',
        raza: 'holstein Friesian', // DE AQUI COJE PARA PONER EN EL TITU
        sexo: 'Macho',
        exhibicion: 'Si',
        remate: 'NO',
        nombrePadre: 'MOGUL-ET',
        registroPadre: '300697286',
        nombreMadre: 'MIRAFLORES FLORENCIA',
        registroMadre: '17114528-03',
        propietario: 'La Primavera',
        criadero: 'Hacienda la Primavera',
        provincia: 'BOLIVAR',
      },
    ],
  };
  const limitNumber = data.PRIMERACATEGORIAHolsteinMachoPuro.length;
  const raza = data.PRIMERACATEGORIAHolsteinMachoPuro[0].raza; // TODO:
  const subTitle = subtitleEnum.VACUNO_EXPOSISCION; // TODO:
  const sexInfo: sexInfo = {
    sexTitle: sexTitleEnum.MACHO_PURO, // cambiar el sexo aqui
    sexColor: sexColorEnum.MACHO_PURO, // y aqui
  };
  const categoryInfo: categoryInfo = {
    categoryTitle: categoryTitleEnum.DECIMA_PRIMERA_CATEGORIA, // cambiar categoria aqui
    categoryColor: categoryColorEnum.PRIMERA_CATEGORIA, // y aqui
  };

  const [numberOfGeneratedPages, setNumberOfGeneratedPages] =
    useState<number>(0);

  console.log('************ data *************+');
  console.log(data.PRIMERACATEGORIAHolsteinMachoPuro[0].inscripcion);

  const onGenerate = (data: ICategoy) => {
    const limit = Math.floor(data.PRIMERACATEGORIAHolsteinMachoPuro.length / 3);

    setNumberOfGeneratedPages(start => {
      generateCatalogMacaji(
        data.PRIMERACATEGORIAHolsteinMachoPuro.slice(
          0 + start * 3,
          0 + start * 3 + 3,
        ),
        start === limit ? true : false,
        raza,
        subTitle,
        sexInfo,
        categoryInfo,
      );

      return start + 1;
    });
  };

  return {data, onGenerate, numberOfGeneratedPages, limitNumber};
};
