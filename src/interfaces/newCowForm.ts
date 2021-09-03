export interface IdentificationCardInputForm {
  sexo: boolean;
  nombre: boolean;
  numeroDeArete: boolean;
  fechaDeNacimiento: boolean;
  raza: boolean;
  pesoActual: boolean;
}

export const initialForm: IdentificationCardInputForm = {
  sexo: false,
  nombre: false,
  numeroDeArete: false,
  fechaDeNacimiento: false,
  raza: false,
  pesoActual: false,
};
