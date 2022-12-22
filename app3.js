const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome in the Home Page')
    }if(req.url === '/about'){
        res.end('Hi There it about us')
    }else{
        res.end(`
            <h1> No Content Here </h1>
            <p>Sorry there's no Content here </p>        
            <a href='/'>To HOME </a>
        `)
    }

})
server.listen(5000,)