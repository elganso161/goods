import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectGoods } from "../store/goodsSlice";
// import { selectCart } from "../store/cartSlice";
// import Cart from "../components/Cart";
// import { minus } from "../store/cartSlice";

function CartList() {
//   const goods = useSelector(selectGoods);
//   const cart = useSelector(selectCart);
//   const dispatch = useDispatch();

//   const goodsObj = goods.reduce((accum, item) => {
//     accum[item["articul"]] = item;
//     return accum;
//   }, {});

//   let clickHandler = (e) => {
//     e.preventDefault();
//     let t = e.target;
//     if (!t.classList.contains("removeBtn")) return true;
//     dispatch(minus(t.getAttribute("data-key")));
//   };

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th></th>
            <th>Название товара</th>
            <th>Цена ( за единицу)</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          {Object.keys(cart).map((item, index) => (
            <Cart
              title={goodsObj[item]["title"]}
              cost={goodsObj[item]["cost"]}
              image={goodsObj[item]["image"]}
              articul={cart[item]}
              key={index}
            />
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default CartList;
