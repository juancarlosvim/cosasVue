const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 3},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Plátano', cantidad: 4},
        ]
    }
});