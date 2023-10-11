import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RoutePaths } from '../modules/consts/enum';
import { getIsAuth } from '../modules/selectors/auth';

const AuthGuard = ({ children }) => {
    const isAuth = useSelector(getIsAuth);

    return isAuth ? <Redirect to={RoutePaths.PasswordGenerator} /> : children;
};

export default AuthGuard;
