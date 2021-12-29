import { AppProps } from 'next/app';

import Header from '../components/Header'
import { GlobalStyle } from '../styles/globalStyles';

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />;
            <GlobalStyle />
            <ToastContainer />
        </>
    );
}

export default MyApp

