<template>
    <div v-if="show" :style="{ backgroundColor: bgColor }" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bgColor: {
        type: String,
        default: '#4CAF50' // Color por defecto o el que desees
      }
    },
    data() {
      return {
        show: false,
        message: ''
      };
    },
    methods: {
      showNotification(message) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    }
  };
  </script>
  
  <style scoped>
  .notification {
    z-index: 1000;
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  </style>