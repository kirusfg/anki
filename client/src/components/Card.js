import "./Card.css";

const Card = ({ id, title, category, definition }) => {
  const deleteCard = (id) => {
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

  return (
    <div className="Card">
      <button onClick={(e) => deleteCard(id)}>Delete</button>
      <h3>{title}</h3>
      <span>{category}</span>
      <p>{definition}</p>
    </div>
  );
};

export default Card;
