export interface IdentificationCardInputForm {
  sexo: boolean;
  nombre: boolean;
  numeroDeArete: boolean;
  fechaDeNacimiento: boolean;
  raza: boolean;
  pesoNacimiento: boolean;
}

export interface INewDrugForm {
  expDate: boolean;
  name: boolean;
  presentationForm: boolean;
  unitTye: boolean;
  amount: boolean;
  unitContent: boolean;
}

export const initialNewDrugForm: INewDrugForm = {
  expDate: false,
  name: false,
  presentationForm: false,
  unitTye: false,
  amount: false,
  unitContent: false,
};

export const initialForm: IdentificationCardInputForm = {
  sexo: false,
  nombre: false,
  numeroDeArete: false,
  fechaDeNacimiento: false,
  raza: false,
  pesoNacimiento: false,
};

export interface IDesteteForm {
  fechaDestete: boolean;
  pesoAlDestete: boolean;
}

export const initialFormDestete: IDesteteForm = {
  fechaDestete: false,
  pesoAlDestete: false,
};

export interface ILactanciaForm {
  numeroLactancias: boolean;
  duraciónLactanciaPromedio: boolean;
  produccionPromedioLactancias: boolean;
  diasSecosTotales: boolean;
}

export const initialFormLactancia: ILactanciaForm = {
  numeroLactancias: false,
  duraciónLactanciaPromedio: false,
  produccionPromedioLactancias: false,
  diasSecosTotales: false,
};
export interface IGestationForm {
  numeroDeAbortos: boolean;
  numeroDePartos: boolean;
  diasGestaciónPromedio: boolean;
  edadPrimerParto: boolean;
  fechaUltimoParto: boolean;
}

export const initialFormGestation: IGestationForm = {
  numeroDeAbortos: false,
  numeroDePartos: false,
  diasGestaciónPromedio: false,
  edadPrimerParto: false,
  fechaUltimoParto: false,
};
