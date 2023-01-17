import React from 'react';
import Carshop from "../../assets/img/car-shop.svg";
import "./about.css";

function About() {
  return (
    <div className='about__box'>
        <div className='container'>
            <div className='about__box-item'>
                <div className='box__shop'>
                    <div>
                    <img src={Carshop} alt="logo" width={56} height={45}/>
                    </div>
                    <div className='titels__shop'>
                    <h4 className='shop__title'>Free Shipping</h4>
                    <p className='shop__text'>On all orders over $75.00</p>
                    </div>
                </div>

                <div className='box__shop'>
                    <div>
                    <img src={Carshop} alt="logo" width={56} height={45}/>
                    </div>
                    <div className='titels__shop'>
                    <h4 className='shop__title'>Free Returns</h4>
                    <p className='shop__text days'>Returns are free within 9 days</p>
                    </div>
                </div>

                <div className='box__shop'>
                    <div>
                    <img src={Carshop} alt="logo" width={56} height={45}/>
                    </div>
                    <div className='titels__shop'>
                    <h4 className='shop__title'>Free Shipping</h4>
                    <p className='shop__text days'>Your payment are safe with us.</p>
                    </div>
                </div>

                <div className='box__shop'>
                    <div>
                    <img src={Carshop} alt="logo" width={56} height={45}/>
                    </div>
                    <div className='titels__shop'>
                    <h4 className='shop__title'>100% Payment Secure</h4>
                    <p className='shop__text'>On all orders over $75.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About