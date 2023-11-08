<template>
    <div class="hero-wrap sub-header">
         <div class="container">
            <img  :src="img" alt="" sizes="" srcset="">
        </div><!-- .container-->
    </div><!-- end hero-wrap -->
</template>

<script>

export default {
  name: 'HeroFour',
  props: ['title', 'lists', 'classname'],
  data () {
    return {
        img: require('@/images/thumb/products/Frame 5.png'),
    }
  }
}
</script>
