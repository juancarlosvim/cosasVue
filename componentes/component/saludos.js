Vue.component('saludo', {
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>{{texto}}</h3>
    </div>
    `,
    data () {
        return {
            saludo: 'Hola desde vue',
            texto: 'texto'
        }
    }
})