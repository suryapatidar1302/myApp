import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { withOrientationChange } from 'react-device-detect';
import PrepareRoutes from '../routes/PrepareRoutes';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../modules/selectors/auth';
import Header from '../components/Header';
import { Loading } from '../App';

const Layout = lazy(() => import('./Layout'));

const RenderLayout = () => {
    const isLoggedIn = useSelector(getIsAuth);

    //TODO: Add Loader here
    return (
        <React.Fragment>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                    <div>
                        <Header />
                        {isLoggedIn ? (
                            <Layout>
                                <PrepareRoutes />
                            </Layout>
                        ) : (
                            <PrepareRoutes />
                        )}
                    </div>
                </ErrorBoundary>
            </Suspense>
        </React.Fragment>
    );
};
export default withOrientationChange(RenderLayout);
