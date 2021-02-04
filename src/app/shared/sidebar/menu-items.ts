import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Arrecadação',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [{
      path: '/component/iptu',
      title: 'IPTU',
      icon: 'mdi mdi-blur-radial',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/iptu',
      title: 'IPTU',
      icon: 'mdi mdi-blur-radial',
      class: '',
      extralink: false,
      submenu: []
    }]
  },
  {
    path: '/component/iptu',
    title: 'IPTU',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/iptr',
    title: 'ITR',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '',
    title: 'Segurança',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: [
      {
        path: '/component/homicidio',
        title: 'Homicídio',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: true,
        submenu: []
      },
      {
        path: '/component/ocorrenciaarmafogo',
        title: 'Arma de fogo',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: true,
        submenu: []
      },
      {
        path: '/component/ocorrenciafurtoroubo',
        title: 'Arma de fogo',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: true,
        submenu: []
      }
  ]
  },
  {
    path: '/component/homicidio',
    title: 'Homicídio',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/ocorrenciaarmafogo',
    title: 'Arma de Fogo',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/ocorrenciafurtoroubo',
    title: 'Ocorrência Furto e Roubo',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  }

  // {
  //   path: '',
  //   title: 'Educação',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: [{
  //     path: '/component/aluno',
  //     title: 'Aluno',
  //     icon: 'mdi mdi-blur-radial',
  //     class: '',
  //     extralink: true,
  //     submenu: []
  //   }]
  // },
  // {
  //   path: '/component/aluno',
  //   title: 'Aluno',
  //   icon: 'mdi mdi-blur-radial',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // }
  
];
