const http = require('http')
const express = require('express')
const path = require('path')
const fs = require('fs')
const marked = require('marked')
const info = require('./info')
const app = express()
const rp = require('request-promise')

app.set('view engine', 'ejs') // set up ejs for templating
app.use('/', express.static(path.join(__dirname, 'static'))) // statics

// home
app.get('/', function(req, res) {
    rp(
        'https://raw.githubusercontent.com/DistributedObjectProtocol/dop/lite/README.md'
    ).then(htmlString => {
        req.params.content = marked(htmlString)
        res.render('pages/index', req.params)
    })
})

// redirects
app.get('/guide/javascript', function(req, res, next) {
    res.redirect('/guide/javascript/connecting-nodes')
})

// docs
app.get('/:type/:language/:doc', function(req, res) {
    req.params.language = req.params.language.toLowerCase()
    req.params.type = req.params.type.toLowerCase()
    // req.params.doc = req.params.doc.toLowerCase()
    var filepath = path.join(
        __dirname,
        'docs/' +
            req.params.type +
            '/' +
            req.params.language +
            '/' +
            req.params.doc +
            '.md'
    )
    if (fs.existsSync(filepath)) {
        var content = fs.readFileSync(filepath, 'utf8')
        req.params.info = info[req.params.language]
        req.params.content = marked(content)
        req.params.sidebar =
            req.params.type === 'transports'
                ? '../partials/sidebar-transports'
                : '../partials/sidebar-' +
                  req.params.type +
                  '-' +
                  req.params.language

        res.render('pages/docs', req.params)
    } else {
        console.log(
            '404',
            '/' +
                req.params.type +
                '/' +
                req.params.language +
                '/' +
                req.params.doc
        )
        res.render('pages/404')
    }
})

// transports
app.get('/transports', function(req, res) {
    res.render('pages/transports')
})

// any other
app.get('/*', function(req, res) {
    console.log('404', '/' + req.params[0])
    res.render('pages/404')
})

var port = 4444
var expressServer = http.createServer(app)
expressServer.listen(port, function() {
    console.log('http://localhost:' + port)
})

// var dop = require("dop")
// var listener = dop.listen({httpServer:expressServer})
// dop.onSubscribe(() => ({mola:'mazo'}))
// listener.on('connect', ()=>console.log('connect'))
// listener.on('disconnect', ()=>console.log('disconnect'))
// listener.on('close', ()=>console.log('close'))
