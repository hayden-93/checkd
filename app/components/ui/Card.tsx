import React from 'react';

const spaceVariants = {
  none: 'p-0',
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
} as const;

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  space?: keyof typeof spaceVariants;
}

export const Card = (props: CardProps) => {
  const { children, className, space = 'none' } = props;

  const classes = ['', spaceVariants[space], className].join(' ').trim();

  return <div className={classes}>{children}</div>;
};
