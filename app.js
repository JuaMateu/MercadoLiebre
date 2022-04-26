const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//static
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));
// views
const views = path.join(__dirname, 'views/')
// html
const home = 'home.html'
// http routes
const httpindex = '/'
const httpHome = '/home'

//ruteos a paginas de index y heroes
app.get(httpindex, (req, res) => {
    res.sendFile(path.join(views, home))
})
app.get(httpHome, (req, res) => {
    res.sendFile(path.join(views, home))
})
app.listen(port, () => {
    console.log(`Heroes app listening at http://localhost:${port}`)
    console.log(__dirname)
})