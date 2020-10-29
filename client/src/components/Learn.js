import { useEffect, useState } from "react";

import Card from "./Card";

import "./styles/Learn.css";

const Learn = () => {
  const [cardsData, setCardsData] = useState([]);
  const [cardComponents, updateCardComponents] = useState([]);

  // Passed to every individual Card component
  const handleDelete = (id) => {
    // Removing the card from view
    setCardsData(cardsData.filter((card) => card.id !== id));

    // Removing the card from database
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      body: JSON.stringify({ id }),
      headers,
    };

    fetch("http://localhost:3001/api/v1/deleteCard", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

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
          handleDelete={handleDelete}
        />
      ))
    );
  }, [cardsData]);

  return <div className="Learn">{cardComponents}</div>;
};

export default Learn;
