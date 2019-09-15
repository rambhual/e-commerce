import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </section>
  );
};

export default CollectionPreview;
