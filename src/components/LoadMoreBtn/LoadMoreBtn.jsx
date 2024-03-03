import PropTypes from "prop-types";

function LoadMoreBtn({ handepage }) {
  return (
    <button type="button" onClick={handepage}>
      Load More
    </button>
  );
}

LoadMoreBtn.propTypes = {
  handepage: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
