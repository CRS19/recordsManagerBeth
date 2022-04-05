import {useSelector} from 'react-redux';
import {IInventoryCowFirstTable} from '../../../../interfaces/InventoryCow.interface';
import {IAppState} from '../../../../store/reducer';

export interface IUseBovinos {
  firstDataTable: IInventoryCowFirstTable;
}

export const useBovinos = () => {
  const firstDataTable = useSelector(
    (state: IAppState) => state.inventoryCowsFirstTable!,
  );

  return {firstDataTable};
};
