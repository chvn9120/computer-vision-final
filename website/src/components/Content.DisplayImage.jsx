import React from 'react';

const DisplayImage = ({ image }) => {
	return (
		<div className="mt-3">
			<h3>Your image</h3>
			<img src={image} alt="User uploaded" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
		</div>
	);
};

export default DisplayImage;
