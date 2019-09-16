import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelections } from "../../redux/shop/shop.selector";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import "./shop.styles.scss";
const ShopPage = ({ match }) => {
  return (
    <section className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </section>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: shopSelections
});

export default connect(mapStateToProps)(ShopPage);
