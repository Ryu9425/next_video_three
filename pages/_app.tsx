import "../styles/globals.scss";
import type {AppProps} from 'next/app'
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function MyApp({Component, pageProps}: AppProps) {
    return <div className="app">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </div>
}

export default MyApp
