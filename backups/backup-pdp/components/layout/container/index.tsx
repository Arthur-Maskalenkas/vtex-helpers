import React, { HTMLAttributes } from 'react';

type ContainerProps = {
  withGutter?: boolean;
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  flexGrow?: string
  childrensWithBorder?: boolean
  ignoreAsideGutterm?: boolean
} & HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({
  withGutter,
  children,
  alignItems = 'unset',
  direction = 'column',
  justifyContent = 'unset',
  flexGrow = 'unset',
  childrensWithBorder,
  className,
  ...rest }) => {
  const padding = withGutter ? '20px' : '0'
  const classNameResolved = `container-app-container ${childrensWithBorder && 'childrens-with-border'} ${className}`

  const containerStyle: React.CSSProperties = {
    paddingLeft: padding,
    paddingRight: padding,
    width: '100%',
    display: 'flex',
    alignItems,
    flexGrow,
    justifyContent,
    flexDirection: direction
  };

  return (
    <div className={classNameResolved} style={containerStyle} {...rest}>
      {children}
    </div>
  );
};

