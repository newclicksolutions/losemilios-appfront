// All Section data goes here
// store.js
import { createStore } from "vuex";
import {CONSTANTS_TEST} from '../config/constants'

export default createStore({
  state: {
    // tus datos o variables de estado van aquí
    products: [],
    configvar: JSON.parse(localStorage.getItem("configvar")) || "",
    cartcount: 0,
    cart: [],
    order: [],
    userdata: [],
    user: [],
    token: localStorage.getItem("token") || "",
    cartview: false,  
    searhinput: "",
    loading: false,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setData(state, payload) {
      state.products = payload;
    },
    setOption(state, payload) {
      state.configvar = payload;
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
      state.cartview = true;
    },
    hide(state) {
      state.cartview = false;
    },
    searhinput(state, payload) {
      state.searhinput = payload;
    },
    setcartcount(state, payload) {
      state.cartcount = payload;
    },
    updatecart(state, payload) {
      state.cart = payload;
    },
    updatedataUser(state, payload) {
      state.userdata = payload;
    },
    updatedataOrder(state, payload) {
      state.order = payload;
    },
    updateproducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit("setLoading", true);
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/products"
        );
        const data = await response.json();
        commit("setData", data.data);
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchOptions({ commit }) { 
      try {
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/options"
        );
        const responseData = await response.json();
        const parsed = JSON.stringify(responseData);
        localStorage.setItem("configvar", parsed);
        commit("setOption", responseData);
      } catch (error) {
        commit("setError", error.message);
      }
    },
    login: async (context, payload) => {
      const data = {
        email: payload.emailAddress,
        password: payload.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/auth/login",
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        localStorage.setItem("token", responseData.accessToken);
        context.commit("setToken", responseData.accessToken);
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },
    getUsers: async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/auth/user",
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },
    createorder: async (context, payload) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      try {
        context.commit("setLoading", true);
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/order",
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        context.commit("setLoading", false);
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },
    getorder: async (context, payload) => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        context.commit("setLoading", true);
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/order/user/" + payload,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(responseData);
        const responseData = await response.json();

        context.commit("updatedataOrder", responseData);
        context.commit("setLoading", false);

        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },

    getorderID: async (context, payload) => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        context.commit("setLoading", true);
        const response = await fetch(
          CONSTANTS_TEST.URL_API+"/order/" + payload,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        context.commit("setLoading", false);
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },

    registarusuario: async (context, payload) => {
      const data = {
        name: payload.fullName,
        last_name: payload.apellido,
        phone: payload.tel,
        email: payload.emailAddress,
        user_pass: payload.password,
        shipping_address: payload.direccion,
        user_status: 1,
        user_login: payload.fullName,
        document: "",
        reference_id: 1,
        priority: 1,
        dealer: null,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const validemail = await fetch(
          CONSTANTS_TEST.URL_API+"/users/validemail/" +
            payload.emailAddress +
            ""
        );
        const responseEmail = await validemail.json();
        if (responseEmail.length) {
          return { error: true, data: responseEmail };
        } else {
          const response = await fetch(
            CONSTANTS_TEST.URL_API+"/auth/register",
            options
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const responseData = await response.json();
          return responseData;
        }
      } catch (error) {
        console.error("Error:", error);
        return error;
      }
    },
    incrementCount({ commit }) {
      commit("increment");
    },
    showcart({ commit }) {
      commit("show");
    },
    hidecart({ commit }) {
      commit("hide");
    },
    searhinput: (context, payload) => {
      context.commit("searhinput", payload);
    },
    setcartcount: (context, payload) => {
      context.commit("setcartcount", payload);
    },
    updatecart: (context, payload) => {
      context.commit("updatecart", payload);
    },
    updatedataUser: (context, payload) => {
      context.commit("updatedataUser", payload);
    },
    updatedataOrder: (context, payload) => {
      context.commit("updatedataOrder", payload);
    },
    updateproducts: (context, payload) => {
      context.commit("updateproducts", payload);
    },
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    Userdata: (state) => {
      return state.userdata;
    },
    Productsdata: (state) => {
      return state.products;
    },
  },
});
