from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the model
model_path = os.path.join(os.path.dirname(__file__), 'co2_model.pkl')
try:
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
except FileNotFoundError:
    model = None
    print("Warning: co2_model.pkl not found. Please run the notebook to generate it.")

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    try:
        data = request.get_json()
        
        # Features specified by user: 
        # 1. Comb Fuel, 2. City Fuel, 3. Hwy Fuel, 4. Engine Size
        features = [
            float(data['fuel_comb']),
            float(data['fuel_city']),
            float(data['fuel_hwy']),
            float(data['engine_size'])
        ]
        
        prediction = model.predict(np.array([features]))
        return jsonify({'prediction': float(prediction[0])})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    # Use the PORT environment variable if available (required for Render)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
