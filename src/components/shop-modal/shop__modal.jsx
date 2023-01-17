import React from 'react';
import addtoCard from '../../redux/addto-card';
import { useSelector } from 'react-redux';
import './shop.css';

function Shop__modal({ onOpen, onClose }) {
  const { addModal } = useSelector(addtoCard)
  console.log(addModal);
  if (!onOpen) return null;
  return (
    <div onClick={onClose} className='box__modal'>
      <div className='start__overlay'>
        <div className='exit__button'>
          <p onClick={onClose} className='left__exit-button'>X</p>
          <span className='title__cart'>Cart</span>
        </div>
      </div>
    </div>
  )
};
export default Shop__modal