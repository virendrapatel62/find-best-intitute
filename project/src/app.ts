import express , {Application, Request, Response} from 'express'

let app: Application = express();

"localhost:3000"
app.get('/' , function(reqest : Request , response : Response){
    response.send('WellCOme to Application')
})

app.get('/users' , function(reqest : Request , response : Response){
    let object = ['user 1' , 'user 2' , 'user 3'];
    response.json(object)
})

let port : number = 3000;
app.listen(port , ()=>{
    console.log('listing on port ' , port);
})