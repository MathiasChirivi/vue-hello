console.log("Benvenuto")

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        orangeTitle: "orangered",
        image: './img/04.webp',
      }
    }
  }).mount('#app')