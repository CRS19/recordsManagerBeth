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

export interface IDesteteForm {
  fechaDestete: boolean;
  pesoAlDestete: boolean;
}

export const initialFormDestete: IDesteteForm = {
  fechaDestete: false,
  pesoAlDestete: false,
};
