import React from "react";
import ShopData from "../../assets/shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import './shop.styles.scss'
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <section className="shop-page">
        {collections.map(({ id, ...product }) => (
          <CollectionPreview key={id} {...product} />
        ))}
      </section>
    );
  }
}

export default ShopPage;
