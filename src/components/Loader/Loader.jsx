import { RotatingLines } from 'react-loader-spinner';

import PropTypes from 'prop-types';

export default function Loader({ searchQuery }) {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p>Looking for images on request: "{searchQuery}"...</p>
    </div>
  );
}

Loader.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
