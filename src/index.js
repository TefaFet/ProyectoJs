//integracion de dependencia
const express= require("express");
const morgan =require("morgan");
const exphbs = require("express-handlebars");
const path= require("path");
const{database} = require('./keys');

    
//inicio
const app=express();//aqui es para utlizar express

//Donde cargar los archivos estaticos
app.use(express.static('public'));

//configuraciones
app.set("port",process.env.PORT || 4000 );
app.set("views",path.join(__dirname,"views"));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));//se utiliza inicialmente en dev
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/partials',require('./routes/principal/menus'));
app.use('/ ',require('./routes/ultimaclase/alumnos'));

//2
app.use('/comentariado',require('./routes/Comentariado/Consumo'));

// ejemplo comentario
app.use('/ejemplo', require('./routes/ejemplo/comentariorouter'));

    
//proyecto

app.use('/Cocteleria', require('./routes/Cocteleria/Apreciacionrouter'));


//ruta principal
//app.use('/pedidos',require('./routes/pedidos/pedidos_route'));



//administrador
app.use('/Admin',require('./routes/Admin/resultadosrouter'));


//public,la vista que ve el usuario
app.use(express.static(path.join(__dirname,'public')));


//inicia el server
app.listen(app.get('port'),()=>{
    console.log('serve on port',app.get('port'));
});