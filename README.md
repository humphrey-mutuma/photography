<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/humphrey-mutuma/photography.git
$ yarn # or npm i
```

## project structure
```terminal
server/
   models/
   middlewares/
   routes/
   services/
   config/
   test/
   utils/
   app.js
   .env (to create .env, check [prepare your secret session])
client/
   public/
   src/
   package.json
  ...
.env
.gitignore
LICENSE
package.json
README.md
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://www.mongodb.com/atlas/database)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server running concurrently in different terminal session, in order to make them talk to each other or use concurrently npm package and set up a script in package.json file to run both servers simultaneously.

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(.env to connect to MongoDB)

``` .env contents
MONGODB_URI= //your mongoDB URI or MongoDB Atlas URI
PORT=
NODE_ENV=  // development || production
JWT_SECRET= // a jsonwebtoken secret 
```

```terminal
// in the root level
$ cd photography  //the root folder
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> .env
```

### Start

```terminal
$ cd photography  //go to the root folder
$ npm i       // npm install packages
$ npm run app // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

 ## Deploy Server to [Heroku](https://dashboard.heroku.com/)

 more docs coming soon ....
