export default {
  // 禁止显示“菜单”按钮的路由名称
  banMenuRoutes: ['Login'],
  // 左侧菜单
  navItems: [
    {
      title: '首页',
      name: null,
      icon: 'mdi-home',
      route: 'home',
    },
    {
      title: '状态监控',
      name: 'Status',
      icon: 'mdi-speedometer',
      route: 'status',
    },
    {
      title: '关于',
      name: 'About',
      icon: 'mdi-information',
      route: 'about',
    },
  ]
}