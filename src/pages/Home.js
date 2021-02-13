import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Section from '../components/ProductSection'
import chair from '../images/10.png'
import frame from '../images/Frame2.png'
import lamp from '../images/lamp.png'
import './page.css'




const HomePage = () => {

  const { fetchProducts, products } = useContext(ShopContext)


  useEffect(() => {
    fetchProducts()
    return () => {

    }
  }, [fetchProducts])


  const containerWrapper = {
    margin: '0px 35px',
    display: 'flex',
    backgroundColor: '#f8f1ff',
    height: '450px',
    overflow: 'hidden',
    borderTopLeftRadius: '50px'
  }



  return (
    <div className="wrapper">
      <div style={containerWrapper}>
        <div className="text-wrapper">
          <div className="textWrap">
            <p>New Arrivals</p>
            <h2>Forma Milkyway</h2>
            <h2>Ivory Chair</h2>
          </div>

          <div className="butto-wrapper">
            <button className="button">
              Colored
            </button>
          </div>
          <div className="icon-wrapper">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />

          </div>
        </div>
        <div className="image-wrapper">
          <img src={chair} alt="chair" className="image" />
        </div>
        <div className="image-grid">
          <img src={lamp} alt="lamp" className="image-frame" />
          <img src={frame} alt="frame" className="image-frame" />
        </div>
      </div>
      <Section products={products} />
    </div>
  )
}

export default HomePage
