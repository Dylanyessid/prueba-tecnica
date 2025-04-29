
# LIBRARY MANAGEMENT API 📕

Aplicación Backend para la gestión de libros, copias y préstamos (Prueba técnica)

## Instalación ⚙️

Clona el repositorio e instala las librerías con NPM

```bash
  npm install 
```

Creas un archivo .env con las variables:

```bash
    PORT= #Puerto de la app backend
    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    DB_DIALECT=mysql #Ya que el proyecto se requería en MySQL

```

Una vez hecho, probar con el comando:

```bash
  npm run dev 
```

## Decisiones técnicas 💻

### Código 🔧

Se eligió ExpressJS como framework de backend con NodeJS y TypeScript. Esto, ya que permite una construcción flexible, minimalista de un backend sin demasiado "código inicial o boilerplate"

Se eligió Zod para validar la obtención de las variables de entorno, fundamental para una correcta operación de la app

Se eligió class-validator y class-transformer para validar los datos entrantes a los endpoints. También para esto se implementó un middleware para validar los datos de los endpoints y reducir el riesgo de errores

Se eligió swagger para la documentación de endpoints, pues, permite comentar y detallar detalles como parámetros de petición, de cuerpo, y de respuesta rápidamente.

### Modelado BD 💽

#### Modelo ERD

![ERD](https://res.cloudinary.com/ds5cm1lds/image/upload/v1745812765/erd_mzw1ro.png)

- Se decidió colocar una tabla de autores, y crear una tabla intermedia ente autores y libros, ya que permite flexibilidad para libros que puedan tener más de un autor.

- Se implementó soft delete (Un mecanismo que oculta datos, simulando elimnar registros, pero no los elimina realmente) con el campo deleted_at, pues, es una forma recomendada para manejar la eliminación de registros, ya que se pueden recuperar datos, conservar para  revisiones o auditorías, etc.

- Se conservaron los campos created_at y updated_at, pues pueden ser útiles si se llegara a requerir consultar fechas de este tipo
