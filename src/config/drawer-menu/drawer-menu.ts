export interface IDrawerMenu {
  icon: string;
  key: string;
  lang: string;
  href: string;
  size?: number;
  children?: Array<IDrawerMenu>;
}

export const DrawerMenuItems: Array<IDrawerMenu> = [
  {
    icon: 'dash-board-icon',
    key: 'drawer.dashboard',
    lang: 'drawer.dashboard',
    size: 20,
    href: '/asdasd',
    children: [
      {
        icon: 'user',
        key: 'drawer.dashboard',
        lang: 'drawer.dashboard',
        href: '/table'
      },
      {
        icon: 'set-up',
        key: 'drawer.dashboard',
        lang: 'drawer.dashboard',
        href: '/editor'
      },
      {
        icon: 'post-card',
        key: 'drawer.dashboard',
        lang: 'drawer.dashboard',
        href: '/asdas'
      }
    ]
  },
  {
    icon: 'localtion',
    key: 'drawer.dashboard',
    lang: 'drawer.dashboard',
    href: '/'
  },
  {
    icon: 'price-tag',
    key: 'drawer.dashboard',
    lang: 'drawer.dashboard',
    href: '/asdasds',
    children: [
      {
        icon: 'price-tag',
        key: 'drawer.dashboard',
        lang: 'drawer.dashboard',
        href: '/asdasd121'
      }
    ]
  },
  {
    icon: 'star',
    key: 'drawer.dashboard',
    lang: 'drawer.dashboard',
    href: '/asdasd'
  },
  {
    icon: 'setting',
    key: 'drawer.dashboard',
    lang: 'drawer.dashboard',
    href: '/asdasd'
  }
];
