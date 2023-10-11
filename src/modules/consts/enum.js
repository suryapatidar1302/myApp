export const Guardtypes = {
    Private: 'private',
    Public: 'public',
    Auth: 'auth',
};

export const RoutePaths = {
    Home: '/',
    Login: '/login',
    NotFound: '/*',
};

export const AuthKeys = {
    accessToken: 'accessToken',
    idToken: 'idToken',
    uDetails: 'uDetails',
};

export const GuestStatus = {
    needsAction: 'needsAction',
    tentative: 'tentative',
    accept: 'accepted',
    declined: 'declined',
};

export const slotOptions = Array(5).fill({
    value: 'X',
    label: 'xx:xx - xx:xx',
});
