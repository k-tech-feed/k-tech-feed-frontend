import { startTransition } from 'react';
import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';

import { Text, styled } from '@nextui-org/react';

import { SegmentedControl } from '@/components';
import { trendAtom } from '@/recoils/atoms/trendAtom';
import { type Trend } from '@/types/data';

const TrendSelect = () => {
  const [selectedTrend, setSelectedTrend] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(trendAtom);

  const handleClickTrend = (word: Trend) => () => {
    startTransition(() => {
      setSelectedTrend(word);
    });
  };

  return (
    <TrendSelectWrapper>
      <Text size={24} weight="semibold" css={{ whiteSpace: 'nowrap', marginBottom: 0 }} as="h2">
        트렌드
      </Text>
      <SegmentedControl role="tablist">
        {['weekly', 'monthly'].map((word, idx) => (
          <SegmentedControl.Item
            key={idx}
            isSelected={selectedTrend === word}
            onClick={handleClickTrend(word as Trend)}
            role="tab"
            aria-selected={selectedTrend === word ? 'true' : 'false'}
          >
            <Text weight="semibold">{word.slice(0, 1).toUpperCase() + word.slice(1)}</Text>
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
