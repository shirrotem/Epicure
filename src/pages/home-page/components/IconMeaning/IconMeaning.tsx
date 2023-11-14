import React from 'react';
import './IconMeaning.scss';
import { IconMeaningProps } from '../../../../data/types/icon';

const IconMeaning: React.FC<IconMeaningProps> = ({icons}) => {
  return (
    <div className='iconsMeaningContainer'>
      <p className='iconsTitle'>the meaning of our icons:</p>
      <div className='iconsContainer'>
        {icons.map((icon, index) => (
          <div className='iconContainer' key={index}>
            <img className='icon' src={icon.icon} alt={`icon ${icon.name}`} />
            <label>{icon.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconMeaning;
