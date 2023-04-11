import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';
import Head from 'next/head';  // Css linking globally by the name Head in this _app file
import { ToastContainer } from 'react-toastify'; //Importing Toaster globally in this _app file
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/reset.css";

 

export default function MyApp({ Component, pageProps }) {
    return (
      <>
      <Head>
        <link rel="stylesheet" href="/css/styles.css"/>
      </Head>
      <Nav/>
      <ToastContainer position="top-right"/>
      <Component {...pageProps} />
    </>    
    )
  }

  