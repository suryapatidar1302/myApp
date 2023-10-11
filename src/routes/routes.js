import React from 'react';
import { Guardtypes, RoutePaths } from '../modules/consts/enum';

const NotFound = React.lazy(() => import('../pages/Page404'));
const Home = React.lazy(() => import('../pages/Home'));

const routes = [
    {
        path: RoutePaths.Home,
        component: Home,
        exact: true,
        guard: Guardtypes.Public,
    },
    {
        path: RoutePaths.NotFound,
        component: NotFound,
    },
];

export default routes;
