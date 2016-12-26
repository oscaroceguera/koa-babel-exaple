import 'babel-polyfill'
import Koa from 'koa'

// create the app from the ES6 class
const app = new Koa()

app.use(async (ctx, next) => ctx.body = 'Hello world Koa Oce')

// Start the application
app.listen(5050, () => console.log('Listening on port 5050'))

export default app;
