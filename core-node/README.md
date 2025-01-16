# Descripción de la tarea
Este proyecto consiste en:
1. **Node.js/Python/.NET** (Selecciona uno o más grupos de ejercicios, según tu nivel de experiencia, puedes realizar el/los ejercicios con cualquier lenguaje de programación que se muestran, el que prefieres):
   - Ejercicio 1:
     - Desarrolla una API RESTful sencilla que permita crear, leer, actualizar y eliminar (CRUD) registros de "Tareas" (`tasks`). Cada tarea debe tener un `id`, `titulo`, `descripcion` y `estado`.
     - Implementa validación de datos utilizando middleware.

# INSTRUCCIONES para instalar, configurar y ejecutar la aplicación

Pasos previos
 - Paso 1) Tener Node.js y npm (Node Package Manager) instalados en tu máquina.
    Ejemplo: https://prnt.sc/DJm_e_JPyb0v
 - Paso 2) Tener levantando, montado una nueva Conexion a base de datos `MS SQL Server / SQL Server ajustes de conexión`
    https://prnt.sc/3Ph8m58Ln59U
    ![core-node-1](https://github.com/user-attachments/assets/9768358b-a2d9-449e-b81c-8df4037d4d3e)

 - Paso 3) Si tienes PostMan podrias probar desde ahi

Pasos para correr la aplicación
 - Paso 1) npm install
 - Paso 2) npm run dev
 - Paso 2) Para detener el proyecto es ctrl + c luego sale una pregunta y ponemos S

Pasos para usar la aplicación
 - Paso 1) Antes de probar todas las URL de la api debe primero sacar el token de Authentication : http://localhost:3000/api/tasks/login
    agregar en el body : 
    {
        "username": "Landy",
        "password": "Landy123"
    }
    https://prnt.sc/4ox52AIpplMj
    ![core-node-2](https://github.com/user-attachments/assets/7756c915-3596-49ff-9c82-c0a69e7c75a4)

 - Paso 2) Guardar ese token obtenido en la respuesta para poder consultar las demas URLS


URLS API
 - GetAllTasks
    Get
    http://localhost:3000/api/tasks
    Bearer Token {token}
    https://prnt.sc/2cPxaViPwVvI
    ![core-node-3](https://github.com/user-attachments/assets/2c646861-2aee-4c6d-9e5a-d1c811dc9cbc)

- CreateTask
    Post
    http://localhost:3000/api/tasks
    Bearer Token {token}
    Body
    {
        "title": "Tarea de Documentación",
        "status": "Done",
        "description": "Documentando"
    }
    https://prnt.sc/Y8_qT1iMTwqc
    ![core-node-4](https://github.com/user-attachments/assets/93172004-3f68-4f00-b90b-44a2ef9dbb5b)

- EditTask
    Put
    http://localhost:3000/api/tasks/2
    Bearer Token {token}
    Body
    {
        "title": "Tarea 2 editado",
        "status": "Stopped",
        "description": "Editando registro"
    }
    https://prnt.sc/H_BgytfJEO4R
    ![core-node-5](https://github.com/user-attachments/assets/1d8ac6bf-3107-4a2e-a05c-3510e9c78bd9)


- DeleteTask
    Delete
    http://localhost:3000/api/tasks/3
    Bearer Token {token}
    https://prnt.sc/V2HJ0DqhDU7S
    ![core-node-6](https://github.com/user-attachments/assets/acdb1e63-5628-41ab-835c-55af5a7f6f5e)


- GetTask
    Get
    http://localhost:3000/api/tasks/2
    Bearer Token {token}
    https://prnt.sc/Ix3o-BwUutBG
    ![core-node-7](https://github.com/user-attachments/assets/a8eda700-1bdf-40c9-b38e-cfd7f8251839)


Adicional captura de mi BD y de mi Docker

![core-node-9](https://github.com/user-attachments/assets/099353c8-9b0c-4cb9-ac21-ed4e28730abd)
![core-node-8](https://github.com/user-attachments/assets/d4eede3f-3233-46c7-bfc8-459a45af92c6)

