import 'animate.css/animate.min.css';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/outros/footer';
import '../fonts/circular.css';
import '../fonts/homes/crusellia.css';
import '../fonts/homes/hybi4.css';
import '../fonts/homes/linotype-ego-regular.css';
import '../fonts/homes/saturdaypartygt.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <main className='main'>
        <ToastContainer />
        <Component {...pageProps} />
        <div id='modalWrapper'></div>
        <Footer />
      </main>
    </Fragment>
  )
}

export default App
