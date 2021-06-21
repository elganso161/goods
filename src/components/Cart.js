import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import { minus, del } from "../store/cartSlice";

function Cart() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  let clickHandler = (e) => {
    e.preventDefault();
    let t = e.target;
    if (!t.classList.contains("remove-btn")) return true;
    dispatch(minus(t.getAttribute("data-key")));
    if (!t.classList.contains("del-btn")) return true;
    dispatch(del(t.getAttribute("data-key")));
  };

  let s = 0;
  function sum() {
    let a = Object.keys(cart).map(
      (item) => cart[item] * goodsObj[item]["cost"]
    );
    for (let i = 0; i < a.length; i++) {
      s += a[i];
    }
    return s;
  }
  sum();

  return (
    <div onClick={clickHandler}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Название товара</th>
            <th>Цена ( за единицу)</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>
              Итого:
              {s}
            </th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          {Object.keys(cart).map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  className="goodsImg"
                  src={goodsObj[item]["image"]}
                  alt="img"
                />
              </td>
              <td>{goodsObj[item]["title"]}</td>
              <td>{goodsObj[item]["cost"]}</td>
              <td>{cart[item]}</td>
              <td>{cart[item] * goodsObj[item]["cost"]}</td>
              <td className="remove-btn">
                <button className="remove-btn" data-key={item}>
                  -
                </button>
              </td>
              <td className="remove-btn">
                <button className="remove-btn del-btn" data-key={item}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
