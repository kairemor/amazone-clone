import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_fr-FR._CB406827366_.jpg"
        alt="" />

      <div className="home__row">
        <Product key={1} image={'https://media.ldlc.com/r1600/ld/products/00/05/27/22/LD0005272256_2.jpg'} title={'Apple iPad mini 5 Wi-Fi 64 Go Or'} price={1232} id={1} rating={5} />
        <Product key={2} image={'https://ae01.alicdn.com/kf/H3b1b94d08752423196a2ac558e243b7f6/116-Plus-Smart-Watch-Wristband-Sports-Fitness-Blood-Pressure-Heart-Rate-Call-Message-Reminder-Android-Pedometer.jpg_q50.jpg'} title={'116 Plus Smart Watch Wristband Sports Fitness Blood Pressure Heart Rate Call Message Reminder Android Pedometer Smart Watch'} price={132} id={2} rating={5} />
      </div>

      <div className="home__row">
        <Product key={3} image={'https://images-na.ssl-images-amazon.com/images/I/91wid0n8V6L._SL1500_.jpg'} title={'Land Baby Bag Backpack Stylish Diaper Bag Designer Baby Back Pack for Mom Dad'} price={32} id={3} rating={4} />
        <Product key={4} image={'https://media.ldlc.com/r1600/ld/products/00/05/27/22/LD0005272256_2.jpg'} title={'Apple iPad mini 5 Wi-Fi 64 Go Or'} price={1232} id={4} rating={5} />
        <Product key={5} image={'https://media.ldlc.com/r1600/ld/products/00/05/27/22/LD0005272256_2.jpg'} title={'Apple iPad mini 5 Wi-Fi 64 Go Or'} price={1232} id={5} rating={5} />
      </div>

      <div className="home__row">
        <Product key={6} image={'https://media.ldlc.com/r1600/ld/products/00/05/27/22/LD0005272256_2.jpg'} title={'Apple iPad mini 5 Wi-Fi 64 Go Or'} price={1232} id={6} rating={5} />
      </div>

    </div>

  )
}

export default Home
