import { useState } from 'react';

import { Text, styled } from '@nextui-org/react';

import { SegmentedControl } from '@/components';

const TrendSelect = () => {
  const [selectedTrend, setSelectedTrend] = useState('Weekly');

  return (
    <TrendSelectWrapper>
      <Text size={24} weight="bold" css={{ whiteSpace: 'nowrap' }}>
        트렌드
      </Text>
      <SegmentedControl>
        {['Weekly', 'Monthly'].map((word, idx) => (
          <SegmentedControl.Item
            key={idx}
            isSelected={selectedTrend === word}
            onClick={() => {
              setSelectedTrend(word);
            }}
          >
            <Text weight="semibold">{word}</Text>
          </SegmentedControl.Item>
        ))}
      </SegmentedControl>
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
