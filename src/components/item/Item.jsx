import React, {useState} from "react";
import { useDispatch } from "react-redux";

import "./Item.css";
import { addToOrderFunc, handlerClickFunc } from "../../store/reducers";

const Item = ({ item, onShowItem }) => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const onAdd = (item) => {
    dispatch(addToOrderFunc(item), handlerClickFunc());
    setButtonDisabled(true);
  };

  return (
    <div className="item">
      <div className="div-img" onClick={() => onShowItem(item)}>
        <img src={item.img} alt="Error" />
      </div>
      <h4>{item.title}</h4>
      <p>ЦЕНА: {item.price}₸</p>
        <div
            className={`add-to-cart`}
            onClick={() => !isButtonDisabled && onAdd(item)}
        >
            +
        </div>

    </div>
  );
};

export default Item;