Movie D3 es una App responsive que muestra películas y series.

Al ingresar a la app pide email y contraseña, ambos campos obligatorios. En caso de poner datos incorrectos, muestra un alerta con los siguientes datos para acceder:\

Email: 'challenge@alkemy.org'.\
Password: 'react'.\

Se guarda Token en el localstorege.\

Redirige a la "Home" en donde se visualizan las películas y series mas populares con opción de guardar en favoritos, un buscador que filtra por título y una sección en donde muestra los trailers de los estrenos.

Página de 'Películas' y 'Series' en donde posee un buscador que filtra por título, con paginación.

Página de 'Favoritos', se visualizan los favoritos guardados, aquí se pueden eliminar. Todas estas acciones son guardadas en el localstorage.

Cierre de sesion eliminando Token del localstorage.\


Dependencias:\
.Axios.\
.Redux.\
.React-router-dom\
.React bootstrap.\
.Sweet alert 2.\
.React-lazy-load-image\
.React-router-transition\

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Skeleton Componente

Componente para dar feedback al usuario cuando se esté realizando la carga de contenido.

El componente Skeleton espera recibir por props dos objetos. 'skeletonSize' con sus propiedades "width", "heigth" y "radius" y 'skeletonContainer' con sus propiedades "width", "height", "justifyContent", "alignItems", "display", "position" cuyos valores deben ser iguales a las del contenido que se desea reemplazar.

Valores para radius en cada caso de contenido a reemplazar:
.-Texto: se recomienda no pasar ningun valor
.-Avatar: utilizar el valor 50%
.-Título: utilizar el valor 5px

Forma de uso:

    const sizeSkeleton = { width: '150px', height: '150px', radius: '50%' }
    const containerSkeleton: { width: '240px', height: '350px',justify: 'center', align:'center' },

    {loading ?
    <Skeleton skeletonSize={sizeSkeleton} skeletonContainer={containerSkeleton}/>
    :
    <img src={data.img} alt="img"></img>
    }