// TODO: write a function to retrieve opta data from API endpoint: https://frontend-tech-test-ashy.vercel.app/api/match

import { Card } from './components/ui/Card';
import { Banner } from './components/Banner';
import { Container } from './components/ui/Container';
import { StatsList, StatsListItem } from './components/StatsList';
import { Tabs, TabsButton, TabsContent, TabsList } from './components/ui/Tabs';
import { statsLabelMap } from './utils';
import { MatchDataProvider } from './hooks';

export default function Home() {
  const stats = [
    {
      id: 4,
      fh: '71.4',
      sh: '70.7',

      type: 'possessionPercentage',
      value: '71.1',
    },
    { id: 1, fh: '8', sh: '11', type: 'totalScoringAtt', value: '19' },
    { id: 2, fh: '4', sh: '7', type: 'ontargetScoringAtt', value: '11' },
    { id: 3, fh: '4', sh: '4', type: 'wonCorners', value: '8' },
  ] as const;

  const bookings = [
    { id: 1, fh: '1', sh: '3', type: 'totalYellowCard', value: '4' },
    { id: 2, fh: '0', sh: '1', type: 'totalRedCard', value: '1' },
  ] as const;

  return (
    <MatchDataProvider>
      <Container screen='none' className='h-screen w-screen p-16 bg-black'>
        <Container screen='sm'>
          <Banner />
          <Card>
            <Tabs initialValue='general'>
              <TabsList>
                <TabsButton
                  value='overview'
                  label='Overview'
                  className='flex-1 bg-slate-500 text-white py-4 px-3'
                />
                <TabsButton
                  value='general'
                  label='General'
                  className='flex-1 py-4 px-3'
                />
                <TabsButton
                  value='home'
                  label='ARS'
                  className='flex-1 bg-slate-500 text-white py-4 px-3'
                />
                <TabsButton
                  value='away'
                  label='FUL'
                  className='flex-1 bg-slate-500 text-white py-4 px-3'
                />
                <TabsButton
                  value='player'
                  label='Player'
                  className='flex-1 bg-slate-500 text-white py-4 px-3'
                />
              </TabsList>
              <TabsContent value='overview' />
              <TabsContent value='general' className='bg-slate-700 text-white'>
                <h2 className='text-center font-bold py-4'>General</h2>
                <Tabs initialValue='fh'>
                  <TabsList className='pb-4 justify-center space-x-2'>
                    <TabsButton
                      value='ft'
                      label='Full Time'
                      className='bg-slate-800 px-4 py-2 rounded-full'
                    />
                    <TabsButton
                      value='fh'
                      label='1st Half'
                      className='px-4 py-2 rounded-full'
                    />
                    <TabsButton
                      value='sh'
                      label='2nd Half'
                      className='bg-slate-800 px-4 py-2 rounded-full'
                    />
                  </TabsList>
                  <TabsContent value='ft' />
                  <TabsContent value='fh' className='py-6'>
                    <StatsList className='space-y-4'>
                      {stats.map((s) => (
                        <StatsListItem key={s.id}>
                          <div className='flex justify-around'>
                            <span className=''>{s.fh}%</span>
                            <span className=''>{statsLabelMap[s.type]}</span>
                            <span className=''>{s.fh}%</span>
                          </div>
                          <div className=''>
                            <span className=''>{''}</span>
                            <span className=''>{''}</span>
                          </div>
                        </StatsListItem>
                      ))}
                    </StatsList>
                    <StatsList>
                      {bookings.map((b) => (
                        <li key={b.id}>
                          <span id='image'></span>
                          <span id='value'></span>
                        </li>
                      ))}
                    </StatsList>
                  </TabsContent>
                  <TabsContent value='sh' />
                </Tabs>
              </TabsContent>
              <TabsContent value='home' />
              <TabsContent value='away' />
              <TabsContent value='player' />
            </Tabs>
          </Card>
        </Container>
      </Container>
    </MatchDataProvider>
  );
}
