export enum estadoProductivo {
  VACA_ALTA_PRODUCCION = 'Vaca con alta producción',
  VACA_MEDIA_PRODUCCIÓN = 'Vaca con media producción',
  VACA_BAJA_PRODUCCIÓN = 'Vaca con baja producción',
  NOVILLA_NO_LACTANTE = 'Novilla no lactante',
  REPRODUCTOR = 'Reproductor',
  DESCARTE = 'Descarte',
}

export enum tipoAborto {
  NORMAL = 'Aborto Normal',
  PLACENTA_RETENIDA = 'Placenta retenida',
  METRITIS_PUERPERAL = 'Metritis puerperal',
}

export enum estadoReproductivo {
  ABORTO = 'Aborto',
  VACIA = 'Vacia',
  PREÑADA = 'Preñada',
  PRECENTINA = 'Precentina',
  SECA = 'Seca',
}

export enum tipoMonta {
  MONTA = 'monta',
  IA = 'IA',
}

export enum Categoria {
  TERNERA = 'Ternera',
  VACA_MEDIA = 'Vaca media',
  VACA_FIERRO = 'Vaca fierro',
  VACA_VIENTRE = 'Vaca vientre',
  VACA = 'Vaca',
  VACA_SECA = 'Vaca seca',
}

export interface ICow {
  idVaca: string;
  nombre: string;
  sexo: string;
  numeroDeArete: string;
  fechaDeNacimiento: number;
  raza: string;
  pesoNacimiento: number;
  estadoProductivo:
    | 'Vaca con alta producción'
    | 'Vaca con media producción'
    | 'Vaca con baja producción'
    | 'Novilla no lactante'
    | 'Reproductor'
    | 'Descarte';
  estadoReproductivo: 'Aborto' | 'Vacia' | 'Preñada' | 'Precentina' | 'Seca';
  tipoAborto?: 'Aborto Normal' | 'Placenta retenida' | 'Metritis puerperal';
  categoria:
    | 'Ternera'
    | 'Vaca media'
    | 'Vaca fierro'
    | 'Vaca vientre'
    | 'Vaca'
    | 'Vaca seca';
  valorDelBovino: number;
  nombreDeMadre: string;
  numeroAreteMadre: string;
  nombreDePadre: string;
  numeroAretePadre: string;
  fechaDestete: number;
  pesoAlDestete: number;
  pesoActual: number;
  numeroDeAbortos: number;
  diasDeGestacion: number;
  fechaDeParto: number;
  numeroDeCrias: number;
}

export interface registroPeso {
  idRegistro: number;
  idVaca: string;
  fecha: number;
  peso: number;
  pesoNacimiento?: boolean;
  pesoDestete?: boolean;
}

export interface registroParto {
  idRegistroParto: number;
  idVaca: string;
  fecha: number;
  estadoReproductivo: 'Aborto' | 'Vacia' | 'Preñada' | 'Precentina' | 'Seca';
  tipoMonta: 'monta' | 'IA';
  nombreInseminador?: string;
  nombreToro?: string;
  numeroAreteToro?: number;
  numeroRegistroPajuela?: string;
}

export interface registroPalpacion {
  idRegistroPalpacion: number;
  idRegistroParto: number;
  fecha: number;
  estadoReproductivo: 'Aborto' | 'Vacia' | 'Preñada' | 'Precentina' | 'Seca';
  tipoAborto?: 'Aborto Normal' | 'Placenta retenida' | 'Metritis puerperal';
}
