import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const shopSelections = createSelector(
  [selectShop],
  shop => shop.shopCollections
);

export const selectCollectionForPreview = createSelector(
  [shopSelections],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [shopSelections],
    collections => collections[collectionUrlParam]
  );
