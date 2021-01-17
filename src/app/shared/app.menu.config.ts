import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  //definición de los componentes en el menú lateral
  //route = ruta que aparecerá en el navegador cuando deseamos acceder a ese módulo

  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },

  { id: 'rentals', name: 'RENTALS', icon: 'house', route: '/main/rentals' },

  {
    id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'settings', name: 'SETTINGS', route: '/main/settings', icon: 'settings' },
      { id: 'about', name: 'ABOUT US', route: '/main/about', icon: 'help_outline' }
    ]
  },

  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },

];
