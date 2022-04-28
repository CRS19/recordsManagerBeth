import React, {MutableRefObject} from 'react';
import {ICow} from '../../../interfaces/CowInterface';
import {IDesteteForm} from '../../../interfaces/newCowForm';

interface IUseInputCardDesteteState {
  validateForm: () => void;
}

interface IUseInputCardDesteteStateProps {
  value: ICow;
  form: MutableRefObject<IDesteteForm>;
}

export const useInputCardDesteteState = (
  props: IUseInputCardDesteteStateProps,
): IUseInputCardDesteteState => {
  const validateForm = () => {};

  return {validateForm};
};
