import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  filterKeysEnum,
  INITIAL_FILTERS_STATE,
  ISelectedFilter,
} from '../../../../../constants/SanityRecords';
import {ISanityRecord} from '../../../../../interfaces/SanityRecords';
import {IAppState} from '../../../../../store/reducer';
import {set, get, head} from 'lodash';
import {ControlDePesoTerneros} from '../../../../ReproductiveStatus/ControlDePesoTerneros/ControlDePesoTerneros';

interface IUseClinicHistory {
  sanityRecord: ISanityRecord;
  filteredSanityRecordData: Partial<ISanityRecord>;
  sanityFilterProps: {
    filterSelected: ISelectedFilter;
    selectFilter: (filterKeysEnum: filterKeysEnum) => void;
  };
}

export const useClinicHistory = (): IUseClinicHistory => {
  const sanityRecord = useSelector((state: IAppState) => state.sanityRecord!);
  const [filterSelected, setFilterSelected] = useState<ISelectedFilter>(
    INITIAL_FILTERS_STATE,
  );
  const [filteredSanityRecordData, setFilteredSanityRecordData] =
    useState<Partial<ISanityRecord>>(sanityRecord);
  const selectFilter = (filterKeysEnum: filterKeysEnum) => {
    const selectedFilter = {...INITIAL_FILTERS_STATE};

    if (get(filterSelected, `${filterKeysEnum}`)) {
      setFilterSelected(INITIAL_FILTERS_STATE);
      return;
    }

    set(selectedFilter, filterKeysEnum, true);

    setFilterSelected(selectedFilter);
  };

  const filterDirectory: Record<filterKeysEnum, () => void> = {
    [filterKeysEnum.DIAGNOSIS]: () =>
      setFilteredSanityRecordData(prevValue => ({
        diagnosis: sanityRecord.diagnosis,
      })),
    [filterKeysEnum.DEWORMINGS]: () =>
      setFilteredSanityRecordData(prevValue => ({
        deworming: sanityRecord.deworming,
      })),
    [filterKeysEnum.VACCINES]: () =>
      setFilteredSanityRecordData(prevValue => ({
        vaccines: sanityRecord.vaccines,
      })),
    [filterKeysEnum.UNDEFINED]: () => setFilteredSanityRecordData(sanityRecord),
  };

  useEffect(() => {
    const filterProperty = head(
      Object.keys(filterSelected).filter(
        key => get(filterSelected, key) === true,
      ),
    );

    filterDirectory[filterProperty as filterKeysEnum]();
  }, [filterSelected]);

  return {
    sanityRecord,
    filteredSanityRecordData,
    sanityFilterProps: {
      filterSelected,
      selectFilter,
    },
  };
};
