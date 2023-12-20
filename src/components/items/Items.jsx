import React, { Component } from "react";

import Item from "../item/Item";

import "./Items.css";
import withLoadingSpinner from "./WithLoadingSpinner";

class Items extends Component {
  componentDidMount() {
    console.log("Items component did mount");
  }

  componentDidUpdate(prevProps) {
    console.log("Items component did update");
    if (prevProps.items !== this.props.items) {
      console.log("Items props updated");
    }
  }

  componentWillUnmount() {
    console.log("Items component will unmount");
  }

  componentDidCatch(error, errorInfo) {
    console.log("Items component caught an error:", error);
  }

  render() {
    const { items, onShowItem, onAdd } = this.props;

    return (
      <main>
        {items.map((el) => (
          <Item
            onShowItem={onShowItem}
            key={el.id}
            item={el}
            onAdd={onAdd}
          />
        ))}
      </main>
    );
  }
}

export default withLoadingSpinner(Items);
