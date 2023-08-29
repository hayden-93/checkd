'use client';

import React from 'react';
import { Card } from './ui/Card';
import { useMatchData } from '../hooks';
import { MatchContestant } from './MatchContestant';

export const Banner = () => {
  const { competition } = useMatchData();

  return (
    <Card className='bg-banner p-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <a href='#' className='text-gray-300 text-sm underline'>
          {competition.name}
        </a>
        <span className='text-white font-bold'>FT</span>
      </div>
      <div className=''>
        <MatchContestant
          id='team'
          avatarSrc='https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png'
          avatarAlt='Arsenal badge'
          name='Arsenal'
          score={2}
          scoreClassName='rounded-t-md'
        />
        <MatchContestant
          id='team'
          avatarSrc='https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png'
          avatarAlt='Fulham badge'
          name='Fulham'
          score={2}
          scoreClassName='rounded-b-md'
        />
      </div>
    </Card>
  );
};
