import { iRouterConfig } from '../interface/router.interface';
export function getRoutes(routers: iRouterConfig[] | undefined, parent: string = ''): any[] {
  if (routers) {
    return routers.map(router => {
      let {
        path,
        children
      } = router
      parent && !parent.includes('/') && (parent += '/')
      return {
        name: path,
        path: `${parent ? '' : '/'}${path}`,
        component: () =>
          import(`../views/${parent}${path}/Index.vue`),
        children: getRoutes(children, path)
      }
    })
  }
  return [];
}