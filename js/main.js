console.log("Benvenuto")

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        orangeTitle: "orangered secondaClasse",
        nome:"",
        cognome:"",
        image: './img/04.webp',
        dimensionImg: 'dimensionImg',
        }
      },
      methods:{
        btnClick(){
            this.orangeTitle = "green";
        }
    }
  }).mount('#app')