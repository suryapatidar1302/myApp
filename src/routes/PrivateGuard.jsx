import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RoutePaths } from '../modules/consts/enum';
import { getIsAuth } from '../modules/selectors/auth';

const PrivateGuard = ({ children }) => {
    const isAuth = useSelector(getIsAuth);

    return isAuth ? children : <Redirect to={RoutePaths.Login} />;
};

export default PrivateGuard;
