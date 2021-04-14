import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Product',
    route: '/product',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Check',
        to: '/admin/check',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'FormData',
        to: '/admin/formdata',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/admin/notifications/alerts',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Charts',
        to: '/admin/charts',
        icon: 'cil-chart-pie'
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  }

]

export default _nav
