// import 'babel-polyfill'
import Koa from 'koa'
import mongoose from 'mongoose'
import middleware from 'koa-router' // middleware for routing
import logger from 'koa-logger' // middleware for logging pretty messages
import parser from 'koa-bodyparser' // middleware for accesing json from ctx.body
import routing from './routing' // A separate file with my routes

// Mongoose init code
mongoose.connect('mongodb://localhost/testapp')
mongoose.connection.on('error', console.error)

// Applies all routes to the router
const router = routing(middleware())
// Creates the application
const app = new Koa()

app.use(async (ctx, next) => ctx.body = 'Hello world Koa Oce')

app
  .use(logger()) // logs information
  .use(parser()) // Parsers json body requests
  // A universal interceptor, that prints the ctx each tome a request
  // is made on the server
  .use(async (ctx, next) => {
    console.log('CTX', ctx);
    return await next()
  })
  .use(router.routes()) // Assign routes
  .use(router.allowedMethods())

// Start the application
app.listen(5050, () => console.log('Listening on port 5050'))

export default app;
