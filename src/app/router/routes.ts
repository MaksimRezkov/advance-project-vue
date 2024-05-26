import { RouteRecordRaw } from 'vue-router';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';

export enum Routes {
  HOME = 'home',
  LOGIN = 'login',
  ABOUT = 'about',
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.LOGIN]: '/login',
}

export const RouteNames: Record<Routes, string> = {
  [Routes.HOME]: 'Главная',
  [Routes.ABOUT]: 'О приложении',
  [Routes.LOGIN]: 'Авторизация',
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.home,
    name: RouteNames.home,
    component: Home,
  },
  {
    path: RoutePaths.login,
    name: RouteNames.login,
    component: Login,
  }
];
