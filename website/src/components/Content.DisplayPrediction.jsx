import { useRef } from 'react';

const DisplayPrediction = ({ prediction }) => {
	const textareaRef = useRef();

	const handleCopy = async () => {
		if (textareaRef.current) {
			try {
				await navigator.clipboard.writeText(textareaRef.current.value);
			} catch (err) {
				console.error('Failed to copy text: ', err);
			}
		}
	};

	return (
		<div className="mt-3">
			<h3>Our prediction</h3>
			<div className="input-group">
				<textarea
					className="form-control"
					aria-label="With textarea"
					value={prediction}
					ref={textareaRef}
					readOnly
				/>
				<button className='btn btn-outline-secondary' style={{ position: 'absolute', top: '0', right: '0', zIndex: 999 }} onClick={handleCopy}>
					Copy
				</button>
			</div>
		</div>
	);
};

export default DisplayPrediction;
