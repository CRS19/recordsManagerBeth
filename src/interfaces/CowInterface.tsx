export enum estadoProductivo {
  VACA_ALTA_PRODUCCION = 'Vaca con alta producción',
  VACA_MEDIA_PRODUCCIÓN = 'Vaca con media producción',
  VACA_BAJA_PRODUCCIÓN = 'Vaca con baja producción',
  NOVILLA_NO_LACTANTE = 'Novilla no lactante',
  REPRODUCTOR = 'Reproductor',
  DESCARTE = 'Descarte',
}

export enum diasGestación {
  DG_HOLSTEIN = 283,
  DG_BRAW_SWISS = 283,
  DG_JERSEY = 283,
  DG_AYRSHIRE = 283,
  DG_GYRHOLANDO = 283,
}

export enum tipoAborto {
  NORMAL = 'Aborto Normal',
  PLACENTA_RETENIDA = 'Placenta retenida',
  METRITIS_PUERPERAL = 'Metritis puerperal',
}

export enum estadoReproductivo {
  ABORTO = 'Aborto',
  VACIA = 'Vacia',
  PRENADA = 'Preñada',
  PRECENTINA = 'PRECENTINA',
  SECA = 'Seca',
  TERNERO = 'Ternero',
  REPRODUCTOR = 'Reproductor',
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
  TORO = 'Toro',
  TORETE = 'Torete',
}

export type estadoProductivoType =
  | 'Vaca con alta producción'
  | 'Vaca con media producción'
  | 'Vaca con baja producción'
  | 'Novilla no lactante' // es el animal de 0 dias de nacido hasta el momento de inseminacion
  | 'Reproductor'
  | 'Descarte'
  | 'Seca'
  | '';

export type estadoReproductivoType =
  | 'Aborto'
  | 'Vacia'
  | 'Preñada'
  | 'Precentina'
  | 'Seca'
  | '';

export type tipoAbortoType =
  | 'Aborto Normal'
  | 'Placenta retenida'
  | 'Metritis puerperal'
  | '';

export type categoriaType =
  | 'Ternera'
  | 'Vaca media'
  | 'Vaca fierro'
  | 'Vaca vientre'
  | 'Vaca'
  | 'Vaca seca'
  | '';

export interface ICow {
  idVaca: string;
  nombre: string;
  sexo: string;
  numeroDeArete: string;
  fechaDeNacimiento: number;
  raza: string;
  pesoNacimiento: number;
  categoria: categoriaType;
  valorDelBovino: number;
  nombreDeMadre: string;
  numeroAreteMadre: string;
  nombreDePadre: string;
  numeroAretePadre: string;
  fechaDestete: number;
  pesoAlDestete: number;
  pesoActual: number;
  estadoReproductivo: estadoReproductivoType;
  updatedAt?: number;
  vacaInfo?: vacaInfo;
  toroInfo?: toroInfo;
  historialPeso: IHistorialPeso[];
  imagenPath: string[];
  [k: string]: any;
}

export interface IHistorialPeso {
  timestamp: number;
  // las unidades siempre estan en Kg
  peso: number;
}

export interface vacaInfo {
  estadoProductivo: estadoProductivoType; // vaca
  tipoAborto?: tipoAbortoType; // vaca
  diasGestación: number; // solo las vacas
  numeroDeAbortos: number; // vaca
  fechaDeParto: number; // vaca
  numeroDeCrias: number; // vacas
  numeroDePartos: number; // vaca
  diasGestaciónPromedio: number; // vaca
  edadPrimerParto: {
    years: number;
    months: number;
    days: number;
  }; // vaca
  fechaUltimoParto: number; // vaca
  numeroLactancias: number; // vaca
  duraciónLactanciaPromedio: number; // vaca
  produccionPromedioLactancias: number; // vaca
  diasSecosTotales: number; // vaca
  productiva: boolean; // Campo usado para ver cuales vacas estan en el listado al momento de coger la leche todos días si esta cuando se registra un parto!,
  // Esta en producción si llega a pasar 8 meses de gestacín
  // el boton secar(buscar ese boton) es para cambiar este estado a Falso
}

export interface toroInfo {
  numeroHijos?: number; // toro
  numeroHijas?: number; // toro
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
