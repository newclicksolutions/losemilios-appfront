<template>
    <div class="red-dot" v-if="isVisible" ref="redDot"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      startAnimation() {
        this.isVisible = true;
        this.animateRedDot();
      },
      animateRedDot() {
        const redDot = this.$refs.redDot;
  
        // Obtén las coordenadas iniciales en el centro de la pantalla
        const startX = window.innerWidth / 2 - redDot.clientWidth / 2;
        const startY = window.innerHeight / 2 - redDot.clientHeight / 2;
  
        // Obtén las coordenadas finales en la esquina superior derecha
        const endX = window.innerWidth - redDot.clientWidth;
        const endY = 0;
  
        // Animación de movimiento a la esquina superior derecha
        redDot.animate(
          [
            { transform: `translate(${startX}px, ${startY}px)` },
            { transform: `translate(${endX}px, ${endY}px)` },
          ],
          {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards',
          }
        ).onfinish = () => {
          this.isVisible = false;
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .red-dot {
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    transition: opacity 0.5s;
  }
  </style>
  