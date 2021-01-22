import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [


{ id: 'home', name: 'HOME', icon: 'remove_red_eye', route: '/main/home' },
 { id: 'general_menu', name: 'MENU', icon: '', opened: true,

  items: [

     {
      id: 'rentals',
       name: 'RENTALS',
       tooltip: 'RENTALS_CONTENT',
       route: '/main/rentals',
       icon: 'house',

      },

      {
        id: 'room',
         name: 'ROOM',
         tooltip: 'ROOM_CONTENT',
         route: '/main/room',
         icon: 'house',

        },


       {
         id: 'flat',
        name: 'FLAT',
        tooltip: 'FLAT_CONTENT',
          route: '/main/flat',
        icon: 'house',

      },

      {
        id: 'about',
       name: 'ABOUT',
       tooltip: 'ABOUT_CONTENT',
         route: '/main/about',
       icon: 'help_outline',

     },


    ]
 },

  {
    id: 'configuration', name: 'CONFIGURATION', icon: '', opened: false,
    items: [
      { id: 'settings', name: 'SETTINGS', route: '/main/settings', icon: 'settings' },

    ]
  },

  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }

]
