import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  webFormatImage,
  tag,
  onShowModal,
}) {
  return (
    <li onClick={onShowModal} id={id} className="ImageGalleryItem">
      <img src={webFormatImage} alt={tag} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webFormatImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onShowModal: PropTypes.func.isRequired,
};
