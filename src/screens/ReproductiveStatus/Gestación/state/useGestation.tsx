import {useSelector} from 'react-redux';
import {IPreniezDataReportInfo} from '../../../../interfaces/ReproductionRecord';
import {IAppState} from '../../../../store/reducer';

export interface IUseGestation {
  preniezTableData: IPreniezDataReportInfo[];
}

export const useGestation = () => {
  const preniezTableData = useSelector(
    (state: IAppState) => state.preniezReportTableData!,
  );

  return {preniezTableData};
};
