const app = Vue.createApp({

    data() {
        return {

            titulo: "Mi banco con Vue.js",
            cantidad: 1000,
            enlace: "https://www.linkedin.com/in/agustin-jordi-rojas/",
            estado: false,
            servicios: ["transferencias", "pagos", "giros", "cheques", "deudas"],
            desactivar: false

        }
    },
    methods: {
        agregarSaldo() {
            //accedo a data con this
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('saldo en cero')
                
                return;
            }
        
            this.cantidad = this.cantidad - valor

        }
    },

    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        textMayus(){
            return this.titulo.toUpperCase()
        }
    }

})