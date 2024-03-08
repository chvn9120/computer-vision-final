import numpy as np
import pickle

from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.image import load_img, img_to_array
from keras.applications.vgg16 import (
    VGG16,
    preprocess_input,
)
from keras.models import Model


class ImageCaptioningModel:
    def __init__(self, model_path, tokenizer_path):
        self.model = load_model(model_path)
        self.VGG16 = VGG16()
        self.VGG16 = Model(inputs=self.VGG16.inputs, outputs=self.VGG16.layers[-2].output)

        with open(tokenizer_path, "rb") as tokenizer_file:
            self.tokenizer = pickle.load(tokenizer_file)

    def idx_to_word(self, integer):
        for word, index in self.tokenizer.word_index.items():
            if index == integer:
                return word
        return None

    # generate caption for an image
    def predict_caption(self, features, max_length=35):
        # add start tag for generation process
        in_text = "startseq"
        # iterate over the max length of sequence
        for i in range(max_length):
            # encode input sequence
            sequence = self.tokenizer.texts_to_sequences([in_text])[0]
            # pad the sequence
            sequence = pad_sequences([sequence], max_length)
            # predict next word
            yhat = self.model.predict([features, sequence], verbose=0)
            # get index with high probability
            yhat = np.argmax(yhat)
            # convert index to word
            word = self.idx_to_word(yhat)
            # stop if word not found
            if word is None:
                break
            # append word as input for generating next word
            in_text += " " + word
            # stop if we reach end tag
            if word == "endseq":
                break
        return in_text

    def extract_img_features(self, image):
        image = image.resize((224,224))
        image = img_to_array(image)
        image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
        image = preprocess_input(image)
        return self.VGG16.predict(image, verbose=0)
