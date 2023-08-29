import React from 'react';

interface MatchContestantProps {
  avatarAlt: string;
  avatarSrc: string;
  className?: string;
  scoreClassName?: string;
  name: string;
  id?: string;
  score: number | string;
}

export const MatchContestant = (props: MatchContestantProps) => {
  const { className, avatarAlt, avatarSrc, name, score, scoreClassName } =
    props;

  const classes = ['flex space-x-4 text-white', className].join(' ').trim();

  return (
    <div className={classes}>
      <img
        className='w-6 h-6'
        src={avatarSrc}
        alt={avatarAlt}
        width={24}
        height={24}
      />
      <span className='block flex-1 font-bold'>{name}</span>
      <span
        className={`block text-black font-bold bg-white p-2 ${scoreClassName}`}
      >
        {score}
      </span>
    </div>
  );
};
