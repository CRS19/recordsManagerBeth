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
  septimaArabeMachoPuro: IDataCow[]; // aqui se copia
}

export const useDeleteme = () => {
  const {generateCatalogMacaji} = useCreatePdf();

  const data: ICategoy = {
    septimaArabeMachoPuro: [
      {
        inscripcion: '225',
        nombreEjemplar: 'PRIMAVER JADES IRLANDA',
        registro: '045905',
        arete: 'S/D',
        fechaNacimiento: '20/6/2021',
        sangre: 'HMSR',
        categoria: '6',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'FORES GLEN JADES',
        registroPadre: '12894928',
        nombreMadre: 'PRIMAVERA TOPEKA LOURDESITA',
        registroMadre: '02100013-06',
        propietario: 'ING.GILBERT VASCONES',
        criadero: 'HACIENDA LA PRIMAVERA',
        provincia: 'BOLIVAR',
      },
      {
        inscripcion: '232',
        nombreEjemplar: 'PUENTE LEMONHEAD LINDURA',
        registro: '06-10-1118-06',
        arete: 'S/D',
        fechaNacimiento: '6/9/2020',
        sangre: 'HMR',
        categoria: '5',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'LEMON HEAD',
        registroPadre: 'USA-118622185',
        nombreMadre: 'PUENTE VALENTINO DASHA',
        registroMadre: '06-100260-06',
        propietario: 'EDWIN ALZAMORA',
        criadero: 'EL PUENTE',
        provincia: 'CHIMBORAZO',
      },
      {
        inscripcion: '233',
        nombreEjemplar: 'PUENTE CHILI CHILENA',
        registro: '06-101119-06',
        arete: 'S/D',
        fechaNacimiento: '20/10/2020',
        sangre: 'HMR',
        categoria: '5',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'CHILI',
        registroPadre: 'USA 118201001',
        nombreMadre: 'SAN RAFAEL NERON CATALINA',
        registroMadre: '06-100246-06',
        propietario: 'EDWIN ALZAMORA',
        criadero: 'EL PUENTE',
        provincia: 'CHIMBORAZO',
      },
      {
        inscripcion: '176',
        nombreEjemplar: 'CORAZÓN',
        registro: 'S/R',
        arete: 'S/D',
        fechaNacimiento: '25/4/2018',
        sangre: 'HMSR',
        categoria: '9',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'SABER',
        registroPadre: 'S/R',
        nombreMadre: 'KATY',
        registroMadre: 'S/R',
        propietario: 'ALEJANDRO PONCE',
        criadero: 'CRIADERO JERSEY MISNIAG',
        provincia: 'CHIMBORAZO',
      },
      {
        inscripcion: '221',
        nombreEjemplar: 'PRIMAVERA VALENTINA MURICA',
        registro: '045905',
        arete: 'S/D',
        fechaNacimiento: '30/8/2021',
        sangre: 'HP',
        categoria: '2',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'ALLYS LOBE VALENTINO',
        registroPadre: '145911 USA',
        nombreMadre: 'PRIMAVERA BRAHS STEFY',
        registroMadre: '21003901',
        propietario: 'ING.GILBERT VASCONES',
        criadero: 'HACIENDA LA PRIMAVERA',
        provincia: 'BOLIVAR',
      },
      {
        inscripcion: '222',
        nombreEjemplar: 'PRIMAVERS KOKETO BLU',
        registro: '45916',
        arete: 'S/D',
        fechaNacimiento: '1/4/2021',
        sangre: 'HP',
        categoria: '3',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'PRIMAVERA TEQUILA KOKETO',
        registroPadre: 'S/R',
        nombreMadre: 'PRIMAVERA AHOICA FRANSISCA',
        registroMadre: 'S/R',
        propietario: 'ING.GILBERT VASCONES',
        criadero: 'HACIENDA LA PRIMAVERA',
        provincia: 'BOLIVAR',
      },
      {
        inscripcion: '055',
        nombreEjemplar: 'BECKY',
        registro: 'S/R',
        arete: '3161',
        fechaNacimiento: '15/12/2020',
        sangre: 'HMSR',
        categoria: '4',
        raza: 'Jersey',
        sexo: 'HEMRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'VALENTIUN',
        registroPadre: 'S/R',
        nombreMadre: 'NEVADOS TEQUILA SHOT',
        registroMadre: 'S/R',
        propietario: 'ING. ALEX FERNANDO FLORES CEVALLOS',
        criadero: 'RANCHO  MIRAFLORES',
        provincia: 'PASTAZA',
      },
      {
        inscripcion: '74',
        nombreEjemplar: 'NEVADOS MR SWAGGER REVÒLVER',
        registro: 'S/R',
        arete: 'S/D',
        fechaNacimiento: '8/6/2021',
        sangre: 'HP',
        categoria: '2',
        raza: 'Jersey',
        sexo: 'MACHO',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'TRIPLE T CF MR SWAGGER',
        registroPadre: 'S/R',
        nombreMadre: 'NEVADOS TEQUILA SHOT',
        registroMadre: 'S/R',
        propietario: 'GONZALO VALDIESO',
        criadero: 'CRIADERO LOS NEVADOS DE FANTASIA',
        provincia: 'PICHINCHA',
      },
      {
        inscripcion: '068',
        nombreEjemplar: 'NEVADOS MR SWAGGER AMBROSI',
        registro: '06-101146-06',
        arete: 'S/D',
        fechaNacimiento: '2/6/2021',
        sangre: 'HP',
        categoria: '2',
        raza: 'Jersey',
        sexo: 'MACHO',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'TRIPLE T CF MR SWAGGER',
        registroPadre: 'S/R',
        nombreMadre: 'NEVADOS KOOP AMBROSIA',
        registroMadre: 'S/R',
        propietario: 'GONZALO VALDIESO',
        criadero: 'CRIADERO LOS NEVADOS DE FANTASIA',
        provincia: 'PICHINCHA',
      },
      {
        inscripcion: '164',
        nombreEjemplar: 'LA DELICIA VICTORIOUS TINA',
        registro: 'S/R',
        arete: '1015',
        fechaNacimiento: '25/5/2021',
        sangre: 'HMSR',
        categoria: '3',
        raza: 'Jersey',
        sexo: 'HEMBRA',
        exhibicion: 'Si',
        remate: 'SI',
        nombrePadre: 'VICTORIOUS',
        registroPadre: 'S/R',
        nombreMadre: 'TORO',
        registroMadre: 'S/R',
        propietario: 'DIEGO RODRIGUEZ',
        criadero: 'CRIADERO LA DELICIA',
        provincia: 'CARCHI',
      },
    ],
  };

  const limitNumber = data.septimaArabeMachoPuro.length;
  const raza =
    data.septimaArabeMachoPuro[0].raza.toUpperCase() ===
    'Holstein'.toUpperCase()
      ? 'Holstein friesian'
      : data.septimaArabeMachoPuro[0].raza; // TODO:
  const equino = false;

  const isRemate = true;

  const subTitle = equino
    ? subtitleEnum.EQUINO_EXPOSICION
    : subtitleEnum.VACUNO_EXPOSISCION; // TODO:
  const sexInfo: sexInfo = {
    sexTitle: sexTitleEnum.EQUINO_HEMBRA_MEZTIZA, // cambiar el sexo aqui
    sexColor: sexColorEnum.EQUINO_HEMBRA_MEZTIZA, // y aqui
  };
  const categoryInfo: categoryInfo = {
    categoryTitle: categoryTitleEnum.SEPTIMA_CATEGORIA, // cambiar categoria aqui
    categoryColor: categoryColorEnum.SEPTIMA_CATEGORIA,
  };

  const [numberOfGeneratedPages, setNumberOfGeneratedPages] =
    useState<number>(0);

  const onGenerate = (data: ICategoy) => {
    const limit = Math.floor(data.septimaArabeMachoPuro.length / 3);

    setNumberOfGeneratedPages(start => {
      generateCatalogMacaji(
        data.septimaArabeMachoPuro.slice(0 + start * 3, 0 + start * 3 + 3),
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
