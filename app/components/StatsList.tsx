import React from 'react';

interface StatsListProps {
  children: React.ReactNode;
  className?: string;
}

export const StatsList = (props: StatsListProps) => {
  const { children, className } = props;

  const classes = ['', className].join(' ').trim();

  return <ul className={classes}>{children}</ul>;
};

interface StatsListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StatsListItem = (props: StatsListItemProps) => {
  const { children, className } = props;

  const classes = ['', className].join(' ').trim();

  return <li className={classes}>{children}</li>;
};
