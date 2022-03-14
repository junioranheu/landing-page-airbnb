import Link from 'next/link';
import React from 'react';
import Styles from '../../../styles/host.navbar.module.css';
import Logo from '../../svg/logo';

export default function Navbar() {
    return (
        <div role='navigation' aria-hidden='false' className={`${Styles.navbar} animate__animated animate__fadeIn animate__faster`}>
            <Link href='/'>
                <a className={Styles.logoNavbar}>
                    <Logo height='36px' width='36px' fill='#000' />
                </a>
            </Link>

            <div className='_1rotx44'>
                <div className='_1yfbsdf'>
                    {/* <a className='_1nghxg5r' href='/askasuperhost?from=hlp'>
            <span className='_ug8ljm' style='margin-left: -18px;'>
               <span className='_52l764' style='right: -18px; z-index: 3;'>
                  <div className='_1h6n1zu' style={{display: 'inline-block', verticalAlign: 'bottom', height: '30px', width: '30px', minHeight: '1px', borderRadius: '50%'}}>
                     <img className='_9ofhsl' aria-hidden='true' alt='' decoding='async' elementtiming='LCP-target' importance='low' loading='lazy' src='https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg' data-original-uri='https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg' style='object-fit: cover; vertical-align: bottom; border-radius: 50%;'/>
                     <div className='_15p4g025' style='background-image: url(&quot;https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg&quot;); background-size: cover; border-radius: 50%;'></div>
                  </div>
               </span>
               <span className='_52l764' style='right: -9px; z-index: 2;'>
                  <div className='_1h6n1zu' style={{display: 'inline-block', verticalAlign: 'bottom', height: '30px', width: '30px', minHeight: '1px', borderRadius: '50%'}}>
                     <img className='_9ofhsl' aria-hidden='true' alt='' decoding='async' elementtiming='LCP-target' importance='low' loading='lazy' src='https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg' data-original-uri='https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg' style='object-fit: cover; vertical-align: bottom; border-radius: 50%;'/>
                     <div className='_15p4g025' style='background-image: url(&quot;https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg&quot;); background-size: cover; border-radius: 50%;'></div>
                  </div>
               </span>
               <span className='_52l764' style='right: 0px; z-index: 1;'>
                  <div className='_1h6n1zu' style={{display: 'inline-block', verticalAlign: 'bottom', height: '30px', width: '30px', minHeight: '1px', borderRadius: '50%'}}>
                     <img className='_9ofhsl' aria-hidden='true' alt='' decoding='async' elementtiming='LCP-target' importance='low' loading='lazy' src='https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg' data-original-uri='https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg' style='object-fit: cover; vertical-align: bottom; border-radius: 50%;'/>
                     <div className='_15p4g025' style='background-image: url(&quot;https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg&quot;); background-size: cover; border-radius: 50%;'></div>
                  </div>
               </span>
            </span>
            Pergunte a um Superhost 
         </a> */}
                </div>

                {/* <a aria-label='Experimente hospedar' data-testid='navigation-lys-cta' id='sticky-header-lys-cta' href='/become-a-host' className='_16r17uxx'>
                    <span className='_163rr5i'>
                        <span className='_19di23v'></span>
                    </span>

                    <span className='_tcp689'>Experimente hospedar </span>
                </a> */}
            </div>
        </div>
    )
}
