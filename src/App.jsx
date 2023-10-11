import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './modules/store';
import './scss/style.scss';
import RenderLayout from './layouts/RenderLayout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { interceptor } from './utils/interceptor';
import { Router } from 'react-router-dom';
import browserHistory from './utils/history';
import { ChakraProvider, Spinner } from '@chakra-ui/react';

export const Loading = () => (
    <div className="pt-3 text-center">
        <div
            className="spinner-grow flex justify-center justify-items-center items-center"
            role="status"
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </div>
    </div>
);

const App = () => {
    interceptor();
    return (
        <ChakraProvider>
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Suspense fallback={<Loading />}>
                        <ErrorBoundary>
                            <RenderLayout />
                        </ErrorBoundary>
                    </Suspense>
                </Router>
            </Provider>
        </ChakraProvider>
    );
};

export default App;
