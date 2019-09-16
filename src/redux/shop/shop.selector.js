import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const shopSelections = createSelector(
  [selectShop],
  shop => shop.shopCollections
);
