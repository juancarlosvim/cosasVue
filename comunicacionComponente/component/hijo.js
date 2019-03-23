Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success text-white">
        <h4>Componente Hijo</h4>
        <h5>{{numero}}</h5>
       
    </div>
    `,
    props: ['numero']
    
})