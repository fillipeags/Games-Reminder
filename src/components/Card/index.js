import React from "react";
import "./index.css";

import { games } from "../../mock/data";

export const Card = () => {
  const [gameList, setGameList] = React.useState(games);

  const removeItems = (id) => {
    setGameList([]);
  };

  return (
    <>
      {gameList.map((game) => {
        const { id, name, releaseDate, imageCover, store } = game;

        return (
          <div key={id} className="card-info">
            <img src={imageCover} alt="" />
            <h1>{name}</h1>
            <h1>{releaseDate}</h1>
            <button
              className="btn"
              onClick={() => {
                window.open(store, "_blank");
              }}
            >
              pre-order
            </button>
          </div>
        );
      })}

      <button className="btn-2" onClick={removeItems}>
        Clean queue
      </button>
    </>
  );
};
