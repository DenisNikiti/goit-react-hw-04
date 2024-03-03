import PropTypes from "prop-types";

function ImageCard({ card, handlemodal }) {
  return (
    <li>
      <div
        onClick={() => {
          handlemodal(card);
        }}
      >
        <img src={card.urls.small} />
      </div>
    </li>
  );
}

ImageCard.propTypes = {
  card: PropTypes.object.isRequired,
  handlemodal: PropTypes.func.isRequired,
};
export default ImageCard;
