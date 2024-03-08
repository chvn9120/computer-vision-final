import DisplayImage from './Content.DisplayImage';
import DisplayPrediction from './Content.DisplayPrediction';
import { useState } from 'react';
import axios from 'axios';

const Content = () => {
	const savedImage = JSON.parse(localStorage.getItem('savedImage')) || {};
	const [file, setFile] = useState(savedImage.image || null);
	const [image, setImage] = useState(savedImage.image_url || null);
	const [prediction, setPrediction] = useState(savedImage.prediction || null);

	const onFileChange = (e) => {
		if (!e.target.files?.[0]) return;
		const reader = new FileReader();
		reader.onloadend = async () => {
			await setFile(e.target.files[0]);
			localStorage.setItem(
				'savedImage',
				JSON.stringify({ image: { name: e.target.files[0].name }, image_url: reader.result }),
			);
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	const onFileUpload = async () => {
		if (!file) return;
		const formData = new FormData();
		formData.append('file', file);
		await axios.post('http://127.0.0.1:5000/api/get-caption-from-image', formData).then((res) => {
			const context = res.data.context;
			const processedContext = context.replace('startseq ', '').replace(' endseq', '').trim();
			const tmp = JSON.parse(localStorage.getItem('savedImage'));
			tmp.prediction = processedContext;
			localStorage.setItem('savedImage', JSON.stringify(tmp));
			setImage(tmp.image_url);
			setPrediction(processedContext);
		});
	};

	return (
		<>
			<section className="row mt-3">
				<div className="col">
					<div className="input-group">
						<div className="custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="inputFile"
								onChange={(e) => onFileChange(e)}
							/>
							<label className="custom-file-label" htmlFor="inputFile">
								{file ? file.name : 'Choose file'}
							</label>
						</div>
						<div className="input-group-append">
							<button
								className="btn btn-outline-primary"
								type="button"
								onClick={onFileUpload}
								disabled={!file}
							>
								Upload
							</button>
						</div>
					</div>
				</div>
			</section>
			{prediction && <DisplayPrediction prediction={prediction} />}
			{image && <DisplayImage image={image} />}
		</>
	);
};

export default Content;
