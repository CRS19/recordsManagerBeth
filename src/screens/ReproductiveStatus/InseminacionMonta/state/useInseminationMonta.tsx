import {useSelector} from 'react-redux';
import {IMontaIaReportTableInfo} from '../../../../interfaces/ReproductionRecord';
import {IAppState} from '../../../../store/reducer';

export interface IUseInseminationMonta {
  montaIaReportTableData: IMontaIaReportTableInfo[];
}

export const useInseminationMonta = () => {
  const montaIaReportTableData = useSelector(
    (state: IAppState) => state.montaIaReportTableData!,
  );

  return {montaIaReportTableData};
};
