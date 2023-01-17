import React from 'react'
import "./cards__main.css"
import card_img from '../../assets/img/cards-img.webp'
import card_img1 from '../../assets/img/cards-img-2.webp'
import card_img3 from '../../assets/img/cards-img-3.webp'


function Cards__main() {
  return (
    <div className='Cars__main'>
        <div className='container'>
            <div className='cards__box'>
              <div className='cards__img-box'>
                <img className='cards__img-big' src={card_img} alt="" />
              </div>
              <div className='cards__img-box'>
                <img className='cards__img' src={card_img1} alt="" />
              </div>
              <div className='cards__img-box'>
                <img className='cards__img' src={card_img3} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cards__main