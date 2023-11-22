import Vue from "vue";
import {
  CONSTANTS_PROD,
  CONSTANTS_TEST,
  TEST_ENVIRONMENT
} from "../../config/constants";
import axios from "axios";
import _ from "lodash";

export var product_service = new Vue({
  data() {
    return {
      constants: {},
      full_url: "",
      info: null,
      productsElastic: {}
    };
  },

  methods: {
    async getAllProductsPague(dtos) {
      axios
        .post(this.full_url + "/search/catalogo_index", dtos)
        .then(function (response) {
          bus.responseAllproducts(
            _.map(response.data.body.hits.hits, "_source")
            , response.data.body.hits.total.value
          );
        })
        .catch(function (error) {
          return error;
        });
    },
    async getAllProducts(dtos) {
      axios
        .post(this.full_url + "/search/catalogo_index", dtos)
        .then(function (response) {
          bus.responseAllproducts(
            _.map(response.data.body.hits.hits, "_source")
            , response.data.body.hits.total.value
          );
        })
        .catch(function (error) {
          return error;
        });
    },
    async getAllProductsPagination(dtos) {
      axios
        .post(this.full_url + "/search/catalogo_index", dtos)
        .then(function (response) {
          bus.getAllProductsPagination(
            _.map(response.data.body.hits.hits, "_source")
          );
        })
        .catch(function (error) {
          return error;
        });
    },
    async getAllProductsElastic(data) {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      };
      axios
        .get(this.full_url + "/search/catalogo" + data)
        .then(function (response) {
          bus.responseSearchProducts(response.data.body.hits.hits);
        })
        .catch(function (error) {
          return error;
        });
    },
    getUnits() {
      axios
        .get(this.full_url + "/units")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async SearchProduct(data, query) {
      await axios({
        method: 'POST',
        url: this.full_url + "/search/catalogo_index/" + query,
        data: data
      })
        .then(function (response) {
          bus.SearchQuery(_.map(response.data.body.hits.hits, "_source"), response.data.body.hits.total.value)
          bus.Query(query)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async SearchProductPagination(data, query) {
      await axios({
        method: 'POST',
        url: this.full_url + "/search/catalogo_index/" + query,
        data: data
      })
        .then(function (response) {
          bus.SearchQueryPagination(_.map(response.data.body.hits.hits, "_source"))
          bus.Query(query)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getcarcount() {
      if (sessionStorage.shopingcart) {
        try {
          return JSON.parse(sessionStorage.getItem("shopingcart")).length;
        } catch (e) {
          return 0;
        }
      }
    }
  },
  created() {
    TEST_ENVIRONMENT
      ? (this.constants = CONSTANTS_TEST)
      : (this.constants = CONSTANTS_PROD);
    this.full_url = this.constants.URL_API + this.constants.VERSION_API;
  }
});
