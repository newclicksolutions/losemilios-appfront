<template>
    <div class="header-search-field" :class="classname">
        <input v-model="inputValue" @input="handleInputChange" type="search" class="form-control form-control-s1" :placeholder="[[ SectionData.headerData.inputPlaceholderText ]]">
    </div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'HeaderSearch',
  props: ['classname'], 
  data () {
    return {
      SectionData,
       inputValue: ""
    }
  }, 
  methods: {
    handleInputChange() {
      this.$store.dispatch('searhinput',this.inputValue);
    }
  },
  computed: {
        stateshowcart(){
            return this.$store.state.cartview;
        },
        totalSum() {
            return this.storedCart.reduce((acc, item) => acc + item.total, 0);
        },
    }
}
</script>
<style>
.header-search-field{
  width: 100%;
  margin: auto;
  padding: 5px 25px;
}
.header-search-field input{
 height: 50px;
 font-size: 15px;
}
</style>
