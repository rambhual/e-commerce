import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";
const ShopPage = ({ collections }) => {
  return (
    <section className="shop-page">
      {collections.map(({ id, ...product }) => (
        <CollectionPreview key={id} {...product} />
      ))}
    </section>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: shopSelections
});

export default connect(mapStateToProps)(ShopPage);
