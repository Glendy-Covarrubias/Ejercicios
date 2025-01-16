# Examen Fullstack para Evaluación de Candidatos

## Objetivo del Examen

Evaluar las competencias técnicas de los candidatos en desarrollo fullstack, mediante una combinación de preguntas teóricas, ejercicios prácticos y un proyecto pequeño.

## Tecnologías a Evaluar

- **Frontend**:
  - React
  - Redux

- **Backend**:
  - Node.js
  - Python
  - .NET

## Áreas de Conocimiento a Evaluar

1. **Frontend**:
   - Diseño y desarrollo de interfaces de usuario.
   - Manejo del estado de la aplicación.
   - Consumo y manejo de APIs.
   - Arquitectura de componentes.

2. **Backend**:
   - Diseño y desarrollo de APIs.
   - Gestión y manipulación de bases de datos.
   - Implementación de autenticación y autorización.
   - Arquitectura de servidor.

3. **Arquitectura de Archivos**:
   - Organización eficiente de la estructura de carpetas y archivos en proyectos frontend y backend.
   - Uso de patrones de diseño y buenas prácticas para mantener el código limpio y escalable.

## Formato del Examen

El examen se divide en tres secciones:

1. **Preguntas Teóricas**: Evaluar el conocimiento conceptual y la comprensión de las tecnologías y prácticas.
2. **Ejercicios Prácticos**: Medir la capacidad para implementar soluciones específicas utilizando las tecnologías seleccionadas.
3. **Proyecto Pequeño**: Demostrar la habilidad para integrar frontend y backend en una aplicación funcional.

### 1. Preguntas Teóricas

#### Frontend

1. **React**:
   - Explica el ciclo de vida de un componente en React.
    El ciclo de vida de un componente en React, específicamente en componentes de clase, se divide en tres fases principales: 
    Montaje, Actualización y Desmontaje. Cada una representa una etapa en la vida del componente y tiene métodos específicos asociados.

    Montaje: Es la etapa en la que el componente se crea y se inserta en el DOM. 
    Los métodos principales utilizados en esta fase son: constructor(),componentDidMount(), render().

    Actualización: Ocurre cuando hay un cambio en las props o el estado del componente. Esto puede llevar a un re-renderizado. 
    Los métodos clave son: shouldComponentUpdate(), componentDidUpdate(), render().

    Desmontaje: Esta fase se da cuando el componente se elimina del DOM. 
    El método principal es: componentWillUnmount() evita las fugas de memoria y mejorar el rendimiento.
      
   - ¿Qué son los hooks en React y para qué se utilizan? Menciona al menos tres hooks comunes.
    Los hooks permite usar características como el manejo del estado y el ciclo de vida en componentes funcionales, 
    sin necesidad de escribirlos como componentes de clase.
    Los hooks simplifican la lógica de los componentes, facilitando su reutilización y organización.
    Tres de los hooks más comunes son:
      useState: Se utiliza para gestionar el estado en componentes funcionales. Permite declarar variables de estado y actualizarlas de forma reactiva.
      useEffect: Con el useEffect se puede manejar la lógica de los métodos de ciclo de vida como un componentDidMount, componentDidUpdate y componentWillUnmount. Permite asi manejar efectos en componentes funcionales, como la obtención de datos y manipulación del DOM.
      useContext: Sirve para usar datos compartidos entre varios componentes sin tener que pasarlos como propiedades de un componente a otro en cada nivel de la aplicación.

2. **Redux**:
   - ¿Qué es Redux y cuál es su propósito en una aplicación React?
    Redux es una libreria de Javascript para usar en un ecosistema de React para gestionar el estado de la aplicación de forma centralizada y ligera.
    Su proposito es ayudar a mejorar la rapidez de llegar a un estado que se usa en otro nivel de jerarquia de un componente y asi facilitar el manejo de 
    datos que necesitan ser compartidos entre múltiples componentes, eliminando la necesidad de pasar información manualmente a través de la jerarquía de componentes.
    Permite que se desarrolle con estado centralizado dejando por un lado el tener que pasar de un componente a otro para obtener o llegar a un valor de un estado que se pretende usar.
   - Describe los conceptos de *actions*, *reducers* y *store* en Redux.
    Actions: Objeto que contiene la información de lo que va ejecutar para realizar el cambio en el estado de la aplicación. Se hace el uso de la
    función dispatch() para enviar al store.
    Redurcers: Son funciones que esperan 2 parametros el estado actual y el action. Pepara la actualización de los valores del estado a una nueva version.
    Store: Objecto centralizado que se define para almacenar todo el estado de la aplicación. Es como una BD, caja, almacen donde se guarda todo el estado de una aplicación.

#### Backend

1. **Node.js/Python/.NET** (Selecciona una o más de las siguientes tecnologías, según tu nivel de experiencia):
   - **Node.js**:
     - ¿Qué es el Event Loop en Node.js y cómo funciona?
     - Explica la diferencia entre `require` y `import` en Node.js.
     La diferencia entre "require" es mas tradicional y carga los modulos cuando se ejecuta el código e "import" es mas actual lo cual implica que se tenga que realizar una configuración extra en Node.js y tambien este prepara los modulos antes de se ejecute el código, lo que permite la optimización. 
   - **Python**:
     - ¿Qué es un **decorador** en Python y cómo se utiliza?
     - Explica la diferencia entre **multiprocesamiento** y **multihilo** en Python.
   - **.NET**:
     - Explica el ciclo de vida de una aplicación ASP.NET Core.
     El ciclo de vida empieza desde que inicia y se ejecuta y termina la aplicación, con las solicitudes del HTTP son procesadas por el
     servidor, etapas:
      Inicio de la aplicación
      Creación de objetos
      Creación de la aplicación HTTP
      Desechar
      Fin de la aplicación
      Destrucción de la aplicación
     - ¿Qué son los *Middleware* en ASP.NET Core y cómo se utilizan?
     Es un clave (scret) que permite manipultar una petición HTTP, Actua en cada request que llega a la aplicación
     para realizar como una guardia de lo que se va hacer o no se va hacer.
     Su uso va ser primero crear la configuración del Middleware, luego se define que ara el Middleware y por ultimo decide que se ejecuta.
     Son utilies para temas de seguridad

2. **Arquitectura de Archivos**

   1. ¿Cuáles son las mejores prácticas para organizar la estructura de carpetas en una aplicación React?
    Existe varias formas de organizar el proyecto de React sin embargo  
    Estructura básica y modular : Por funcionalidades o características
    src/
      assets/
      components/
        Card/
        Button
      pages/
        Home/
        Contac/
      services/
        User/
        Branch/
      store/
        actios/
      utils/
        formatMoney.js
      App.js
    
   2. Describe una estructura de directorios ideal para un proyecto fullstack que utiliza React en el frontend y alguna de las siguientes tecnologías en el backend: Node.js, Python o .NET.
   Opción A) Podria ser el uso de separar el Frontend del Backend
   client <--- Contendra todo el proyecto Frontend (React)
   core <--- Contendra todo el proyecto Backend (Node.js, Python, .Net)
   Opción B) A su vez igual podria aplicarse el manejo de microfrontend y microservicios: Que es separar en pedazos
   mas pequeños los diferentes desarrollos que se comunican entre si
   Opción C) Todo junsto
   File/
    Client/
      public/
      src/
        assets/
        components/
        pages/
        services/
        store/
        utils/
        App.js
        index.js
      package.json
      webpack.config.js
      node_modules
    Core/
        Controllers/
        Models/
        Services/
        Repositories/
        DTOs/
        Middleware/
        Helpers/
        bin/
        Database/
        Migrations/
        Seeders/
        Scripts/
    appsettings.json
    Startup.cs
    Program.cs
    Backend.csproj
    README.md
    .gitignore

### 2. Ejercicios Prácticos

#### Frontend

1. **React**:
   - Crea un componente funcional llamado `UserList` que obtenga datos de una API y muestre una lista de usuarios con sus nombres y correos electrónicos.
   - Implementa una funcionalidad de búsqueda que permita filtrar los usuarios por nombre.
   Este ejercicio lo cree como `my-app-react` https://github.com/Glendy-Covarrubias/Ejercicios/tree/master/my-app-react

2. **Redux**:
   - Configura un store de Redux para manejar el estado de autenticación de un usuario.
   - Crea acciones y reducers para iniciar sesión y cerrar sesión.
   Este ejercicio lo cree como `redux-app` https://github.com/Glendy-Covarrubias/Ejercicios/tree/master/redux-app

#### Backend

1. **Node.js/Python/.NET** (Selecciona uno o más grupos de ejercicios, según tu nivel de experiencia, puedes realizar el/los ejercicios con cualquier lenguaje de programación que se muestran, el que prefieres):
   - Ejercicio 1:
     - Desarrolla una API RESTful sencilla que permita crear, leer, actualizar y eliminar (CRUD) registros de "Tareas" (`tasks`). Cada tarea debe tener un `id`, `titulo`, `descripcion` y `estado`.
     - Implementa validación de datos utilizando middleware.
     Este ejercicio lo cree como `core-node` https://github.com/Glendy-Covarrubias/Ejercicios/tree/master/core-node
   - Ejercicio 2:
     - Crea una API utilizando Flask/Django que permita gestionar una lista de productos. Implementa endpoints para agregar, listar y eliminar productos.
     - Asegura la API con autenticación basada en tokens.
     Este ejercicio lo cree como `core-python` https://github.com/Glendy-Covarrubias/Ejercicios/tree/master/core-python
   - Ejercicio 3:
     - Desarrolla una API RESTful en ASP.NET Core que permita gestionar una lista de proyectos. Cada proyecto debe tener un `Id`, `Nombre`, `Descripción` y `Estado`.
     - Implementa validación de datos y manejo de excepciones.
     Este ejercicio lo cree como `core-net` https://github.com/Glendy-Covarrubias/Ejercicios/tree/master/core-net

2. **Arquitectura de Archivos**

   1. Reestructura el siguiente proyecto desorganizado para mejorar su mantenibilidad y escalabilidad. Proporciona una explicación de los cambios realizados.

      ```plaintext
      /src
        /components
          Header.js
          Footer.js
        App.js
        index.js
        utils.js
        api.js
        styles.css
      ```
      /src
        /components/
          /Header/
            Header.js
            Header.css
          /Footer/
            Footer.js
            Footer.css
        /services/
          api.js
        /styles/
          index.js
        /utils/
          utils.js
        /assets/
          styles.css
        App.js
        index.js


### 3. Proyecto Pequeño

**Descripción del Proyecto**:

Desarrolla una aplicación web llamada **"Task Manager"** que permita a los usuarios gestionar sus tareas diarias. La aplicación debe incluir las siguientes características:

#### Frontend

- **Interfaz de Usuario**:
  - Página de inicio que muestre una lista de tareas.
  - Formulario para agregar nuevas tareas con campos de `titulo` y `descripcion`.
  - Opciones para editar y eliminar tareas existentes.
  - Filtro para mostrar tareas por estado (*Pendiente*, *En Progreso*, *Completada*).

- **Estado de la Aplicación**:
  - Utiliza Redux para manejar el estado global de las tareas.
  - Implementa acciones para agregar, actualizar y eliminar tareas.

Aqui se encuentra **RESUELTO** el proyecto que use para el Frontend del **"Task Manager"**
https://github.com/Glendy-Covarrubias/client-task-manager

#### Backend

- **API**:
  - Endpoints para gestionar tareas (CRUD).
  - Autenticación de usuarios para proteger las rutas de la API.
  
- **Base de Datos**:
  - Usa una base de datos relacional (como PostgreSQL) o NoSQL (como MongoDB) para almacenar las tareas.
  - Define el esquema necesario para almacenar la información de las tareas y usuarios.

Aqui se encuentra **RESUELTO** el proyecto que use para el Backend del **"Task Manager"**
https://github.com/Glendy-Covarrubias/core-task-manager


#### Arquitectura y Buenas Prácticas

- Organiza el proyecto con una estructura de carpetas clara y modular tanto en el frontend como en el backend (Node.js, Python o .NET).
- Aplica patrones de diseño y buenas prácticas para asegurar que el código sea limpio y escalable.
- Documenta brevemente las decisiones arquitectónicas y cualquier configuración especial utilizada.
      - Se decidió separar el proyecto backend del frontend para lograr una mayor flexibilidad y escalabilidad en el desarrollo. Esta separación permite que ambos componentes evolucionen de forma independiente,     facilitando la incorporación de nuevas tecnologías o funcionalidades sin interferir entre sí. Por último, esta arquitectura facilita la integración con otros servicios y plataformas, aumentando la adaptabilidad del sistema a futuras necesidades del negocio.

#### Entrega

- Incluye un archivo `README.md` con instrucciones para instalar, configurar y ejecutar la aplicación.
- Opcional: Implementa pruebas básicas para componentes frontend y endpoints backend.

## Instrucciones para la Entrega

- Los candidatos dispondrán de **48 horas** para completar y entregar el examen.
- No hay restricciones en el uso de documentación, internet u otros recursos durante el examen.
- La entrega se realizará a través de un repositorio en GitHub, un archivo ZIP del proyecto o cualquier otro formato que el candidato considere adecuado.
- No es necesario contestar en todas las tecnologías backend que se muestran, puedes elegir las que domines. Recuerda que el objetivo es evaluar tus conocimientos y habilidades, no el nivel de experiencia de las tecnologías.

## Pautas Adicionales

- **Calidad del Código**: Se evaluará la limpieza, organización y uso de buenas prácticas en el código.
- **Funcionalidad**: La aplicación debe cumplir con todos los requisitos funcionales especificados.
- **Usabilidad y Diseño**: Se valorará una interfaz de usuario intuitiva y agradable.
- **Documentación**: Incluir una documentación clara sobre cómo correr y utilizar la aplicación.
- **Innovación**: Se considerará positivamente la implementación de funcionalidades adicionales que mejoren la aplicación.

---

Buena suerte. ¡Esperamos ver tus mejores proyectos!
