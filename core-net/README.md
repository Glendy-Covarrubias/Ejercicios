# Descripción de la tarea
Este proyecto consiste en:
1. **Node.js/Python/.NET** (Selecciona uno o más grupos de ejercicios, según tu nivel de experiencia, puedes realizar el/los ejercicios con cualquier lenguaje de programación que se muestran, el que prefieres):
   - Ejercicio 3:
     - Desarrolla una API RESTful en ASP.NET Core que permita gestionar una lista de proyectos. Cada proyecto debe tener un `Id`, `Nombre`, `Descripción` y `Estado`.
     - Implementa validación de datos y manejo de excepciones.


# INSTRUCCIONES para instalar, configurar y ejecutar la aplicación
Pasos previos antes de correr la solución
    - Tener una instancia montada de BD `MS SQL Server / SQL Server`
    imagen00
    imagen0

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
    imagen2
    imagen1