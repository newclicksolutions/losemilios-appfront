import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './bus'
import { formatoMoneda,getFormattedTime,formattedDate } from './utils';

// vue app
const app = createApp(App);

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// vue select
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

app.component('v-select', vSelect)

// clipboard
import VueClipboard from 'vue3-clipboard'
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})
app.use(store)
app.config.globalProperties.$formatoMoneda = formatoMoneda;
app.config.globalProperties.$getFormattedTime = getFormattedTime;
app.config.globalProperties.$formattedDate = formattedDate;


// template custom css
import './assets/scss/bundles.scss'
import './assets/scss/style.scss'

// Global page components imported
import HeaderMain from './components/common/HeaderMain.vue';
import SectionHeading from './components/common/SectionHeading.vue';
import ExploreSection from './components/section/ExploreSection.vue';
import Footer from './pages/Footer.vue';
import FooterSection from './components/section/FooterSection.vue';
import ButtonLink from './components/common/ButtonLink.vue';
import LogoLink from './components/common/LogoLink.vue';
import RelatedProduct from './components/section/RelatedProduct.vue';
import PedidoDetailSection from './components/section/PedidoDetailSection.vue';
import UserSidebar from './components/common/UserSidebar.vue';
import Form from './components/common/Form.vue';
import AuthorHero from './components/section/AuthorHero.vue';
import Sidebar from './components/common/Sidebar.vue';
import cart from './components/common/cart.vue';
import LoginSection from './components/section/LoginSection.vue';
import ActivitySection  from './components/section/ActivitySection.vue';
import UserActivitySection from './components/section/UserActivitySection.vue'
import AccountSection from './components/section/AccountSection.vue';
import LoginSectionTwo from './components/section/LoginSectionTwo.vue';
import NotificationSection from './components/section/NotificationSection.vue';
import RegisterSection from './components/section/RegisterSection.vue';
import Resumensection from './components/section/Resumensection.vue';
import Notification from './components/common/Notification.vue'

// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('SectionHeading', SectionHeading);
app.component('Footer', Footer)
app.component('FooterSection', FooterSection)
app.component('ButtonLink', ButtonLink)
app.component('LogoLink', LogoLink)
app.component('RelatedProduct', RelatedProduct)
app.component('ExploreSection', ExploreSection)
app.component('PedidoDetailSection', PedidoDetailSection)
app.component('ActivitySection', ActivitySection)
app.component('UserActivitySection', UserActivitySection)
app.component('Form', Form)
app.component('Sidebar', Sidebar)
app.component('AuthorHero', AuthorHero)
app.component('cart', cart)
app.component('LoginSection', LoginSection)
app.component('LoginSectionTwo', LoginSectionTwo)
app.component('RegisterSection', RegisterSection)
app.component('Resumensection', Resumensection)
app.component('UserSidebar', UserSidebar)
app.component('AccountSection', AccountSection)
app.component('NotificationSection', NotificationSection)
app.component('Notification', Notification)
// vue app
app.use(router).mount('#app')
