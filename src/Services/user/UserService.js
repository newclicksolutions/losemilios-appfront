import Vue from "vue";
import {
  CONSTANTS_PROD,
  CONSTANTS_TEST,
  TEST_ENVIRONMENT
} from "../../config/constants";
import {busUserData} from "../../components/User/busUserData";
import axios from "axios";
import _ from 'lodash'
import {busRegistro} from "@/components/registro/BusRegistro";

export var user_service = new Vue({
  data() {
    return {
      constans: {},
      full_url: "",
      info: null
    };
  },
  methods: {
    async validateUser(user_login, user_pass) {
      console.log("Entra a loguear")
      var data = {
        user_login: user_login,
        user_pass: user_pass
      };
      await axios
        .post(this.full_url + "/auth/login", data)
        .then(function (response) {
          busUserData.responUserlogin(response.data);
        })
        .catch(function (error) {
          busUserData.responUserlogin(error);
        });
    },
    async GetValidateUser(data) {
      await axios.get(this.full_url + 'users/valideuser/' + data)
        .then(function (response) {
          busUserData.GetValdateUser(response.data)
        })
        .catch(function (error) {
          console.log('Error ' + error);
        })
    },
    async resetPassword(data) {
      await axios.get(this.full_url + '/users/resetpassword/' + data)
        .then(function (response) {
          busUserData.Getresetpassword(response.data)
        })
        .catch(function (error) {
          console.log('Error ' + error);
        })
    },
    async UserRegistry(data) {
      await axios
        .post(this.full_url + "/users", data)
        .then(function (response) {
          busUserData.responUserRegistry(response);
        })
        .catch(function (error) {
          busUserData.responUserRegistry(error);
        });
    },
    async UserUpdate(data) {
      await axios
        .put(this.full_url + "/users/", data)
        .then(function (response) {
          busUserData.responUserUpdate(response.data);
        })
        .catch(function (error) {
          busUserData.responUserUpdate(error);
        });
    },
    async UserOrders(data) {
      console.log(data)
      await axios({
        method: 'POST',
        url: this.full_url + "/search/order_index/byuser/" + data.user_id,
        data: {
          from: 0,
          size: 10000
        }
      })
        .then(function (response) {
          busUserData.responUserorder(_.map(response.data.body.hits.hits, "_source"));
        })
        .catch(function (error) {
          busUserData.responUserorder(error);
        });
    },
    async getAllProducts(dtos) {
      axios
          .post(this.full_url + "/search/catalogo_index", dtos)
          .then(function (response) {
            busUserData.AllproductSku(
                _.map(response.data.body.hits.hits, "_source")
            );
          })
          .catch(function (error) {
            return error;
          });
    },
    async GetAllCity() {

      await axios({
        method: 'post',
        url: this.full_url + '/locate',
        data: {
          "name": "city",
          "param": "2"
        }
      })
        .then(function (response) {
          busUserData.GetAllCity(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getUser(id) {
      await axios
        .get(this.full_url + "/users/" + id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          return error;
        });
    },
    async Mail(data) {
      await axios({
        method: 'POST',
        url: this.full_url + '/mail',
        data: data
      })
        .then(function (response) {
          busRegistro.Mail(response)
        })
        .catch(function (error) {
          console.log('Error ' + error);
        })
    },
    async GetAllUsersVal() {
      await axios({
        method: 'POST',
        url: this.full_url + '/search/user_index/',
        data: {
          from: 0,
          size: 10000
        }
      })
        .then(function (response) {
          busUserData.GetAllUserVal(_.map(response.data.body.hits.hits, "_source"))
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
  created() {
    TEST_ENVIRONMENT
      ? (this.constans = CONSTANTS_TEST)
      : (this.constans = CONSTANTS_PROD);
    this.full_url = this.constans.URL_API + this.constans.VERSION_API;
  }
});
