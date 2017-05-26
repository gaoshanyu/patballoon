/**
 * Created by raniys on 5/18/17.
 */

require('dotenv').config()

const favicon = require('koa-favicon')
const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const csrf = require('koa-csrf')
const session = require('koa-session')
const serve = require('koa-static')
const router = require('./routes/index')

const app = new Koa()
app.keys = [process.env.APP_KEY]

app.use(views(__dirname + '/src', {
  default: 'html'
}))

// middle wares
app.use(favicon(__dirname + './favicon.ico'))
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(session(app))
app.use(new csrf())

app.use(serve(__dirname + '/dist'))


// routes

app.use(router.routes(), router.allowedMethods())
router.use('/service-worker.js', serve('./dist/service-worker.js'))

// error handler

onerror(app)

app.listen(process.env.APP_PORT)
console.info('Starting server at: http://localhost:' + process.env.APP_PORT)
