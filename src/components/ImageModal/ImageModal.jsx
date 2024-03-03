import ReactModal from "react-modal";
import { useEffect } from "react";
import PropTypes from "prop-types";
import css from "./ImageModal.module.css";

function ImageModal({ isModalOpen, handlemodal, modalCard }) {
  ReactModal.setAppElement("#root");
  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      onRequestClose={handlemodal}
    >
      <div className={css.content}>
        <img src={modalCard.urls.regular} className={css.image} />
        <div>
          <p>{modalCard.alt_description}</p>
          <p>Likes: {modalCard.likes}</p>
          <p>{modalCard.user.name}</p>
        </div>
      </div>
    </ReactModal>
  );
}
ImageModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handlemodal: PropTypes.func.isRequired,
  modalCard: PropTypes.object.isRequired,
};
export default ImageModal;
