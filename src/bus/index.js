// All Section data goes here
// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    // tus datos o variables de estado van aquí
    cartcount:0,
    cart: [],
    userdata: [],
    cartview:false,
    searhinput:""
  },
  mutations: {
    // tus mutaciones para cambiar el estado van aquí
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

  },
  actions: {
    // tus acciones para invocar mutaciones (y posiblemente hacer lógica asíncrona) van aquí
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
    
    
    
  },
  getters: {
    // tus getters para obtener valores derivados del estado van aquí
    doubleCount: state => {
      return state.count * 2;
    },
    Userdata: state => {
      return state.userdata;
    }

  }
});
