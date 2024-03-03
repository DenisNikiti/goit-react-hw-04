import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ galery, handlemodal }) {
  return (
    <ul className={css.list}>
      {galery.map((card) => {
        return (
          <ImageCard key={card.id} card={card} handlemodal={handlemodal} />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  galery: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handlemodal: PropTypes.func.isRequired,
};

export default ImageGallery;
