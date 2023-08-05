import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ preventDefault, stopPropagation, children, ...props }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (preventDefault) {
      event.preventDefault();
    }

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (props?.onClick) {
      props?.onClick(event);
    }
  };

  return <button className='container-app-button' {...props} onClick={handleClick} >{children}</button>;
};
