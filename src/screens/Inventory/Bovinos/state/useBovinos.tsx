import {useSelector} from 'react-redux';
import {
  IInventoryCowFirstTable,
  IInventoryCowSecondTable,
} from '../../../../interfaces/InventoryCow.interface';
import {IAppState} from '../../../../store/reducer';

export interface IUseBovinos {
  firstDataTable: IInventoryCowFirstTable[];
  secondTableData: IInventoryCowSecondTable[];
  isLoading: boolean;
}

export const useBovinos = (): IUseBovinos => {
  const firstDataTable = useSelector(
    (state: IAppState) => state.inventoryCowsFirstTable!,
  );
  const secondTableData = useSelector(
    (state: IAppState) => state.inventoryCowsSecondTable!,
  );
  const isLoading = useSelector((state: IAppState) => state.isLoading!);

  return {firstDataTable, secondTableData, isLoading};
};
