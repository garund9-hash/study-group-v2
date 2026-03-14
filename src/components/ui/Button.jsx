import React from 'react';

export const Button = React.memo(function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  className = '',
  ...props
}) {
  const baseStyles = 'btn';
  const variantStyles = `btn-${variant}`;
  const sizeStyles = size !== 'md' ? `btn-${size}` : '';
  const widthStyles = fullWidth ? 'btn-full' : '';
  const disabledStyles = disabled ? 'btn-disabled' : '';

  const classes = [
    baseStyles,
    variantStyles,
    sizeStyles,
    widthStyles,
    disabledStyles,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});
