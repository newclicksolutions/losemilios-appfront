// All Section data goes here
// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    // tus datos o variables de estado van aquí
    products: [],
    cartcount: 0,
    cart: [],
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
    updateproducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit("setLoading", true);
        const response = await fetch("http://localhost:3001/api/v1/products");
        const data = await response.json();
        commit("setData", data);
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
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
    updateproducts: (context, payload) => {
      context.commit("updateproducts", payload);
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
          "http://localhost:3001/api/v1/auth/login",
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        sessionStorage.setItem("token", responseData.accessToken);
        context.commit("setToken", responseData.accessToken);
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        /// commit('setError', error.message);
        return error;
      }
    },
    getUsers: async (context) => {
      const options = {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/auth/user",
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const parsed = JSON.stringify(responseData);
            sessionStorage.setItem("UserData", parsed);
        context.commit("setUser", responseData);
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
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        /*  const validemail = await fetch('http://localhost:3001/api/v1/users/validemail/'+payload.emailAddress+'');
        if (await validemail.json().length) {
          console.log("epa")
        }
         */
        const response = await fetch(
          "http://localhost:3001/api/v1/auth/register",
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
