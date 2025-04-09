// All Section data goes here
let SectionData = {
  loginDataTwo: {
    title: 'Connect Your MetaMask Wallet',
    titleTwo: 'Connect Your Walletconnect Wallet',
    btnText: 'Sign In',
    btnTextTwo: 'Learn how to use MetaMask Wallet',
    btnTextThree: 'Learn how to use Walletconnect Wallet',
    btnTextLink: '',
    btnLink: 'login'
  },
  // register data
  registerData: {
    img: require('@/images/thumb/remote.png'),
    title: 'Registrate <span class="text-primary">Los emilios</span>',
    subTitle: 'Complete los siguientes campos para crear una cuenta',
    termText: 'Aceptas nuestros Términos y condiciones y Política de privacidad',
    btnText: 'Crear cuenta',
    haveAccountText: "Ya tienes una cuenta? ",
    btnTextTwo: 'Login',
    btnTextLink: 'login',
    btns: [
      {
        title: 'Google',
        btnClass: 'bg-red-100 text-red g-btn',
        icon: 'ni-google',
        path: ''
      },
      {
        title: 'Facebook',
        btnClass: 'bg-blue-100 text-blue f-btn',
        icon: 'ni-facebook-f',
        path: ''
      },
      {
        title: 'Twitter',
        btnClass: 'bg-cyan-100 text-cyan t-btn',
        icon: 'ni-twitter',
        path: ''
      },
    ]
  },
  // contact data
  contactData: {
    title: 'Contact Us',
    titleTwo: 'Find Us There',
    subTitle: "Have a question? Need help? Don't hesitate, drop us a line",
    btnText: 'Send Message',
     contactList: [
      {
        id: 2,
        icon: 'ni-globe',
        title: 'Web:',
        subTitle: 'www.maxibuku.com'
      },
      {
        id: 3,
        icon: 'ni-mail',
        title: 'Email:',
        subTitle: 'mxbu.token@gmail.com'
      }
    ]
  },
  logoData: [
    {
      imgClass: 'logo-dark',
      style:"width:500px; height:200px",
      logoImg: require('@/images/logo-black.png'),
      path: '/home'
    },
    {
      imgClass: 'logo-light',
      logoImg: require('@/images/logo-white.png'),
      style: "width: 500px; height:200px;",
      path: '/home'
    }
  ],
  // Hero data three
  heroDataThree: {
    title: 'Maxibuku discover rare artworks by world class artists',
   content: 'Maxibuku, empowers you to launch your own white-label NFT store or NFT Marketplace without any technical knowledge'
  },
  // Breadcrumb data
  breadcrumbData: {
    breadcrumbList: {
      title: 'Explore',
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'Explore'
        }
      ]
    },
    breadcrumbListTwo: {
      title: 'Activity',
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'Activity'
        }
      ]
    },
    breadcrumbListThree: {
      title: 'Ranking',
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'Ranking'
        }
      ]
    },
    breadcrumbListFour: {
      title: 'Connect Wallet',
      navList: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Wallet'
        }
      ]
    },
    breadcrumbListFive: {
      title: 'News',
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'News'
        }
      ]
    },
    breadcrumbListSix: {
      title: "Enter Linda Dounia's Cyber Baat World",
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'Blog',
          path: ''
        },
        {
          title: 'Enter Linda Dounia...'
        }
      ]
    },
    breadcrumbListSeven: {
      title: 'How can we help?',
      navList: [
        {
          title: 'Home',
          path: ''
        },
        {
          title: 'Contact'
        }
      ]
    }
  },
  // Button group data
  btnData: [
    {
      btnClass: 'btn-primary',
      title: 'Place Bid',
      path: 'item-details'
    },
    {
      btnClass: 'bg-dark-dim',
      title: 'View',
      titleTwo: 'Artwork',
      path: 'explore'
    }
  ],
  // Hero btn data
  btnDataTwo: [
    {
      btnClass: 'btn-lg btn-primary',
      title: 'Place a Bid',
      path: 'item-details'
    },
    {
      btnClass: 'btn-lg bg-dark-dim',
      title: 'View Artwork',
      path: 'explore'
    }
  ],
  // Hero btn data
  btnDataThree: [
    {
      btnClass: 'btn-lg btn-primary',
      title: 'Explore',
      path: 'explore'
    },
    {
      btnClass: 'btn-lg btn-outline-dark',
      title: 'Create',
      path: 'create'
    }
  ],
  // Hero btn data
  btnDataFour: [
    {
      btnClass: 'btn-lg btn-grad',
      title: 'Register Now',
      path: 'register'
    },
    {
      btnClass: 'btn-lg btn-outline-dark',
      title: 'Create Store',
      path: 'create'
    }
  ],
  // Hero btn data
  btnDataFive: [
    {
      btnClass: 'btn-grad',
      title: 'Place Bid',
      path: 'item-details'
    },
    {
      btnClass: 'bg-dark-dim',
      title: 'View',
      titleTwo: 'Artwork',
      path: 'explore'
    }
  ],
  // Header data
  headerData: {
    btnText: 'Connect Wallet',
    inputPlaceholderText: '¿Que quieres hoy?',
    menuList: {
      title: 'Home',
      navList: [
        {
          id: 1,
          title: 'Welcome',
          path: '/'
        },
          ]
    },
    menuList2: {
      title: 'Maxibuku NFT',
      navList: [
        {
          id: 1,
          title: 'MarketPlace',
          path: '/explore'
        },
        ]
    },
    menuList3: {
      title: 'Pages',
      navList: [
        {
          id: 1,
          title: 'Author Public',
          path: '/author'
        },
        {
          id: 2,
          title: 'About Us',
          path: '/about-us'
        },
        {
          id: 3,
          title: 'Activity',
          path: '/activity'
        },
        {
          id: 4,
          title: 'Ranking',
          path: '/ranking'
        },
        {
          id: 5,
          title: 'Wallet',
          path: '/wallet'
        },
        {
          id: 6,
          title: 'Wallet v2',
          path: '/wallet-v2'
        },
        {
          id: 7,
          title: 'News',
          path: '/blog'
        },
        {
          id: 8,
          title: 'News Details',
          path: '/blog-detail-1'
        },
        {
          id: 9,
          title: 'Login',
          path: '/login'
        },
        {
          id: 10,
          title: 'Login v2',
          path: '/login-v2'
        },
        {
          id: 11,
          title: 'Register',
          path: '/register'
        },
        {
          id: 12,
          title: 'Contact',
          path: '/contact'
        }
      ]
    },
    menuList4: {
      title: 'User Panel',
      navList: [
        {
          id: 1,
          title: 'Dashboard',
          path: '/offers'
        },
        {
          id: 2,
          title: 'Activity',
          path: '/activity-v2'
        },
        {
          id: 3,
          title: 'Sales and Purchase',
          path: '/purchases-sales'
        },
        {
          id: 4,
          title: 'Transactions',
          path: '/transactions'
        },
        {
          id: 5,
          title: 'Display Enfties',
          path: '/display'
        },
        {
          id: 6,
          title: 'Redeem Enfties',
          path: '/redeem'
        },
        {
          id: 7,
          title: 'Deposit Enfties',
          path: '/deposit-enfties'
        },
        {
          id: 8,
          title: 'Author Personal',
          path: '/profile'
        }
      ],
      navListTwo: [
        {
          id: 1,
          title: 'Account Settings',
          path: '/account'
        },
        {
          id: 2,
          title: 'Payment Methods',
          path: '/payment-methods'
        },
        {
          id: 3,
          title: 'Seller Settings',
          path: '/seller-settings'
        },
        {
          id: 4,
          title: 'Notifications',
          path: '/notifications'
        },
        {
          id: 5,
          title: 'Security',
          path: '/security'
        },
        {
          id: 6,
          title: 'Create',
          path: '/create'
        },
        {
          id: 7,
          title: 'Create Single',
          path: '/create-single'
        },
        {
          id: 8,
          title: 'Create Multiple',
          path: '/create-multiple'
        }
      ]
    }

  },
// Product data
userdata:[
{
  user_id: 1,
  name: "Pepito",
  last_name: "Perez",
  phone: "3245678900",
  email: "pepitoperez@gmail.com",
  user_status: 1,
  // limit: number;
  shipping_address: '[{"name":"çasa","id":"1","value":"Carrara 22 # 66 - 806"}]',
}
],

  // Product data
  products: [
    {
      id: 1,
      img: require('@/images/thumb/products/IMG_6047.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6047.jpg'),
      title: 'Perro Grande',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'ZeniconStudio',
      authorLink: 'author',
      name: 'art',
      price: '8000',
      metaText: 'Not for sale', 
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.32 ETH',
      category: 'Perros',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 3000,
        value:0
      }

    ]
    },
    {
      id: 2,
      img: require('@/images/thumb/products/IMG_6054.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6054.jpg'),
      title: 'Perro Suizo',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'CanvaNetwork',
      authorLink: 'author',
      name: 'art',
      price: '12500',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '0.32 ETH',
      category: 'Perros',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 1000,
        value:0
      }

    ]
    },
    {
      id: 3,
      img: require('@/images/thumb/products/IMG_6057.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6057.jpg'),
      title: 'Chuzo Perro ',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'MoveNetwork',
      authorLink: 'author',
      name: 'music',
      price: '15000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.30 ETH',
      category: 'Perros',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 1000,
        value:0
      }

    ]
    },
    {
      id: 4,
      img: require('@/images/thumb/products/IMG_6061.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6061.jpg'),
      title: 'Perro vegetariano',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'RukiStudio',
      authorLink: 'author',
      name: 'music',
      price: '9000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '2.30 ETH',
      category: 'Perros',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 3000,
        value:0
      }

    ]
    },
    {
      id: 5,
      sort: 'recent',
      img: require('@/images/thumb/products/IMG_5939.jpg'),
      imgLg: require('@/images/thumb/products/IMG_5939.jpg'),
      title: 'Hambueguesa doble res',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'DvisionNetwork',
      authorLink: 'author',
      name: 'collectibles',
      price: '20500',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.44 ETH',
      category: 'Hambueguesas',
      additions:[]
    },
    {
      id: 6,
      img: require('@/images/thumb/products/IMG_5947.jpg'),
      imgLg: require('@/images/thumb/products/IMG_5947.jpg'),
      title: 'Hambueguesas doble pollo apanado',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'KamranMedia',
      authorLink: 'author',
      name: 'collectibles',
      price: '22500',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.33 ETH',
      category: 'Hambueguesas',
      additions:[]
    },
    {
      id: 7,
      img: require('@/images/thumb/products/IMG_5900.jpg'),
      imgLg: require('@/images/thumb/products/IMG_5900.jpg'),
      title: 'Hambueguesa de res',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'JisanMedia',
      authorLink: 'author',
      name: 'metaverses',
      price: '15000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '2.33 ETH',
      category: 'Hambueguesas',
      additions:[]
    },
    {
      id: 8,
      img: require('@/images/thumb/products/IMG_5988.jpg'),
      imgLg: require('@/images/thumb/products/IMG_5988.jpg'),
      title: 'Salchipapas sencilla',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'RifiUnited',
      authorLink: 'author',
      name: 'metaverses',
      price: '10000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '3.33 ETH',
      category: 'Salchipapas',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 3000,
        value:0
      },
      {
        id: 4,
        title: '1/2 PECHUGA PLANCHA',
        price: 1500,
        value:0
      },
      {
        id: 5,
        title: 'SALCHICHA AMERICANA',
        price: 1900,
        value:0
      }
      ,
      {
        id: 6,
        title: 'SALCHICHA TRADICIONAL',
        price: 3500,
        value:0
      }
    ]
    },
    {
      id: 9,
      img: require('@/images/thumb/products/IMG_6001.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6001.jpg'),
      title: 'Salchipapas especial',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'RadioCaca',
      authorLink: 'author',
      name: 'games',
      price: '14000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '2.33 ETH',
      category: 'Salchipapas',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      },
      {
        id: 3,
        title: 'QUESO RAYADO',
        price: 3000,
        value:0
      },
      {
        id: 4,
        title: '1/2 PECHUGA PLANCHA',
        price: 1500,
        value:0
      },
      {
        id: 5,
        title: 'SALCHICHA AMERICANA',
        price: 2500,
        value:0
      }
      ,
      {
        id: 6,
        title: 'SALCHICHA TRADICIONAL',
        price: 3300,
        value:0
      }
    ]
    },
    {
      id: 10,
      img: require('@/images/thumb/products/IMG_6019.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6019.jpg'),
      title: 'Chuzo de cerdo',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'InfinityArt',
      authorLink: 'author',
      name: 'games',
      price: '16000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.33 ETH',
      category: 'Asados',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      }
    ]
    },
    {
      id: 11,
      img: require('@/images/thumb/products/IMG_6015.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6015.jpg'),
      title: 'Chuso de costilla',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'InfinityArt',
      authorLink: 'author',
      name: 'art',
      price: '19000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.33 ETH',
      category: 'Asados',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      }
    ]
    },
    {
      id: 12,
      img: require('@/images/thumb/products/IMG_6040.jpg'),
      imgLg: require('@/images/thumb/products/IMG_6040.jpg'),
      title: 'Carne de res',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'Viktoria',
      authorLink: 'author',
      name: 'art',
      price: '13000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.33 ETH',
      category: 'Asados',
      additions:[{
        id: 1,
        title: 'MOZZARELLA',
        price: 1000,
        value:0
      },
      {
        id: 2,
        title: 'TOCINETA',
        price: 2000,
        value:0
      }
    ]
    },
    {
      id: 13,
      img: require('@/images/thumb/products/bebidas.jpg'),
      imgLg: require('@/images/thumb/products/bebidas.jpg'),
      title: 'Coca-cola normal',
      content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      author: 'Viktoria',
      authorLink: 'author',
      name: 'art',
      price: '3000',
      metaText: 'Not for sale',
      metaTextTwo: '500 editions',
      metaTextThree: 'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
      currentPrice: '1.33 ETH',
      category: 'Bebidas',
      additions:[]
    }
  ],

   editProfileData: {
     title: 'Configuracion de tu cuenta',
     editProfileTabNav: [
      {
        id: 1,
        isActive: 'active',
        title: 'Editar informacion',
        slug: 'account-information-tab',
        bsTarget: '#account-information'
      },
      {
        id: 2,
        title: 'Contraseña',
        slug: 'change-password-tab',
        bsTarget: '#change-password'
      },
    ],
    // edit profile tab mobile
     editProfileTabNavMobile: [
      {
        id: 1,
        isActive: 'active',
        title: 'Account Information',
        slug: 'account-information-tab-mobile',
        bsTarget: '#account-information-mobile'
      },
      {
        id: 2,
        title: 'Change Password',
        slug: 'change-password-tab-mobile',
        bsTarget: '#change-password-mobile'
      },
      {
        id: 3,
        title: 'Validate Profile',
        slug: 'validate-profile-tab-mobile',
        bsTarget: '#validate-profile-mobile'
      }
    ],
   },
  // payment method data
  paymentMethodData: {
    title: 'Payment Methods',
    paymentMethodTabNav: [
    {
      id: 1,
      isActive: 'active',
      title: 'Balances',
      slug: 'balances-tab',
      bsTarget: '#balances'
    },
    {
      id: 2,
      title: 'Credit Cards',
      slug: 'credit-cards-tab',
      bsTarget: '#credit-cards'
    },
    {
      id: 3,
      title: 'Prepaid ETH',
      slug: 'prepaid-eth-tab',
      bsTarget: '#prepaid-eth'
    }
  ],
  // edit profile tab mobile
   paymentMethodTabNavMobile: [
    {
      id: 1,
      isActive: 'active',
      title: 'Balances',
      slug: 'balances-tab-mobile',
      bsTarget: '#balances-mobile'
    },
    {
      id: 2,
      title: 'Credit Cards',
      slug: 'credit-cards-tab-mobile',
      bsTarget: '#credit-cards-mobile'
    },
    {
      id: 3,
      title: 'Prepaid ETH',
      slug: 'prepaid-eth-tab-mobile',
      bsTarget: '#prepaid-eth-mobile'
    }
  ],
},
notificationSidebarData: {
  title: 'Notifications',
  navList: [
    {
      id: 1,
      icon: 'ni-edit',
      title: 'Edit Profile',
      path: 'account'
    },
    {
      id: 2,
      icon: 'ni-money',
      title: 'Payment Methods',
      path: 'payment-methods'
    },
    {
      id: 3,
      icon: 'ni-user',
      title: 'Seller Settings',
      path: 'seller-settings'
    },
    {
      id: 4,
      class: 'active',
      icon: 'ni-bell',
      title: 'Mis pedidos',
      path: 'notifications'
    },
    {
      id: 5,
      icon: 'ni-lock',
      title: 'Security',
      path: 'security'
    }
  ]
},
   
  // notification data
  notificationData: {
    title: 'Notifications',
    notificationTabNav: [
      {
        id: 1,
        isActive: 'active',
        title: 'Email Alerts',
        slug: 'email-alerts-tab',
        bsTarget: '#email-alerts'
      },
      {
        id: 2,
        title: 'Price Alerts',
        slug: 'price-alerts-tab',
        bsTarget: '#price-alerts'
      }
    ],
    // notification tab mobile
     notificationTabNavMobile: [
      {
        id: 1,
        isActive: 'active',
        title: 'Email Alerts',
        slug: 'email-alerts-tab-mobile',
        bsTarget: '#email-alerts-mobile'
      },
      {
        id: 2,
        title: 'Price Alerts',
        slug: 'price-alerts-tab-mobile',
        bsTarget: '#price-alerts-mobile'
      }
    ],
  },

  accountSidebarData: {
    title: 'Configuracion de la cuenta',
    navList: [
      {
        id: 1,
        class: 'active',
        icon: 'ni-edit',
        title: 'Editar perfil',
        path: 'account'
      },
      {
        id: 2,
        icon: 'ni-bell',
        title: 'Mis Pedidos',
        path: 'notifications'
      }
    ]
  },

  authorPersonalData: {
    title: 'Kamran Ahmed',
    userName: '@kamran_76',
    btnText: 'Edit Profile',
    img: require('@/images/thumb/avatar-9.jpg'),
    coverImg: require('@/images/thumb/bread-bg-2.jpg'),
    btnLink: 'account',
    btnTextTwo: 'Profile',
    btnLinkTwo: 'profile',
  },

  // credit card data
  creditCardList: [
    {
      id: 1,
      title: 'Visa ending in 8203',
      timeText: '08/11/2022',
      img: require('@/images/thumb/visa.png'),
      titleTwo: 'Billing address',
      addressText: '123 Fake Sreet, 3rd Floor, San Francisco, California, 94105, United States',
    },
    {
      id: 2,
      title: 'Mastercard ending in 4720',
      timeText: '02/9/2022',
      img: require('@/images/thumb/master-card.png'),
      titleTwo: 'Billing address',
      addressText: '240 Descano Drive, Level 5, San Francisco, California, 34105, United States',
    }
  ],
  // credit card data
  creditCardData: {
    alertText: 'Using a Capital One card may lead to issues completing purchases. Please consider using a different card until further notice.',
    title: 'Your Saved Credit Cards:',
    content: "You created new card. Transactions status i 'Authorized'",
    btnText: 'Add New Card'
  },
  // create data
  createData: {
    btnText: 'Go Back',
    path: '/',
    title: 'Create collectible',
    content: 'Choose <strong>“Single”</strong> if you want your collectible to be one of a kind or <strong>“Multiple”</strong> if you want to sell one collectible multiple times',
    cards: [
      {
        id: 1,
        title: 'Single',
        img: require('@/images/thumb/single-mobile.png'),
        path: 'create-single'
      },
      {
        id: 1,
        title: 'Mutiple',
        img: require('@/images/thumb/multiple-mobile.png'),
        path: 'create-multiple'
      }
    ],
    contentTwo: 'We do not own your private keys and cannot access your funds without your confirmation'
  },
  // create singledata
  createSingleData: {
    btnText: 'Manage collectible type',
    path: 'create',
    title: 'Create single collectible'
  },
  // multiple data
  createMultipleData: {
    btnText: 'Manage collectible type',
    path: 'create',
    title: 'Create multiple collectible'
  },
  // select method tab nav
  selectMethodTabNav: [
    {
      id: 1,
      isActive: 'active',
      title: 'Fixed Price',
      slug: 'fixed-price-tab',
      bsTarget: '#fixed-price',
      icon: 'ni-tags'
    },
    {
      id: 2,
      title: 'Timed Auction',
      slug: 'timed-auction-tab',
      bsTarget: '#timed-auction',
      icon: 'ni-clock'
    },
    {
      id: 3,
      title: 'Open for bids',
      slug: 'open-for-bids-tab',
      bsTarget: '#open-for-bids',
      icon: 'ni-file'
    }
  ],
  // select method tab nav
  selectMethodTabNavTwo: [
    {
      id: 1,
      isActive: 'active',
      title: 'Fixed Price',
      slug: 'fixed-price-tab',
      bsTarget: '#fixed-price',
      icon: 'ni-tags'
    },
    {
      id: 2,
      title: 'Open for bids',
      slug: 'open-for-bids-tab',
      bsTarget: '#open-for-bids',
      icon: 'ni-file'
    }
  ],
  // previe item data
  previewItemData: {
    img: require('@/images/thumb/nft3.jpg'),
    title: 'One Tribe Black Edition',
    byText: 'By',
    authorText: 'ZeniconStudio',
    authorLink: 'author',
    priceText: 'Price',
    givenPrice: '$14.20',
    priceTextTwo: 'Current bid',
    currentPrice: '0.000 ETH',
    btnText: 'Place Bid',
    path: 'item-details',
  },
  // prepaid-eth data
  prepaidData: {
    title: 'Pre-Paid ETH Balance',
    content: 'Balances can be withdrawn in ETH at anytime',
    contentTwo: 'To increase your balance, send ETH to your deposit address below. ETH will be valued at USD market value at time of purchase. Gas fees will be subtracted from withdrawal amounts.',
    balances: [
      {
        id: 1,
        title: 'Balance',
        price: '2 ETH',
        priceTwo: '$330.00 USD'
      },
      {
        id: 2,
        title: 'Holds',
        price: '2 ETH',
        priceTwo: '$330.00 USD'
      }
    ]
  },
  // balance data
  balanceData: {
    title: 'Balance:',
    price: '$330.00',
    titleTwo: 'Holds:',
    priceTwo: '$330.00',
    content: 'There is a $5,000 weekly cash out limit with a bank account.',
    btnText: 'Connect A Bank Account',
    btns: [
      {
        title: 'Cash out to Bank',
        btnClass: 'btn-outline-primary',
        path: ''
      },
      {
        title: 'View Cashout history',
        btnClass: 'btn-light',
        path: ''
      }
    ]
  },
  // disply enfty data
  displayEnftyData: {
    mainTitle: 'Display Enfties',
    content: 'New to displays? Learn more <a href="#">here</a>',
    titleTwo: 'Connect New Display',
    btnText: 'Add Display',
    titleThree: 'Your Displays',
    btnTextTwo: 'Display external Enfties',
    contentTwo: 'Please allow for up to 40 seconds for your changes to be reflected on your display screen'
  },
  // redeem enfty data
  redeemEnftyData: {
    mainTitle: 'Redeem Enfties',
    content: 'Redemptions reward the top collectors of a particular artist by gifting them a nifty if a collector has a certain number of pieces from a particular collection on their account.',
    contentTwo: 'To see if you are eligible, just select a redemption below!',
    titleTwo: 'Redeem Enfty',
    contentThree: 'Select the project you would like to redeem',
    contentFour: 'All 5 available Enfties for redemption have been claimed'
  },
  // deposit data
  depositData: {
    mainTitle: 'Deposit Enfties',
    content: 'Only EnftyMart collection Enfties can be deposited. To check if your Enfty is eligible for deposit, click <a href="#" data-bs-toggle="modal" data-bs-target="#depositNiftyModal" class="btn-link">Here</a>',
    contentTwo: 'Metamask browser extension is required. Visit <a href="https://metamask.io/">metamask.io</a> to learn more.',
    btnText: 'Connect a new wallet',
    btnLink: 'wallet'
  },
  depositNiftyModal: {
    title: 'Deposit Enfty',
    content: 'Only Enfties registered in Enfty Gateway collections can be deposited. Check if your Enfty is compatible below:',
    img: require('@/images/thumb/qrcode.png'),
    contentTwo: 'Scan QR code or send your nifty to the address above',
    contentThree: 'Do not send cryptocurrency to this address',
    btnText: 'Check'
  },
  deleteModal: {
    title: 'Your item will be deleted permanently!',
    titleTwo: 'Your card will be deleted permanently!',
    content: 'Are you sure you want to delete item?',
    img: require('@/images/thumb/exclamation-circle-solid.svg'),
    btnText: 'Cancel',
    btnTextTwo: 'Ok Delete'
  },
  // about hero data
  aboutData: {
    title: 'Building an open digital economy',
    content: "At EnftyMart, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend a",
    contentTwo: "A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their assets freely",
    contentThree: 'We’re proud to be the first and largest marketplace for NFTs.',
    img: require('@/images/thumb/nft-img-2.png')
  },
  aboutDataTwo: {
    title: 'About the EnftyMart',
    content: 'EnftyMart was founded with a very simple mission - to make Enfties accessible to everyone',
    contentTwo: 'In 2017 the world witnessed the birth of CryptoKitties. For the first time, the world experienced a decentralized application built on blockchains but targetted towards a mainstream audience.',
    contentThree: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quasi consectetur. Et delectus minus saepe cumque qui harum! Aperiam, dolorem itaque!',
    contentFour: 'Today, <strong>we’re proud to remain the largest general marketplace for user-owned digital items</strong>, supporting multiple blockchains, with the broadest set of categories',
    img: require('@/images/thumb/about-img.jpg')
  },
  brandData: {
    title: 'Backed by top firms & industry leaders',
    content: 'Who are helping us pave the way towards a brand new digital economy',
    brandList: [
      {
        id: 1,
        img: require('@/images/brand/brand.png')
      },
      {
        id: 2,
        img: require('@/images/brand/brand-2.png')
      },
      {
        id: 3,
        img: require('@/images/brand/brand-3.png')
      },
      {
        id: 4,
        img: require('@/images/brand/brand-2.png')
      },
      {
        id: 5,
        img: require('@/images/brand/brand-3.png')
      },
      {
        id: 6,
        img: require('@/images/brand/brand-4.png')
      },
      {
        id: 7,
        img: require('@/images/brand/brand.png')
      },
      {
        id: 8,
        img: require('@/images/brand/brand-2.png')
      },
      {
        id: 9,
        img: require('@/images/brand/brand-3.png')
      },
      {
        id: 10,
        img: require('@/images/brand/brand-4.png')
      },
      {
        id: 11,
        img: require('@/images/brand/brand.png')
      },
      {
        id: 12,
        img: require('@/images/brand/brand.png')
      }
    ]
  },
  teamData: {
    title: 'With some of the most forward-thinking angels',
    content: 'Who are just as passionate about this space as we are',
    teamList: [
      {
        id: 1,
        img: require('@/images/client/a.jpg'),
        title: 'Jessica brown',
        meta: 'Co-founder of Scalar'
      },
      {
        id: 2,
        img: require('@/images/client/b.jpg'),
        title: 'Tim Ferris',
        meta: 'Entrepreneur'
      },
      {
        id: 3,
        img: require('@/images/client/c.jpg'),
        title: 'Belinda Johnson',
        meta: 'Attorney of Airbnb'
      },
      {
        id: 4,
        img: require('@/images/client/d.jpg'),
        title: 'Justin Kan',
        meta: 'Co-founder of Twitch'
      },
      {
        id: 5,
        img: require('@/images/client/e.jpg'),
        title: 'Alexis Ohanian',
        meta: 'Co-founder of Reddit'
      },
      {
        id: 6,
        img: require('@/images/client/f.jpg'),
        title: 'Balaji Srinivisan',
        meta: 'Entrepreneur'
      }
    ]
  },
  // ranking data
  rankingData: {
    tableHead: [
      'Collection',
      'Volume',
      '24h %',
      '7d %',
      'Floor Price',
      'Owners',
      'Assets'
    ],
    tableBody: [
      {
        id: 1,
        path: '',
        img: require('@/images/thumb/avatar.jpg'),
        authorName: 'Patternlicious',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 2,
        path: '',
        img: require('@/images/thumb/avatar-2.jpg'),
        authorName: 'Cartoonism',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 3,
        path: '',
        img: require('@/images/thumb/avatar-3.jpg'),
        authorName: 'Virtuland',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 4,
        path: '',
        img: require('@/images/thumb/avatar-3.jpg'),
        authorName: 'RockToonz',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 5,
        path: '',
        img: require('@/images/thumb/avatar-5.jpg'),
        authorName: 'CoolThings',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 6,
        path: '',
        img: require('@/images/thumb/avatar-6.jpg'),
        authorName: 'DigiPunks',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      }
    ]
  },
  // wallet data
  walletData: [
    {
      id: 1,
      img: require('@/images/brand/metamask.svg'),
      title: 'Metamask',
      content: 'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 2,
      img: require('@/images/brand/bitski.svg'),
      title: 'Bitski',
      content: 'Bitski connects communities, creators and brands through unique, ownable digital content.',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 3,
      img: require('@/images/brand/fortmatic.svg'),
      title: 'Fortmatic',
      content: 'Let users access your Ethereum app from anywhere. No more browser extensions ellipsis.',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 4,
      img: require('@/images/brand/torus.svg'),
      title: 'Torus',
      content: 'Open source protocol for connecting decentralised applications to mobile wallets.',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 5,
      img: require('@/images/brand/coinbase.svg'),
      title: 'Coinbase',
      content: 'The easiest and most secure crypto wallet. No Coinbase account required to connect EnftyMart.',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 6,
      img: require('@/images/brand/walletconnect.svg'),
      title: 'WalletConnect',
      content: 'Open source protocol for connecting decentralised applications to mobile wallets.',
      btnText: 'Connect',
      path: 'login'
    }
  ],
  walletDataTwo: [
    {
      id: 1,
      img: require('@/images/brand/metamask.svg'),
      title: 'Metamask',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 2,
      img: require('@/images/brand/bitski.svg'),
      title: 'Bitski',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 3,
      img: require('@/images/brand/fortmatic.svg'),
      title: 'Fortmatic',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 4,
      img: require('@/images/brand/torus.svg'),
      title: 'Torus',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 5,
      img: require('@/images/brand/coinbase.svg'),
      title: 'Coinbase',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 6,
      img: require('@/images/brand/walletconnect.svg'),
      title: 'WalletConnect',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 7,
      img: require('@/images/brand/bitski.svg'),
      title: 'Portis',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 8,
      img: require('@/images/brand/walletconnect.svg'),
      title: 'Fortmatic',
      btnText: 'Connect',
      path: 'login'
    },
    {
      id: 9,
      img: require('@/images/brand/walletconnect.svg'),
      title: 'Kaikas',
      btnText: 'Connect',
      path: 'login'
    },
  ],
  commentData: {
    title: '3 Comments',
    commentList: [
      {
        id: 1,
        title: 'Olivia',
        img: require('@/images/thumb/avatar.jpg'),
        date: '15 January 2020',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        btnText: 'Reply',
        replyList: [
          {
            id: 1,
            title: 'John Smith',
            img: require('@/images/thumb/avatar-2.jpg'),
            date: '23 Feb 2020',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            btnText: 'Reply'
          }
        ]
      },
      {
        id: 2,
        title: 'Mark Hardson',
        img: require('@/images/thumb/avatar-3.jpg'),
        date: '22 Jun 2020',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        btnText: 'Reply'
      }
    ]
  },
  formData: {
    title: 'Leave a Comment',
    content: 'Your email address will not be published. Required fields are marked *'
  },
  loginData: {
    img: require('@/images/thumb/remote.png'),
    title: 'Bienvenido',
    subTitle: 'inicie sesión para continuar.',
    btnText: 'Iniciar',
    haveAccountText: "No tienes una cuenta",
    btnTextTwo: 'Inscribirse',
    btnTextLink: 'Registrar',
    btns: [
      {
        title: 'Google',
        btnClass: 'bg-red-100 text-red g-btn',
        icon: 'ni-google',
        path: ''
      },
      {
        title: 'Facebook',
        btnClass: 'bg-blue-100 text-blue f-btn',
        icon: 'ni-facebook-f',
        path: ''
      },
      {
        title: 'Twitter',
        btnClass: 'bg-cyan-100 text-cyan t-btn',
        icon: 'ni-twitter',
        path: ''
      },
    ]
  },
  // login tab nav
  loginTabNav: [
    {
      id: 1,
      isActive: 'active',
      img: require('@/images/thumb/metamask.svg'),
      title: 'MetaMask',
      slug: 'meta-mask-tab',
      bsTarget: '#meta-mask'
    },
    {
      id: 2,
      img: require('@/images/thumb/Walletconnect.svg'),
      title: 'Walletconnect',
      slug: 'wallet-connect-tab',
      bsTarget: '#wallet-connect'
    }
  ],
  // login data two

  sidebarData: {
    sidebarWidget: {
      title: 'Search',
      inputText: 'Search post'
    },
    sidebarWidgetTwo: {
      title: 'Kamran Ahmed',
      img: require('@/images/thumb/avatar-4.jpg'),
      content: 'I make art with the simple goal of giving you something pleasing to look at for a few seconds.',
      icons: [
        {
          id: 1,
          icon: 'ni-facebook-f',
          path: ''
        },
        {
          id: 2,
          icon: 'ni-twitter',
          path: ''
        },
        {
          id: 3,
          icon: 'ni-instagram',
          path: ''
        },
        {
          id: 4,
          icon: 'ni-pinterest',
          path: ''
        }
      ]
    },
    sidebarWidgetThree: {
      title: 'Categories',
      catList: [
        {
          id: 1,
          title: 'Art',
          path: '/blog'
        },
        {
          id: 2,
          title: ' Virtual Worlds',
          path: '/blog'
        },
        {
          id: 3,
          title: 'Collectibles',
          path: '/blog'
        },
        {
          id: 4,
          title: 'Music',
          path: '/blog'
        },
        {
          id: 5,
          title: 'Games',
          path: '/blog'
        },
        {
          id: 6,
          title: 'Domains',
          path: '/blog'
        },
        {
          id: 7,
          title: 'Memes',
          path: '/blog'
        }
      ]
    },
    sidebarWidgetFour: {
      title: 'Recent Post',
      postList: [
        {
          id: 1,
          img: require('@/images/thumb/small-img.jpg'),
          title: 'Announcing Our $100m Raise',
          date: 'July 13, 2021',
          path: '/blog'
        },
        {
          id: 2,
          img: require('@/images/thumb/small-img-2.jpg'),
          title: 'Edition365: A Portrait Of The Year That',
          date: 'July 13, 2021',
          path: '/blog'
        },
        {
          id: 3,
          img: require('@/images/thumb/small-img-3.jpg'),
          title: 'Artist interview: Arran Schonberg',
          date: 'July 13, 2021',
          path: '/blog'
        }
      ]
    },
    sidebarWidgetFive: {
      title: 'Tags',
      tagList: [
        {
          id: 1,
          title: 'Virtual World',
          path: '/blog'
        },
        {
          id: 2,
          title: 'Art',
          path: '/blog'
        },
        {
          id: 3,
          title: 'Vision',
          path: '/blog'
        },
        {
          id: 4,
          title: 'Music',
          path: '/blog'
        },
        {
          id: 5,
          title: 'Domains',
          path: '/blog'
        },
        {
          id: 6,
          title: 'Print',
          path: '/blog'
        },
        {
          id: 7,
          title: 'Programming',
          path: '/blog'
        }
      ]
    }
  },
  // profile data
  profileData: {
    title: 'Your all items',
    items: [
      {
        id: 1,
        img: require('@/images/thumb/nft-2.jpg'),
        title: 'One Tribe Black Edition',
        byText: 'By',
        authorText: 'ZeniconStudio',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$14.20',
        priceTextTwo: 'Current bid',
        currentPrice: '1.32 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
      },
      {
        id: 2,
        img: require('@/images/thumb/nft3.jpg'),
        title: 'Operation Jade Fury',
        byText: 'By',
        authorText: 'ZeniconStudio',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$14.20',
        priceTextTwo: 'Current bid',
        currentPrice: '1.32 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
        btnTextTwo: 'Follow'
      },
      {
        id: 3,
        img: require('@/images/thumb/nft4.jpg'),
        title: 'Unboxing The Compass',
        byText: 'By',
        authorText: 'ZeniconStudio',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$14.20',
        priceTextTwo: 'Current bid',
        currentPrice: '1.32 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
        btnTextTwo: 'Follow'
      },
      {
        id: 4,
        img: require('@/images/thumb/nft5.jpg'),
        title: 'Rendering by the Water',
        byText: 'By',
        authorText: 'ZeniconStudio',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$14.20',
        priceTextTwo: 'Current bid',
        currentPrice: '1.32 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
        btnTextTwo: 'Follow'
      },
      {
        id: 5,
        img: require('@/images/thumb/nft6.jpg'),
        title: 'Divine Opulence',
        byText: 'By',
        authorText: 'DvisionNetwork',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$12.00',
        priceTextTwo: 'Current bid',
        currentPrice: '1.44 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
        btnTextTwo: 'Follow'
      },
      {
        id: 6,
        img: require('@/images/thumb/nft7.jpg'),
        title: 'Sacral Metatron Cube',
        byText: 'By',
        authorText: 'KamranMedia',
        authorLink: 'author',
        priceText: 'Price',
        givenPrice: '$11.00',
        priceTextTwo: 'Current bid',
        currentPrice: '2.33 ETH',
        btnText: 'Place Bid',
        path: 'item-details',
        btnTextTwo: 'Follow'
      },

    ],
  },
  // filter cat data
  filterCatData: {
    title: 'Category',
    catList: [
      {
        class: 'active',
        title: 'All',
        path: ''
      },
      {
        title: 'Artworks',
        path: ''
      },
      {
        title: 'Photography',
        path: ''
      },
      {
        title: 'Games',
        path: ''
      },
      {
        title: 'Metaverses',
        path: ''
      },
      {
        title: 'Music',
        path: ''
      },
      {
        title: 'Memes',
        path: ''
      },
      {
        title: 'Punks',
        path: ''
      },
      {
        title: 'Domains',
        path: ''
      },
    ]
  },
  // filter collection data
  filterCollectionData: {
    title: 'Collections',
    collectionList: [
      {
        class: 'active',
        title: 'Artworks',
        path: ''
      },
      {
        title: 'MutantApeYachtClub',
        path: ''
      },
      {
        title: 'BoredApeYachtClub',
        path: ''
      },
      {
        title: 'Meebits',
        path: ''
      },
      {
        title: 'Cool Cats',
        path: ''
      },
      {
        title: 'Cryptoadz',
        path: ''
      },
      {
        title: 'Creature World',
        path: ''
      },
      {
        title: '0N1 Force',
        path: ''
      }
    ],
    btnData: [
      'Clear',
      'Apply'
    ]
  },
  // filter sale type data
  filterSaleTypeData: {
    title: 'Sale Type',
    saleTypeList: [
      {
        class: 'active',
        title: 'Timed auction',
        path: ''
      },
      {
        title: 'Fixed price',
        path: ''
      },
      {
        title: 'Not for sale',
        path: ''
      },
      {
        title: 'Open for offers',
        path: ''
      }
    ],
    btnData: [
      'Clear',
      'Apply'
    ]
  },
  // filter recently data
  filterRecentlyData: {
    title: 'Recent',
    recentlyList: [
      {
        class: 'active',
        title: 'Recent',
        path: ''
      },
      {
        title: 'Price: Low to High',
        path: ''
      },
      {
        title: 'Price: High to Low',
        path: ''
      }
    ],
    btnData: [
      'Clear',
      'Apply'
    ]
  },
  // filter date data
  filterDateData: {
    title: '1 Day',
    dateList: [
      {
        class: 'active',
        title: '1 Day',
        path: ''
      },
      {
        title: '7 Days',
        path: ''
      },
      {
        title: '30 Days',
        path: ''
      }
    ]
  },
  socialShareList: [
    {
      title: 'Facebook',
      path: '',
      btnClass: 'ni-facebook-f'
    },
    {
      title: 'Twitter',
      path: '',
      btnClass: 'ni-twitter'
    },
    {
      title: 'Instagram',
      path: '',
      btnClass: 'ni-instagram'
    },
    {
      title: 'Email',
      path: '',
      btnClass: 'ni-emails'
    },
  ],
  placeBidModal: {
    title: 'Place a Bid',
    content: 'You are about to place a bid for <strong>The Future is Blossoming - Harlows 2021</strong> from <strong>Nathan walls</strong>',
    labelText: 'Your bid (ETH)',
    labelTextTwo: 'Enter quantity <span class="text-primary">5 available</span>',
    totalBidList: [
      {
        title: 'Your bidding balance',
        price: '0.013325 ETH'
      },
      {
        title: 'Your balance',
        price: '10.67856 ETH'
      },
      {
        title: 'Service fee 3.5%',
        price: '0.00325 ETH'
      },
      {
        title: 'You will pay',
        price: '0.013325 ETH'
      },
    ],
    btnText: 'Place a Bid',
    btnLink: 'pedido',
    btnLinkpedido: 'ordencompleta'
  },
  reportModalData: {
    title: 'Why are you reporting?',
    content: "If you believe there's been a violation of Maxibuku's Terms of Service or Community Guidelines, please complete this report.",
    contentTwo: "For all cases related to potential copyright infringement, please email <a href=\"mailto:trust@enftymart.com\">trust@enftymart.com</a> directly with a formal DMCA Takedown Request.",
    placeholderText: 'Describe why you think this page should be removed from EnftyMart.',
    btnText: 'Submit'
  },
  followersModal: {
    title: 'Why are you reporting?',
    btnText: 'Following',
    btnTextTwo: 'Followers',
    followingList: [
      {
        id: 1,
        title: 'Alex Smith',
        userName: '@alex_smith',
        path: '',
        avatar: require('@/images/thumb/avatar-4.jpg'),
        btnText: 'Follow'
      },
      {
        id: 2,
        title: 'Digital Monkey',
        userName: '@digital_monkey',
        path: '',
        avatar: require('@/images/thumb/avatar.jpg'),
        btnText: 'Follow'
      },
      {
        id: 3,
        title: 'Beejaey',
        userName: '@beejaey',
        path: '',
        avatar: require('@/images/thumb/avatar-2.jpg'),
        btnText: 'Follow'
      },
      {
        id: 4,
        title: 'Tom Dracula',
        userName: '@tom_dracula',
        path: '',
        avatar: require('@/images/thumb/avatar-3.jpg'),
        btnText: 'Follow'
      },
      {
        id: 5,
        title: 'Kevin Martin',
        userName: '@kevin_martin',
        path: '',
        avatar: require('@/images/thumb/avatar-5.jpg'),
        btnText: 'Follow'
      },
    ],
    followerList: [
      {
        id: 1,
        title: 'Digital Monkey',
        userName: '@digital_monkey',
        path: '',
        avatar: require('@/images/thumb/avatar.jpg'),
        btnText: 'Follow'
      },
      {
        id: 2,
        title: 'Beejaey',
        userName: '@beejaey',
        path: '',
        avatar: require('@/images/thumb/avatar-2.jpg'),
        btnText: 'Follow'
      },
      {
        id: 3,
        title: 'Tom Dracula',
        userName: '@tom_dracula',
        path: '',
        avatar: require('@/images/thumb/avatar-3.jpg'),
        btnText: 'Follow'
      },
      {
        id: 4,
        title: 'Kevin Martin',
        userName: '@kevin_martin',
        path: '',
        avatar: require('@/images/thumb/avatar-5.jpg'),
        btnText: 'Follow'
      },
      {
        id: 5,
        title: 'Alex Smith',
        userName: '@alex_smith',
        path: '',
        avatar: require('@/images/thumb/avatar-4.jpg'),
        btnText: 'Follow'
      }
    ]
  },
  // activity nav list
  activityNavList: [
    {
      id: 1,
      class: 'active',
      icon: require('@/images/thumb/all.svg'),
      title: 'All',
      slug: 'all-tab',
      bsTarget: '#all'
    },
    {
      id: 2,
      icon: require('@/images/thumb/art.svg'),
      title: 'Art',
      slug: 'art-tab',
      bsTarget: '#art'
    },
    {
      id: 3,
      icon: require('@/images/thumb/virtual-world.svg'),
      title: 'Virtual Worlds',
      slug: 'virtual-worlds-tab',
      bsTarget: '#virtual-worlds'
    },
    {
      id: 4,
      icon: require('@/images/thumb/icon4.svg'),
      title: 'Trending Cards',
      slug: 'trending-cards-tab',
      bsTarget: '#trending-cards'
    },
    {
      id: 5,
      icon: require('@/images/thumb/icon5.svg'),
      title: 'Collectibles',
      slug: 'collectibles-tab',
      bsTarget: '#collectibles'
    },
    {
      id: 6,
      icon: require('@/images/thumb/icon6.svg'),
      title: 'Utility',
      slug: 'utility-tab',
      bsTarget: '#utility'
    },
  ],
  // activity table head
  activityTableHead: [
    'No pedido',
    'Detalle pedido',
    'Total',
    'Fecha',
  ],
  // activity table body
  activityTableBody: {
    tableBodyList: [
      {
        id: 1,
        eventTitle: 'Created',
        itemTitle: 'The Cost" 09.27.2021, Debut Single',
        price: '0.001',
        quantity: 1,
        fromText: '	lucifer',
        toText: 'MackMoli',
        dateText: '1 day ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 2,
        eventTitle: 'Created',
        itemTitle: 'Fragment',
        price: '-',
        quantity: 0,
        fromText: 'NullAddress',
        toText: 'ValourKnight	',
        dateText: '2 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 3,
        eventTitle: 'Sale',
        itemTitle: 'RSA Cannabis',
        price: '0.02',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'amber',
        dateText: '3 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 4,
        eventTitle: 'List',
        itemTitle: 'Childhood Astronaut',
        price: '120',
        quantity: 1,
        fromText: 'ValourKnight',
        toText: 'noel',
        dateText: '4 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 5,
        eventTitle: 'Bid',
        itemTitle: 'Hunter x Hunter',
        price: '0.2',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'ValourKnight	',
        dateText: '5 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 6,
        eventTitle: 'Transfer',
        itemTitle: 'HSong1',
        price: '0.002',
        quantity: 1,
        fromText: 'lucifer',
        toText: 'NullAddress',
        dateText: '1 week ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 7,
        eventTitle: 'Bid Cancelled',
        itemTitle: 'AN EPIC AUTOGRAPHED BOLLYWOOD FILM POSTER!',
        price: '-',
        quantity: 1,
        fromText: '0x_arr1975k_29',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 8,
        eventTitle: 'Cancelled',
        itemTitle: 'Sunset #1',
        price: '-',
        quantity: 1,
        fromText: 'amber',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
    ],
    tableBodyListTwo: [
      {
        id: 1,
        eventTitle: 'Created',
        itemTitle: 'Cassanjo Project',
        price: '0.012',
        quantity: 1,
        fromText: '	lucifer',
        toText: 'MackMoli',
        dateText: '1 day ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 2,
        eventTitle: 'Created',
        itemTitle: 'Blue teddy bear #23|50',
        price: '-',
        quantity: 0,
        fromText: 'NullAddress',
        toText: 'ValourKnight	',
        dateText: '2 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 3,
        eventTitle: 'Sale',
        itemTitle: 'RSA Cannabis',
        price: '0.02',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'amber',
        dateText: '3 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 4,
        eventTitle: 'List',
        itemTitle: 'Childhood Astronaut',
        price: '120',
        quantity: 1,
        fromText: 'ValourKnight',
        toText: 'noel',
        dateText: '4 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 5,
        eventTitle: 'Bid',
        itemTitle: 'Hunter x Hunter',
        price: '0.2',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'ValourKnight	',
        dateText: '5 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 6,
        eventTitle: 'Transfer',
        itemTitle: 'HSong1',
        price: '0.002',
        quantity: 1,
        fromText: 'lucifer',
        toText: 'NullAddress',
        dateText: '1 week ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 7,
        eventTitle: 'Bid Cancelled',
        itemTitle: 'AN EPIC AUTOGRAPHED BOLLYWOOD FILM POSTER!',
        price: '-',
        quantity: 1,
        fromText: '0x_arr1975k_29',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 8,
        eventTitle: 'Cancelled',
        itemTitle: 'Sunset #1',
        price: '-',
        quantity: 1,
        fromText: 'amber',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
    ],
    tableBodyListThree: [
      {
        id: 1,
        eventTitle: 'Created',
        itemTitle: 'Deep Sea Phantasy',
        price: '0.001',
        quantity: 1,
        fromText: '	lucifer',
        toText: 'MackMoli',
        dateText: '1 day ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 2,
        eventTitle: 'Created',
        itemTitle: 'Blue teddy bear #23|50',
        price: '-',
        quantity: 0,
        fromText: 'NullAddress',
        toText: 'ValourKnight	',
        dateText: '2 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 3,
        eventTitle: 'Sale',
        itemTitle: 'RSA Cannabis',
        price: '0.02',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'amber',
        dateText: '3 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 4,
        eventTitle: 'List',
        itemTitle: 'Childhood Astronaut',
        price: '120',
        quantity: 1,
        fromText: 'ValourKnight',
        toText: 'noel',
        dateText: '4 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 5,
        eventTitle: 'Bid',
        itemTitle: 'Hunter x Hunter',
        price: '0.2',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'ValourKnight	',
        dateText: '5 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 6,
        eventTitle: 'Transfer',
        itemTitle: 'HSong1',
        price: '0.002',
        quantity: 1,
        fromText: 'lucifer',
        toText: 'NullAddress',
        dateText: '1 week ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 7,
        eventTitle: 'Bid Cancelled',
        itemTitle: 'AN EPIC AUTOGRAPHED BOLLYWOOD FILM POSTER!',
        price: '-',
        quantity: 1,
        fromText: '0x_arr1975k_29',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 8,
        eventTitle: 'Cancelled',
        itemTitle: 'Sunset #1',
        price: '-',
        quantity: 1,
        fromText: 'amber',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      }, 
    ],
    tableBodyListFour: [
      {
        id: 1,
        eventTitle: 'Created',
        itemTitle: 'Cute Astronout',
        price: '0.012',
        quantity: 1,
        fromText: '	lucifer',
        toText: 'MackMoli',
        dateText: '1 day ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 2,
        eventTitle: 'Created',
        itemTitle: 'Blue teddy bear #23|50',
        price: '-',
        quantity: 0,
        fromText: 'NullAddress',
        toText: 'ValourKnight	',
        dateText: '2 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 3,
        eventTitle: 'Sale',
        itemTitle: 'RSA Cannabis',
        price: '0.02',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'amber',
        dateText: '3 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 4,
        eventTitle: 'List',
        itemTitle: 'Childhood Astronaut',
        price: '120',
        quantity: 1,
        fromText: 'ValourKnight',
        toText: 'noel',
        dateText: '4 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 5,
        eventTitle: 'Bid',
        itemTitle: 'Hunter x Hunter',
        price: '0.2',
        quantity: 1,
        fromText: 'rohendra',
        toText: 'ValourKnight	',
        dateText: '5 days ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 6,
        eventTitle: 'Transfer',
        itemTitle: 'HSong1',
        price: '0.002',
        quantity: 1,
        fromText: 'lucifer',
        toText: 'NullAddress',
        dateText: '1 week ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 7,
        eventTitle: 'Bid Cancelled',
        itemTitle: 'AN EPIC AUTOGRAPHED BOLLYWOOD FILM POSTER!',
        price: '-',
        quantity: 1,
        fromText: '0x_arr1975k_29',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
      {
        id: 8,
        eventTitle: 'Cancelled',
        itemTitle: 'Sunset #1',
        price: '-',
        quantity: 1,
        fromText: 'amber',
        toText: '',
        dateText: '3 weeks ago',
        fromLink: '',
        toLink: ''
      },
    ],
  },
  // footer data
  footerData: {
    content: "¡Bienvenidos al paraíso de los sabores irresistibles! En los emilios te ofrecemos una explosión de delicias en cada bocado. ",
    footerList: [
      {
        id: 1,
        title: 'Combos',
        navList: [
          {
            title: 'Proximamente',
            path: '/'
          }
        
        ]
      },
      {
        id: 2,
        title: 'Direccion',
        navList: [
          {
            title: 'Boulevar Cra 70 #45e-89',
            path: 'profile'
          },
          {
            title: '3137681221',
            path: 'offers'
          }
        ]
      },
      {
        id: 3,
        title: 'Horario Domicilios',
        navList: [
          {
            title: 'Martes y Domingo',
            path: 'about-us'
          },
          {
            title: '6:30pm a 1:30am',
            path: 'blog'
          },
          {
            title: 'Lunes Festivo',
            path: 'about-us'
          },
          {
            title: '6:30pm a 1:30am',
            path: 'blog'
          }
        ]
      }
    ],
    footerListTwo: [
      {
        title: 'Rastrear pedidos',
        path: 'pedidos'
      },
      {
        title: '3137681221',
        path: 'activity'
      },
      {
        title: 'Login',
        path: 'login'
      },
  
    ]
  },
  copyTitle: 'Copyright © 2023 Newclicksoluciones.com'
}

export default SectionData
