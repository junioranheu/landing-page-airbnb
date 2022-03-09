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
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default App
