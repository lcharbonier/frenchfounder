import React, { useState } from 'react';
import { Button } from './styles';

export default () => {
  const [isActive, setIsActive] = useState(false);

  const toogle = () => {
    setIsActive(!isActive);
  };

  return (
    <Button>
      {isActive ? (
        <i className="fas fa-heart" onClick={toogle}></i>
      ) : (
        <i className="far fa-heart" onClick={toogle}></i>
      )}
    </Button>
  );
};
