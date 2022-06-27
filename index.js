'use strict'

//instanciando los objetos de la app
const {app, BrowserWindow} = require('electron')

//imprimiendo un mensaje de la consola antes de salir
app.on('before-quit',() => {console.log('Saliendo...')
})

//ejecutando ordenes cuando la app esta lista
app.on('ready',()=>
// creando una ventana
{let win = new BrowserWindow()
 
//detectando el cirre de ventana
win.on('close',()=>{
    win= null
    app.quit
})
})