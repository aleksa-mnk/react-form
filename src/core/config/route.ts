export const enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  FORM = '/form',
  NOT_FOUND_PAGE = '/404',
}

export const navData = [
  {
    title: 'Home',
    path: AppRoutes.MAIN,
  },
  {
    title: 'Form',
    path: AppRoutes.FORM,
  },
  {
    title: 'About',
    path: AppRoutes.ABOUT,
  },
];
