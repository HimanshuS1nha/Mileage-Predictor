from flask import Flask, request
from joblib import load
from pipeline import pipeline

app = Flask(__name__)
model = load("MpgPredictor.joblib")


def predict_mpg(labels: list):
    labels_array = pipeline.transform([labels])
    predicted_value = model.predict(labels_array)
    return str(predicted_value[0])


@app.post("/api/predict")
def predict():
    data = request.get_json()
    list_from_data = [data['cylinders'], data['displacement'], data['horsepower'],
                      data['weight'], data['acceleration'], data['modelYear'], data['origin']]
    predicted_value = predict_mpg(list_from_data)
    return {"prediction": predicted_value}


@app.get("/")
def home():
    return "Welcome to mileage predictor app"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
