import 'animate.css/animate.min.css';
import React from 'react';
import Footer from '../components/outros/footer';
import '../fonts/circular.css';
import '../fonts/homes/crusellia.css';
import '../fonts/homes/hybi4.css';
import '../fonts/homes/linotype-ego-regular.css';
import '../fonts/homes/saturdaypartygt.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <main className='main'>
        <Component {...pageProps} />
        <div id='modalWrapper'></div>
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default App
