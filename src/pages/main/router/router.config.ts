
import { iRouterConfig } from '../interface/router.interface';
const routers: iRouterConfig[] = [
  {
    path: 'index'
  },
  {
    path: 'list',
    children: [{
      path: 'one'
    }, {
      path: 'two'
    }]
  }
]
export default routers;