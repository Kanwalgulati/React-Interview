import React, { useState } from "react";
import "./grid-style.css";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
      disabled={isDisabled}
    />
  );
};

const Grid = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  //@ First Thing we should make it scalable if interviewer makes changes and say he want grid only in 1st line then
  //@ we need to handle those cases also
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deativateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        console.log("file: Grid.jsx:32 ~ setOrder ~ newOrder:", newOrder);
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 500);
  };
  const activeCells = (index) => {
    let newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deativateCells();
    }
  };

  //@ here one resprestes a block and if its 0 block will not be there , so now it became very easy for us
  //@ to change the layout however we want
  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activeCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
