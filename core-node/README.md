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
    core-node-1
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
    core-node-2.png

 - Paso 2) Guardar ese token obtenido en la respuesta para poder consultar las demas URLS


URLS API
 - GetAllTasks
    Get
    http://localhost:3000/api/tasks
    Bearer Token {token}
    https://prnt.sc/2cPxaViPwVvI
    core-node-3.png

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
    core-node-4.png

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
    core-node-5.png

- DeleteTask
    Delete
    http://localhost:3000/api/tasks/3
    Bearer Token {token}
    https://prnt.sc/V2HJ0DqhDU7S
    core-node-6.png

- GetTask
    Get
    http://localhost:3000/api/tasks/2
    Bearer Token {token}
    https://prnt.sc/Ix3o-BwUutBG
    core-node-7.png


