import { Suspense } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';
import LoadingSpinner from '../components/Loader/Loader';

function MobileLayout(props) {
    return (
        <>
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <LoadingSpinner withcoverbg="true" position="center" />
                    }
                >
                    {props.children}
                </Suspense>
            </ErrorBoundary>
        </>
    );
}
export default MobileLayout;
