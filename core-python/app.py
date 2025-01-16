from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from datetime import timedelta

app = Flask(__name__)

# Ruta principal
@app.route('/')
def home():
    return "Bienvenido a la API de productos"

# Configuración de JWT
app.config['JWT_SECRET_KEY'] = 'supersecretkey'  # Cambia esto por una clave secreta en producción
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
jwt = JWTManager(app)

products = []

@app.route('/login', methods=['POST'])
def login():
    print("Ruta /login llamada")  # Esto imprimirá un mensaje en la terminal
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username == 'user' and password == 'password':
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Bad username or password"}), 401

@app.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    return jsonify(products), 200

@app.route('/products/<int:id>', methods=['GET'])
@jwt_required()
def get_find_products(id):
    product = next((p for p in products if p['id'] == id), None)
    
    if not product:
        return jsonify({"msg": "Product not found"}), 404
    
    return jsonify(product), 200

@app.route('/products', methods=['POST'])
@jwt_required()
def add_product():
    product_data = request.json
    product = {
        'id': len(products) + 1,
        'name': product_data.get('name'),
        'price': product_data.get('price')
    }
    products.append(product)
    return jsonify(product), 201

@app.route('/products/<int:id>', methods=['PUT'])
@jwt_required()
def edit_product(id):
    product_data = request.json
    product = next((p for p in products if p['id'] == id), None)

    if not product:
        return jsonify({"msg": "Product not found"}), 404

    product['name'] = product_data.get('name', product['name'])
    product['price'] = product_data.get('price', product['price'])
    
    return jsonify(product), 200

@app.route('/products/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_product(id):
    product = next((p for p in products if p['id'] == id), None)
    if product:
        products.remove(product)
        return jsonify({"msg": "Product deleted"}), 200
    return jsonify({"msg": "Product not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
