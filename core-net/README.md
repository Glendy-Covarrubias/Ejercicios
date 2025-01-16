# Descripción de la tarea
Este proyecto consiste en:
1. **Node.js/Python/.NET** (Selecciona uno o más grupos de ejercicios, según tu nivel de experiencia, puedes realizar el/los ejercicios con cualquier lenguaje de programación que se muestran, el que prefieres):
   - Ejercicio 3:
     - Desarrolla una API RESTful en ASP.NET Core que permita gestionar una lista de proyectos. Cada proyecto debe tener un `Id`, `Nombre`, `Descripción` y `Estado`.
     - Implementa validación de datos y manejo de excepciones.


# INSTRUCCIONES para instalar, configurar y ejecutar la aplicación
Pasos previos antes de correr la solución
- 1) Tener una instancia montada de BD `MS SQL Server / SQL Server`
     ![imagen00](https://github.com/user-attachments/assets/4eba23ef-d657-4bbf-ae5a-f8e6d708834a)
     ![imagen0](https://github.com/user-attachments/assets/027da399-1205-4a40-8e2b-431e2fa8dcca)


Pasos para correr la aplicación
- 1) Primer paso abrir en visual studio la solución core-net.sln
- 2) Borrar la carpeta de Migrations para asi poder crear con la migraciones tus tablas necesarias
- 3) Paso opcional: Verifica tu archivo de conexion appsettings.json y modifica si desea el Database
- 4) Crea una migración inicial: dotnet ef migrations add InitialCreate
- 5) Aplica la migración a la base de datos: dotnet ef database update
- 6) Si al ejecutar dotnet ef migrations add InitialCreate marca el siguiente error corregir porfavor "No se pudo ejecutar porque no se encontró el comando o archivo especificado. ......."
    deberas Instala la herramienta dotnet-ef : dotnet tool install --global dotnet-ef
    Si ya estaba instalada y quieres actualizarla, usa: dotnet tool update --global dotnet-ef
    En tu proyecto, asegúrate de que tienes el paquete necesario para usar migraciones: dotnet add package Microsoft.EntityFrameworkCore.Tools
    Verifica la instalación: dotnet ef --version
- 7) Crea la migración: dotnet ef migrations add InitialCreate (Omitir si no presenta nigun error y se corre bien desde el paso 4 y 5)
- 8) Aplica la migración: dotnet ef database update (Omitir si no presenta nigun error y se corre bien desde el paso 4 y 5)
- 9) Correr el proyecto: Por automático se abrir el navegador hacia swagger `https://localhost:7168/swagger/index.html`
    ![imagen2](https://github.com/user-attachments/assets/887b8ec4-6932-4ce1-b09a-dfd882a2dcaa)
    ![imagen1](https://github.com/user-attachments/assets/224f9473-5d36-4e2d-a1b8-4eaa0054b614)

Pudes consulta en esta URL el funcionamiento final de la app : https://www.awesomescreenshot.com/video/35596188?key=01f551776030c4b5807cf55b1d09f910



    
