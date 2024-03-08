from flask import Flask, jsonify, request
from flask_cors import CORS
from app.models.model import ImageCaptioningModel
from PIL import Image
from io import BytesIO

app = Flask(__name__)
CORS(app)

imageCaptionModel = None


@app.route("/api/get-caption-from-image", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 404
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 404
    file_contents = file.read()
    image = Image.open(BytesIO(file_contents))
    predictions = imageCaptionModel.predict_caption(
        imageCaptionModel.extract_img_features(image)
    )
    return jsonify({"context": predictions}), 200


def create_image_captioning_model():
    global imageCaptionModel
    model_path = "app/models/best_model.h5"
    tokenizer_path = "app/models/tokenizer.pkl"
    imageCaptionModel = ImageCaptioningModel(model_path, tokenizer_path)


if __name__ == "__main__":
    create_image_captioning_model()
    app.run(debug=True)
