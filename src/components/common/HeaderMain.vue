<template>
  <div v-if="load" class="load">
    <div class="load-gf"> <img :src="imgLg" class="centered-image" alt="avatar" />
      <p>Un momento porfavor</p>
    </div>
  </div>
  <div class="modal-overlay" v-if="isWithinTimeRange()">
    <div class="modal-content">
      <!-- <button class="modal-close" @click="closeModal">&times;</button> -->
      <h2 class="modal-title">¡Atención!</h2>
      <p class="modal-text">
        Por ahora, estaremos atendiendo todos los pedidos a través de WhatsApp.
        Escríbenos al <strong>313 768 1221</strong> y con gusto te ayudaremos.
      </p>
      <a href="https://wa.me/573137681221" target="_blank" class="modal-button">
        Pedir por WhatsApp
      </a>
    </div>
  </div>
  <cart></cart>
  <MobileAction></MobileAction>
  <div class="header-main  fixed-top is-sticky" :class="isTransparent">
    <div class="container">
      <div class="header-wrap">
        <!-- logo -->
        <Logo></Logo>
        <!-- mobile action -->

        <!-- heder search -->
        <HeaderSearch></HeaderSearch>
        <!-- Menu -->
        <Menu classname="btn-primary"></Menu>
        <div class="header-overlay"></div>
      </div><!-- .header-warp-->
    </div><!-- .container-->
  </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileAction from '@/components/common/MobileActionTwo.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'
import axios from 'axios';

export default {
  name: 'HeaderMain',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileAction,
    HeaderSearch,
    Menu,
  },
  data() {
    return {
      imgLg: require('@/images/thumb/load.gif'),
      colombiaHolidays: [],
    }
  },
  methods: {
    async fetchColombiaHolidays() {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/PublicHolidays/2025/CO');
        console.log(response)
        this.colombiaHolidays = response.data.map(item => item.date); // formato YYYY-MM-DD
      } catch (error) {
        console.error('Error al cargar festivos:', error);
      }
    },
    isWithinTimeRange() {
      const config = JSON.parse(this.configvar[0].configOptions);
      console.log(config[0].isopen)
      if (config[0].isopen) {
        console.log(" cerrada la tienda ")
        return true
      }
      console.log(" abierta la tienda ")
      const now = new Date();
      const day = now.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
      const todayStr = now.toISOString().split('T')[0];
      const isHoliday = this.colombiaHolidays.includes(todayStr);
      // Si es lunes y NO es festivo → deshabilitado todo el día
      if (day === 1 && !isHoliday) return true;
      // Obtener horario desde configOptions (string → objeto)
      const apertura = config[0].cierre;// Ej: "6:30 pm"
      const cierre = config[0].apertura;      // Ej: "1:30 am"
      const [openHour, openMinute, openPeriod] = this.parseTime(apertura);
      const [closeHour, closeMinute, closePeriod] = this.parseTime(cierre);
      const openDate = new Date(now);
      openDate.setHours(this.to24Hour(openHour, openPeriod), openMinute, 0, 0);
      const closeDate = new Date(now);
      closeDate.setHours(this.to24Hour(closeHour, closePeriod), closeMinute, 0, 0);
      // Si el cierre es al día siguiente
      if (closeDate <= openDate) {
        closeDate.setDate(closeDate.getDate() + 1);
      }

      return now >= openDate && now < closeDate;
    },
    parseTime(timeStr) {
      const [time, period] = timeStr.toLowerCase().split(' ');
      const [hour, minute] = time.split(':').map(Number);
      return [hour, minute, period];
    },

    to24Hour(hour, period) {
      if (period === 'am') {
        return hour === 12 ? 0 : hour;
      } else {
        return hour === 12 ? 12 : hour + 12;
      }
    }
  },
  computed: {
    load() {
      return this.$store.state.loading;
    },
    configvar() {
      return JSON.parse(this.$GetEncryptedData("configvar"));
    },
  },
}
</script>
<style scoped>
.fixed-top {
  position: fixed !important;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
}

.load {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #000000a6;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Ajusta la altura según tus necesidades */
}

.load-gf {
  text-align: center;
  color: white;
}

.centered-image {
  width: 25%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;

}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;
  animation: fadeIn 0.3s ease-out;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}

.modal-close:hover {
  color: #e00;
}

.modal-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.modal-text {
  color: #333;
  margin-bottom: 1.5rem;
}

.modal-button {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.modal-button:hover {
  background-color: #1ebe5d;
}
</style>