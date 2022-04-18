import {useSelector} from 'react-redux';
import {
  IInventoryCowFirstTable,
  IInventoryCowSecondTable,
} from '../../../../interfaces/InventoryCow.interface';
import {IAppState} from '../../../../store/reducer';

export interface IUseBovinos {
  firstDataTable: IInventoryCowFirstTable;
  secondTableData: IInventoryCowSecondTable;
}

export const useBovinos = () => {
  const firstDataTable = useSelector(
    (state: IAppState) => state.inventoryCowsFirstTable!,
  );
  const secondTableData = useSelector(
    (state: IAppState) => state.inventoryCowsSecondTable!,
  );

  return {firstDataTable, secondTableData};
};
