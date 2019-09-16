import { createSelector } from "reselect";

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};
export const shopSelections = createSelector(
  [selectShop],
  shop => shop.shopCollections
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [shopSelections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
