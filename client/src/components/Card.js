import "./styles/Card.css";

const Card = ({ id, title, category, definition, handleDelete }) => {
  return (
    <div className="Card panel">
      <h3>{title}</h3>
      <span>{category}</span>
      <p>{definition}</p>

      <button
        className="btn btn-error"
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
