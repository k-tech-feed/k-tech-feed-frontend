import { useState } from 'react';

import { Navbar, Text, styled } from '@nextui-org/react';

const TrendSelect = () => {
  const [selectedTrend, setSelectedTrend] = useState('weekly');

  return (
    <TrendSelectWrapper>
      <Text size={24} weight="bold" css={{ whiteSpace: 'nowrap' }}>
        트렌드
      </Text>
      <Navbar disableShadow isCompact>
        <Navbar.Content
          css={{ display: 'flex', gap: '8px', height: 'min-content' }}
          variant="highlight"
        >
          <Navbar.Item
            isActive={selectedTrend === 'weekly'}
            onClick={() => {
              setSelectedTrend('weekly');
            }}
          >
            Weekly
          </Navbar.Item>
          <Navbar.Item
            isActive={selectedTrend === 'monthly'}
            onClick={() => {
              setSelectedTrend('monthly');
            }}
          >
            Monthly
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </TrendSelectWrapper>
  );
};

export default TrendSelect;

const TrendSelectWrapper = styled('div', {
  display: 'flex',
  gap: '32px',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
});
