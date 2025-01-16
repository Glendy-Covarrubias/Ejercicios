# Descripción de la tarea
Este proyecto consiste en:
1. **Node.js/Python/.NET** (Selecciona uno o más grupos de ejercicios, según tu nivel de experiencia, puedes realizar el/los ejercicios con cualquier lenguaje de programación que se muestran, el que prefieres):
   - Ejercicio 2:
     - Crea una API utilizando Flask/Django que permita gestionar una lista de productos. Implementa endpoints para agregar, listar y eliminar productos.
     - Asegura la API con autenticación basada en tokens.

# INSTRUCCIONES para instalar, configurar y ejecutar la aplicación

Pasos para correr la API
 - python app.py

Pasos para usar la API
 - Primero que nada antes de probar las demas URL de la API tienes primero que Authenticarte
 Post
 http://127.0.0.1:5000/login
 body
 {
  "username": "user",
  "password": "password"
 }
    - Consulta el resulto de la API: https://prnt.sc/bIItgcpXxD3d

URL API
 - GetAllProducts
 Get
 http://127.0.0.1:5000/products
    - Consulta el resulto de la API: https://prnt.sc/G76v4OIevge3

 - CreateProduct
 Post
 http://127.0.0.1:5000/products
 Bearer Token {token}
 body
 {
    "name": "Teclado",
    "price": 40
 }

 - DeleteProduct
 Delete
 http://127.0.0.1:5000/products/2
 Bearer Token {token}
    - Consulta el resulto de la API: https://prnt.sc/fe-2N23rJ5YV


 - EditProduct
 Put
 http://127.0.0.1:5000/products/2
 Bearer Token {token}
 body
 {
    "id": 2,
    "name": "Teclado edit",
    "price": 40
}
   - Consulta el resulto de la API: https://prnt.sc/67I-o7QdVFwU

