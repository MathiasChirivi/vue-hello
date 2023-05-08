console.log("Benvenuto")

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: './img/04.webp'
      }
    }
  }).mount('#app')