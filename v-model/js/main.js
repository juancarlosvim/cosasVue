const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Hola mundo con Vue2',
        frutas: [
            {nombre: 'Pera', cantidad: 3},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Plátano', cantidad: 4},
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta (){
            
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0 
            })
        }
    },
   
});