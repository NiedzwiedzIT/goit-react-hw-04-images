import PropTypes from 'prop-types';

export default function Modal({ imageModal, tagModal, onHide }) {
  return (
    <div onClick={onHide} className="Overlay">
      <div className="Modal">
        <img className="Modal-container" src={imageModal} alt={tagModal} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageModal: PropTypes.string.isRequired,
  tagModal: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
};
