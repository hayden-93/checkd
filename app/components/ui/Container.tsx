import React from 'react';

const screenVariants = {
  none: 'max-w-none',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
} as const;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  screen?: keyof typeof screenVariants;
}

export const Container = (props: ContainerProps) => {
  const { children, className, screen = 'none' } = props;

  const classes = ['', screenVariants[screen], className].join(' ').trim();

  return <div className={classes}>{children}</div>;
};
