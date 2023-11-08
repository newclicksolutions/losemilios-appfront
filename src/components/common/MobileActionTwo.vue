/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
<template>
  <div id="app">
    <div class="menu-container">
      <div class="menu-item" @click="navigate('inicio')">
        <em class="ni ni-home"></em>
        <span>Inicio</span>
      </div>
      <div class="menu-item" @click="navigate('busqueda')">
        <em class="ni ni-search"></em>
        <span>Búsqueda</span>
      </div>
      <div class="menu-item" @click="navigate('pedidos')">
        <em class="ni ni-list"></em>
        <span>Pedidos</span>
      </div>
      <div class="menu-item" @click="navigate('perfil')">
        <em class="ni ni-user"></em>
        <span>Perfil</span>
      </div>
    </div>
  </div>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'MobileAction',
  data () {
    return {
      SectionData
    }
  },
  methods: {
    navigate(page) {
      // aquí puedes agregar lógica para navegar a la página seleccionada
      console.log("Navegando a", page);
    },
  },
  mounted () {
    // slideUp
    let slideUp = (target, duration = 500) => {
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.boxSizing = 'border-box'
      target.style.height = target.offsetHeight + 'px'
      // eslint-disable-next-line no-unused-expressions
      target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = 0
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      window.setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
      }, duration)
    }
    // slideDown
    let slideDown = (target, duration = 500) => {
      target.style.removeProperty('display')
      let display = window.getComputedStyle(target).display
      if (display === 'none') display = 'block'
      target.style.display = display
      let height = target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = 0
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      // eslint-disable-next-line no-unused-expressions
      target.offsetHeight
      target.style.boxSizing = 'border-box'
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = height + 'px'
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
      }, duration)
    }
    // slideToggle
    // eslint-disable-next-line no-unused-vars
    var slideToggle = (target, duration = 500) => {
      if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration)
      } else {
        return slideUp(target, duration)
      }
    }
    // variables for menu
    const _navbar = 'header-menu'
    // eslint-disable-next-line camelcase
    const _navbar_toggle = 'menu-toggler'
    // eslint-disable-next-line camelcase
    const _navbar_active = 'active'
    // eslint-disable-next-line camelcase
    const _navbar_fixed = 'has-fixed'
    // eslint-disable-next-line camelcase
    const _navbar_mobile = 'mobile-menu'
    // eslint-disable-next-line camelcase
    const _navbar_break = 992
    // eslint-disable-next-line camelcase
    const _menu_toggle = 'menu-toggle'
    // eslint-disable-next-line camelcase
    const _menu_sub = 'menu-sub'
    // eslint-disable-next-line camelcase
    const _menu_active = 'active'

    const navbar = document.querySelector('.' + _navbar)
    // eslint-disable-next-line camelcase
    const navbar_toggle = document.querySelector('.' + _navbar_toggle)
    // eslint-disable-next-line camelcase
    const menu_toggle = document.querySelectorAll('.' + _menu_toggle)

    // Toggle Dropdown Menu
    function toggleDropdown (parent, subMenu, _active) {
      if (!parent.classList.contains(_active)) {
        parent.classList.add(_active)
        // eslint-disable-next-line no-undef
        slideDown(subMenu)
      } else {
        parent.classList.remove(_active)
        // eslint-disable-next-line no-undef
        slideUp(subMenu)
      }
    }

    // Close Dropdown Menu Siblings
    function closeDropdownSiblings (siblings, menu, _sub, _active) {
      Array.from(siblings).forEach(item => {
        if (item.classList.contains(_active) && !menu.classList.contains(_active)) {
          item.classList.remove(_active)
          Array.from(item.children).forEach(subItem => {
            if (subItem.classList.contains(_sub)) {
              // eslint-disable-next-line no-undef
              slideUp(subItem)
            }
          })
        }
      })
    }

    // Dropdown Menu
    function menuDropdown (toggle, _sub, _active) {
      toggle.forEach(item => {
        item.addEventListener('click', function (e) {
          e.preventDefault()
          let itemParent = item.parentElement
          let itemSibling = item.nextElementSibling
          let itemParentSiblings = item.parentElement.parentElement.children
          closeDropdownSiblings(itemParentSiblings, itemParent, _sub, _active)
          toggleDropdown(itemParent, itemSibling, _active)
        })
      })
    }
    // Dropdown Menu Init
    menuDropdown(menu_toggle, _menu_sub, _menu_active)

    // mobile nav class add/remove
    function mobileNavInit () {
      // eslint-disable-next-line camelcase
      if (window.innerWidth <= _navbar_break) {
        navbar.classList.add(_navbar_mobile)
      }
    }
    mobileNavInit()

    function mobileNavResize () {
      // eslint-disable-next-line camelcase
      if (window.innerWidth <= _navbar_break) {
        navbar.classList.add(_navbar_mobile)
      } else {
        navbar.classList.remove(_navbar_mobile, _navbar_active)
        navbar_toggle.classList.remove(_navbar_active)
      }
    }
    window.addEventListener('resize', function () {
      mobileNavResize()
    })

    /*  =======================================================
  Mobile nav toggle
========================================================== */
    function mobileNavToggle () {
      navbar_toggle.classList.toggle(_navbar_active)
      navbar.classList.toggle(_navbar_active)
    }
    // eslint-disable-next-line camelcase
    if (navbar_toggle) {
      navbar_toggle.addEventListener('click', function () {
        mobileNavToggle()
      })
    }

    /*  =======================================================
  Mobile Remove / close nav when overlay is clicked
========================================================== */
    function navOutSideClick (event) {
      // eslint-disable-next-line camelcase
      if (event.target !== navbar && event.target !== navbar_toggle &&
    // eslint-disable-next-line camelcase
    event.target.closest('.' + _navbar) == null && event.target.closest('.' + _navbar_toggle) == null) {
        // eslint-disable-next-line camelcase
        if (navbar_toggle) {
          navbar_toggle.classList.remove(_navbar_active)
        }
        navbar.classList.remove(_navbar_active)
      }
    }
    document.addEventListener('click', function (event) {
      navOutSideClick(event)
    })

    /*  =======================================================
  Sticky navbar on scroll down
========================================================== */
    function stickyMenu (selector) {
      let elem = document.querySelectorAll(selector)
      if (elem.length > 0) {
        elem.forEach(item => {
          // eslint-disable-next-line camelcase
          let _item_offset = item.offsetTop
          window.addEventListener('scroll', function () {
            // eslint-disable-next-line camelcase
            if (window.scrollY > _item_offset) {
              item.classList.add(_navbar_fixed)
            } else {
              item.classList.remove(_navbar_fixed)
            }
          })
        })
      }
    }
    stickyMenu('.is-sticky')
    
  }
}
</script>
<style scoped>
.menu-container {
  display: none;
}

/* Mostrar el menú en pantallas menores a 768px */
@media (max-width: 768px) {
  .header-main{
display: none;
  }
  .menu-container {

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  }
}
.menu-container {
  z-index: 1000;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.menu-item img {
  width: 24px;
  height: 24px;
}

.menu-item span {
  margin-top: 5px;
  font-size: 12px;
  color: black;
}
</style>
