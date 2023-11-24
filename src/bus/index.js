// All Section data goes here
// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    // tus datos o variables de estado van aquí
    products:[],
    cartcount:0,
    cart: [],
    userdata: [],
    cartview:false,
    searhinput:"",
    loading: false,
    error: null,
  },
  mutations: {
    setData(state, payload) {
      state.products = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    increment(state) {
      state.count++;
    },
    show(state) { 
      state.cartview= true;
    }
    ,
    hide(state) {
      state.cartview= false;
    },
    searhinput(state,payload) {
      state.searhinput= payload;
    },
    setcartcount(state,payload) {
      state.cartcount = payload;
    },
    updatecart(state,payload) {
      state.cart = payload;
    },
    updatedataUser(state,payload) {
      state.userdata = payload;
    },
    updateproducts(state,payload) {
      state.products = payload;
    },

  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit('setLoading', true);
        const response = await fetch('http://localhost:3001/api/v1/products');
        const data = await response.json();
        commit('setData', data);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    incrementCount({ commit }) {
      commit('increment');
    },
    showcart({ commit }) {
      commit('show');
    },
    hidecart({ commit }) {
      commit('hide');
    },
    searhinput: (context, payload) => { 
      context.commit('searhinput', payload)
    },
    setcartcount: (context, payload) => {
      context.commit('setcartcount', payload)
    },
    updatecart: (context, payload) => {
      context.commit('updatecart', payload)
    },
    updatedataUser: (context, payload) => {
      context.commit('updatedataUser', payload)
    },
    updateproducts: (context, payload) => {
      context.commit('updateproducts', payload)
    },
    registarusuario: (context, payload) => {
      context.commit('updateproducts', payload)
    },
    
    
    
  },
  getters: {
    // tus getters para obtener valores derivados del estado van aquí
    doubleCount: state => {
      return state.count * 2;
    },
    Userdata: state => {
      return state.userdata;
    },
    Productsdata: state => {
      return state.products;
    }

  }
});
