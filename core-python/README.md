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
      Metodo: Post
      Url: http://127.0.0.1:5000/login
      body
       {
        "username": "user",
        "password": "password"
       }
      Nota: Tomar el token que devuelve para las demas consultas de la API que sera el Bearer Token
         - Consulta el resulto de la API: https://prnt.sc/bIItgcpXxD3d
         - ![otro1](https://github.com/user-attachments/assets/fd757f06-e821-45cf-837b-64c9db32f1f4)


URL API

- GetAllProducts
     Metodo: Get
     Url: http://127.0.0.1:5000/products
     Authorization: Bearer Token {{token}}
        - Consulta el resulto de la API: https://prnt.sc/G76v4OIevge3
        ![getall0](https://github.com/user-attachments/assets/6ffadc12-f7d7-499c-9db0-1c523fbb512e)
        ![getll](https://github.com/user-attachments/assets/6dc9d66d-9988-4775-8dd9-5e6c4421007b)


- CreateProduct
     Metodo: Post
     Url: http://127.0.0.1:5000/products
     Authorization: Bearer Token {token}
     body:
       {
          "name": "Teclado",
          "price": 40
       }
        ![create](https://github.com/user-attachments/assets/bbc5818b-2a0e-487c-ba85-f23e903562d6)


- DeleteProduct
     Metodo: Delete
     Url: http://127.0.0.1:5000/products/2
     Authorization: Bearer Token {token}
        - Consulta el resulto de la API: https://prnt.sc/fe-2N23rJ5YV
        ![delete](https://github.com/user-attachments/assets/0167b8b0-b306-47ed-a70b-61991959414d)


- EditProduct
     Metodo: Put
     URL: http://127.0.0.1:5000/products/2
     Authorization: Bearer Token {token}
     body:
       {
          "id": 1,
          "name": "Teclado edit",
          "price": 40
      }
        - Consulta el resulto de la API: https://prnt.sc/67I-o7QdVFwU
        ![editt](https://github.com/user-attachments/assets/69e166e8-0fb8-42cf-ae49-7273d8df26eb)


