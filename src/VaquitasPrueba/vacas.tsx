import {ICow} from '../interfaces/CowInterface';

export const emptyCow: ICow = {
  idVaca: '',
  nombre: '',
  sexo: '',
  numeroDeArete: '',
  fechaDeNacimiento: 1597439118000,
  raza: '',
  pesoNacimiento: 0,
  categoria: 'Ternera',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 0,
  pesoActual: 0,
  estadoReproductivo: '',
  vacaInfo: {
    estadoProductivo: '', // vaca
    tipoAborto: '', // vaca
    diasGestación: 999, // solo las vacas
    numeroDeAbortos: 999, // vaca
    fechaDeParto: 1597439118000, // vaca
    numeroDeCrias: 999, // vacas
    numeroDePartos: 999, // vaca
    diasGestaciónPromedio: 999, // vaca
    edadPrimerParto: {
      years: 999,
      months: 999,
      days: 999,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 999, // vaca
    duraciónLactanciaPromedio: 999, // vaca
    produccionPromedioLactancias: 999, // vaca
    diasSecosTotales: 999, // vaca
  },
  toroInfo: {
    numeroHijos: 0, // toro
    numeroHijas: 0, // toro
  },
  // coloar url de imagen por defecto
  imagenPath: '',
};

export const vaca0: ICow = {
  idVaca: '007xD',
  nombre: 'Noname',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  estadoReproductivo: 'Aborto',
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  vacaInfo: {
    estadoProductivo: '', // vaca
    tipoAborto: '', // vaca
    diasGestación: 0, // solo las vacas
    numeroDeAbortos: 0, // vaca
    fechaDeParto: 0, // vaca
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 999, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/FQ8Yzq4.png',
};

export const vaca1: ICow = {
  idVaca: '123',
  nombre: 'Dana',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',

  pesoNacimiento: 123,

  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Aborto',
  vacaInfo: {
    estadoProductivo: 'Descarte',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/FQ8Yzq4.png',
};

export const vaca2: ICow = {
  idVaca: '123',
  nombre: 'Hella',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Vacia',
  vacaInfo: {
    estadoProductivo: 'Novilla no lactante',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/nFhPmoo.png',
};

export const vaca3: ICow = {
  idVaca: '1234',
  nombre: 'ADELINA',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Preñada',
  vacaInfo: {
    estadoProductivo: 'Vaca con alta producción',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/nFhPmoo.png',
};
export const vaca4: ICow = {
  idVaca: '1235',
  nombre: 'VANESSA',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Precentina',
  vacaInfo: {
    estadoProductivo: 'Vaca con media producción',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/nFhPmoo.png',
};
export const vaca5: ICow = {
  idVaca: '1236',
  nombre: 'CRISTINA',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Seca',
  vacaInfo: {
    estadoProductivo: 'Vaca con baja producción',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/nFhPmoo.png',
};

export const vaca6: ICow = {
  idVaca: '1237',
  nombre: 'CARMINA',
  sexo: 'Hembra',
  numeroDeArete: '546',
  fechaDeNacimiento: 12333123,
  raza: 'holstein',
  pesoNacimiento: 123,
  categoria: 'Vaca seca',
  valorDelBovino: 123,
  nombreDeMadre: 'Elina',
  numeroAreteMadre: '1233',
  nombreDePadre: 'Papa',
  numeroAretePadre: '098',
  fechaDestete: 123213123,
  pesoAlDestete: 32.2,
  pesoActual: 40,
  estadoReproductivo: 'Preñada',
  vacaInfo: {
    estadoProductivo: 'Reproductor',
    tipoAborto: 'Aborto Normal',
    diasGestación: 283,
    numeroDeAbortos: 0,
    fechaDeParto: 0,
    numeroDeCrias: 0, // vacas
    numeroDePartos: 0, // vaca
    diasGestaciónPromedio: 0, // vaca
    edadPrimerParto: {
      years: 1,
      months: 3,
      days: 14,
    }, // vaca
    fechaUltimoParto: 1597439118000, // vaca
    numeroLactancias: 0, // vaca
    duraciónLactanciaPromedio: 0, // vaca
    produccionPromedioLactancias: 0, // vaca
    diasSecosTotales: 0, // vaca
  },
  imagenPath: 'https://i.imgur.com/nFhPmoo.png',
};

export const vacas: ICow[] = [vaca0, vaca1, vaca2, vaca3, vaca4, vaca5, vaca6];
