import "./Card.css";

const Card = ({ id, title, category, definition, handleDelete }) => {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <span>{category}</span>
      <p>{definition}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
