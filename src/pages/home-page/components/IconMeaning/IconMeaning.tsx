import React from 'react';
import './IconMeaning.scss';
import iconSpicy from '../../../../assets/icons/spicy.svg';
import iconVegitarian from '../../../../assets/icons/vegitarian.svg';
import iconVegan from '../../../../assets/icons/vegan.svg';

const IconMeaning = () => {
  return (
    <div className='iconsMeaningContainer'>
      <p className='iconsTitle'>the meaning of our icons:</p>
      <div className='iconsContainer'>
        <div className='iconContainer'>
          <img className='iconSpicy' src={iconSpicy} alt='icon Spicy' />
          <label>Spicy</label>
        </div>
        <div className='iconContainer'>
          <img className='icon' src={iconVegitarian} alt='icon Vegitarian' />
          <label>Vegitarian</label>
        </div>
        <div className='iconContainer'>
          <img className='icon' src={iconVegan} alt='icon Vegan' />
          <label>Vegan</label>
        </div>
      </div>
    </div>
  );
};

export default IconMeaning;
