import { useEffect, useState } from "react";

import Card from "./Card";

import "./Learn.css";

const Learn = () => {
  const [cardsData, setCardsData] = useState([]);
  const [cardComponents, updateCardComponents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/getCards")
      .then((res) => res.json())
      .then((res) => setCardsData(res));
  }, []);

  useEffect(() => {
    updateCardComponents(
      cardsData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          category={card.category}
          definition={card.definition}
        />
      ))
    );
  }, [cardsData]);

  return <div className="Learn">{cardComponents}</div>;
};

export default Learn;
