import torch
from flask import Flask, render_template, request, jsonify, url_for, send_from_directory
import numpy as np
from flask_restful import reqparse, abort, Api, Resource
from keras.models import load_model
from utilities_digit_recognize import predict_digit, get_image
import fastai
from fastai import *
from fastai.vision import *
import timm
import os
from utilities_aptos import save_image, get_heatmap
from utilities_skin import *
from flask_cors import CORS

app = Flask(__name__, static_url_path='/heatmap')
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["CLIENT_IMAGES"] = "/home/rishabh/PycharmProjects/Medidoc/heatmap"
learner = load_learner('model').to_fp32()
print('Model Loaded')

# def options (self):
#     return {'Allow' : 'POST' }, 200, \
#     { 'Access-Control-Allow-Origin': '*', \
#       'Access-Control-Allow-Methods' : 'PUT,GET,POST,OPTIONS' }
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/aptos/", methods=['POST'])
def predict_pothole():
    # load model
    # learn = load_learner('model').to_fp32()

    if request.method == 'POST':
        name = request.get_json()
        image_url = name['url']
        print(image_url)
        save_image(image_url)
        ans = learner.predict(open_image("img.png"))
        ans = ans[1].item()
        if ans==1 :
            my_prediction = "Pothole Found"
        else :
            my_prediction = "Normal Road"
        print(my_prediction)

        img = open_image("img.png")
        get_heatmap(learn_resnet, img, type='aptos')
        os.remove("img.png")
        url_hm = url_for('static', filename='output_heat_map.png')
        print(url_hm)

    return jsonify({'result': my_prediction})



@app.route("/get-image/<image_name>")
def get_image(image_name):
    try:
        return send_from_directory(app.config["CLIENT_IMAGES"], filename=image_name, as_attachment=True)
    except FileNotFoundError:
        abort(404)

if __name__ == '__main__':
    app.run(host="10.42.0.1", port=5000, debug=True)