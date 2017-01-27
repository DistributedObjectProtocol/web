var path = require('path')
var fs = require('fs')
var marked = require('marked')
var express = require('express')
var info = require('./info')
var app = express()


app.set('view engine', 'ejs') // set up ejs for templating
app.use('/', express.static(path.join(__dirname, 'static'))) // statics

// home
app.get('/', function (req, res) {
    res.render('pages/index')
})

// docs
app.get('/:type/:language/:doc', function (req, res) {
    req.params.language = req.params.language.toLowerCase()
    req.params.type = req.params.type.toLowerCase()
    // req.params.doc = req.params.doc.toLowerCase()
    var filepath = path.join(
        __dirname,
        'docs/'+req.params.type+'/'+req.params.language+'/'+req.params.doc+'.md'
    )
    if (fs.existsSync(filepath)) {
        var content = fs.readFileSync(filepath, 'utf8')
        req.params.info = info[req.params.language]
        req.params.content = marked(content)
        req.params.sidebar = (req.params.type === 'transports') ? 
            '../partials/sidebar-transports'
        :
            '../partials/sidebar-' + req.params.type + '-' + req.params.language; 
        res.render('pages/docs', req.params)
    }
    else
        res.render('pages/404')
})


// transports
app.get('/transports', function (req, res) {
    res.render('pages/transports')
})

var port = 4444;
app.listen(port, function () {
    console.log('port:', port)
})