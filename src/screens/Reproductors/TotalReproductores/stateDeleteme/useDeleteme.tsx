import React, {useState} from 'react';
import {CategoryLogoInput} from '../../../../assets/CategoryLogoInput';
import {useCreatePdf} from '../../../../utils/useCreatePdf';

export interface IDataCow {
  inscripcion?: string;
  nombreEjemplar: string;
  registro: string;
  arete?: string;
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
  EQUINO_MACHO_MESTIZAO = 'MACHO MESTIZO',
  EQUINO_HEMBRA_PURA = 'HEMBRAS PURAS',
  EQUINO_MACHO_PURA = 'MACHOS PUROS',
  EQUINO_HEMBRA_MEZTIZA = 'HEMBRAS MESTIZAS',
  VACUNO_DE_REMATE = 'VACUNOS DE REMATE',
}

export enum subtitleEnum {
  VACUNO_EXPOSISCION = 'VACUNO DE EXPOSICIÓN',
  VACUNO_REMATE = 'VACUNO DE REMATE',
  EQUINO_EXPOSICION = 'EQUINO DE EXPOSICIÓN',
  EQUINO_REMATE = 'GANADO EQUINO DE REMATE',
}

export enum sexColorEnum {
  MACHO_PURO = '#1B233A',
  EQUINO_MACHO_PURA = '#1B233A',
  HEMBRA_PURA_REGISTRADA = '#82000E',
  EQUINO_HEMBRA_PURA = '#82000E',
  HEMBRA_MEZTIZA_SIN_REGISTRO = '#E8B312',
  EQUINO_MACHO_MESTIZAO = '#E8B312',
  EQUINO_HEMBRA_MEZTIZA = '#E8B312',
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

export const categoryColorDirectoryByNumber: Record<number, string> = {
  [1]: '#50C2C9',
  [2]: '#77ADEC',
  [3]: '#2FBB3E',
  [4]: '#7C7CA7',
  [5]: '#D283C1',
  [6]: '#CDC3F4',
  [7]: '#CE8C8C',
  [8]: '#FF9B7E',
  [9]: '#DCB178',
  [10]: '#E8E3C9',
  [11]: '#A8723A',
  [12]: '#77BF95',
  [13]: '#426653',
};

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
  sextaCategoriaAppaloosaMachomestizo: IDataCow[]; // aqui se copia
}

export const useDeleteme = () => {
  const {generateCatalogMacaji} = useCreatePdf();

  const data: ICategoy = {
    sextaCategoriaAppaloosaMachomestizo: [
      {
        inscripcion: '100',
        nombreEjemplar: 'PRINCIPE',
        registro: 'S/R',
        arete: 'S/D',
        fechaNacimiento: '9/2/2018',
        sangre: 'MESTIZA',
        categoria: 'SEXTA',
        raza: 'APPALOOSA',
        sexo: 'MACHO',
        exhibicion: 'Si',
        remate: 'NO',
        nombrePadre: 'S/D',
        registroPadre: 'S/R',
        nombreMadre: 'S/D',
        registroMadre: 'S/R',
        propietario: 'JOSELO SIERRA',
        criadero: 'RANCHO SAN ALFONSO',
        provincia: 'CHIMBORAZO',
      },
    ],
  };

  const limitNumber = data.sextaCategoriaAppaloosaMachomestizo.length;
  const raza =
    data.sextaCategoriaAppaloosaMachomestizo[0].raza.toUpperCase() ===
    'Holstein'.toUpperCase()
      ? 'Holstein friesian'
      : data.sextaCategoriaAppaloosaMachomestizo[0].raza; // TODO:
  const equino = true;

  const isRemate = false;

  const subTitle = equino
    ? isRemate
      ? subtitleEnum.EQUINO_REMATE
      : subtitleEnum.EQUINO_EXPOSICION
    : isRemate
    ? subtitleEnum.VACUNO_REMATE
    : subtitleEnum.VACUNO_EXPOSISCION;

  //const subTitle = 'REMATE DE GANADO';
  const sexInfo: sexInfo = {
    sexTitle: sexTitleEnum.EQUINO_MACHO_MESTIZAO, // cambiar el sexo aqui
    sexColor: sexColorEnum.EQUINO_MACHO_MESTIZAO, // y aqui
  };
  const categoryInfo: categoryInfo = {
    categoryTitle: categoryTitleEnum.SEXTA_CATEGORIA, // cambiar categoria aqui
    categoryColor: categoryColorEnum.SEXTA_CATEGORIA,
  };

  const [numberOfGeneratedPages, setNumberOfGeneratedPages] =
    useState<number>(0);

  const onGenerate = (data: ICategoy) => {
    const limit = Math.floor(
      data.sextaCategoriaAppaloosaMachomestizo.length / 3,
    );

    setNumberOfGeneratedPages(start => {
      generateCatalogMacaji(
        data.sextaCategoriaAppaloosaMachomestizo.slice(
          0 + start * 3,
          0 + start * 3 + 3,
        ),
        equino || isRemate ? false : start === limit ? true : false,
        raza,
        subTitle,
        sexInfo,
        categoryInfo,
        equino,
        isRemate,
      );

      return start + 1;
    });
  };

  return {data, onGenerate, numberOfGeneratedPages, limitNumber};
};
