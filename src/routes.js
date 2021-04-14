import React from 'react';

const Charts = React.lazy(() => import('./admins/charts/Charts'));
const Dashboard = React.lazy(() => import('./admins/dashboard/Dashboard'));
const Alerts = React.lazy(() => import('./admins/notifications/alerts/Alerts'));
const Check = React.lazy(() => import('./admins/check/Check'));
const FormData = React.lazy(() => import('./admins/formData/FormData'));

const routes = [
  { path: '/admin', exact: true, name: 'Admin' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/charts', name: 'Charts', component: Charts },
  { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/admin/check', exact: true, name: 'Check', component: Check },
  { path: '/admin/formdata', exact: true, name: 'FormData', component: FormData }
];

export default routes;
