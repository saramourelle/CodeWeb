import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [

  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers'},
  { id: 'alquileres', name: 'ALQUILERES', icon: 'house', route: '/main/alquileres' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
];
