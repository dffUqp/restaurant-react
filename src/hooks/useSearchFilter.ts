import { useMemo } from 'react';
import { IShopItem } from '../ts/dataType';

export const useSearchFilter = (
  searchItems: IShopItem[],
  inputValue: string
): IShopItem[] =>
  useMemo(
    () =>
      searchItems.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, searchItems]
  );
