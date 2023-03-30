import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

export default function ImageGallery({ imagesList }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const imageToModal = useRef('');
  const tagToModal = useRef('');

  useEffect(() => {
    function escFunction(event) {
      if (event.key === 'Escape') {
        isShowModal && setIsShowModal(false);
      }
    }

    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [isShowModal]);

  const showModal = index => {
    console.log(index);
    imageToModal.current = imagesList[index].largeImageURL;
    tagToModal.current = imagesList[index].tags;
    setIsShowModal(true);
  };

  const hideModal = event => {
    if (event.target === event.currentTarget) {
      setIsShowModal(false);
    }
  };

  return (
    <section>
      <ul className="ImageGallery">
        {imagesList.map(({ id, webformatURL, largeImageURL, tags }, index) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webFormatImage={webformatURL}
            tag={tags}
            onShowModal={() => showModal(index)}
          />
        ))}
      </ul>

      {isShowModal && (
        <Modal
          imageModal={imageToModal.current}
          tagModal={tagToModal.current}
          onHide={hideModal}
        />
      )}
    </section>
  );
}

ImageGallery.propTypes = {
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
