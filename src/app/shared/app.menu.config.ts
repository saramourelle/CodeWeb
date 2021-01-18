import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  //definición de los componentes en el menú lateral
  //route = ruta que aparecerá en el navegador cuando deseamos acceder a ese módulo

 { id: 'general_menu', name: 'GENERAL MENU', icon: '', opened: true,
    items: [

      { id: 'home', name: 'HOME', icon: 'remove_red_eye', route: '/main/home' },

     {
      id: 'rentals',
       name: 'RENTALS',
       tooltip: 'RENTALS_CONTENT',
       route: '/main/rentals',
       icon: 'house',
        // image: 'assets/images/ic_clientes.png',
        // component: CustomersCardComponent
      },



     {
       id: 'about',
       name: 'ABOUT US',
       tooltip: 'ABOUT_CONTENT',
        route: '/main/about',
       icon: 'information',
      //   image: 'assets/images/ic_clientes.png',
      //   component: CustomersCardComponent
      }
    ]
 },

  {
    id: 'configuration', name: 'CONFIGURATION', icon: '', opened: false,
    items: [
      { id: 'settings', name: 'SETTINGS', route: '/main/settings', icon: 'settings' },
      { id: 'about', name: 'ABOUT US', route: '/main/about', icon: 'help_outline' }
    ]
  },

  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }

]
