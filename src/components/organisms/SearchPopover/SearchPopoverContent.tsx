import Link from 'next/link';
import { type KeyboardEvent, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { Text, styled } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

import { AuthorBadge, HashTagBadge } from '@/components';
import { useRelatedQueries } from '@/hooks/queries/searchs';
import usePopover from '@/hooks/utils/usePopover';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

interface Props {
  keyword: string;
  firstA11yElement?: React.MutableRefObject<HTMLElement | null>;
  lastA11yElement?: React.MutableRefObject<HTMLElement | null>;
}

const SearchPopoverContent = ({ keyword }: Props) => {
  const { keywords, authors, hashtags } = useRelatedQueries(keyword);
  const { closePopover } = usePopover();
  const setInputValue = useSetRecoilState(searchInputAtom);
  const firstElement = useRef<HTMLElement>(null);

  const handleClickSearchResult = (resultKeyword: string) => () => {
    setInputValue(resultKeyword);
    closePopover();
  };

  const handleKeyDownFirstElement = (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
      closePopover();
    }
  };

  const handleKeyDownLastElement = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
      closePopover();
    }
    if (e.key === 'Tab') {
      if (e.shiftKey) return;
      e.preventDefault();
      firstElement.current?.focus();
    }
  };

  return (
    <>
      <ContentWrapper>
        <ContentSection>
          <Text
            size={20}
            weight="semibold"
            as="h3"
            tabIndex={0}
            ref={firstElement}
            onKeyDown={handleKeyDownFirstElement}
          >
            검색어
          </Text>
          <ContentSectionRows>
            {keywords?.length === 0 && (
              <Text weight="semibold" tabIndex={0}>
                관련 검색어가 없습니다.
              </Text>
            )}
            {keywords?.map((keyword, idx) => (
              <Link
                key={idx}
                aria-label={`검색어 ${keyword}`}
                href={`/keyword/${keyword}`}
                onClick={handleClickSearchResult(keyword)}
              >
                <Keyword>
                  <IconSearch color="gray" />
                  <Text size={16} weight="normal">
                    {keyword}
                  </Text>
                </Keyword>
              </Link>
            ))}
          </ContentSectionRows>
        </ContentSection>
        <ContentSection>
          <Text size={20} weight="semibold" tabIndex={0} as="h3">
            작성자
          </Text>
          <ContentSectionRows>
            {authors?.length === 0 && (
              <Text weight="semibold" tabIndex={0}>
                관련 작성자가 없습니다.
              </Text>
            )}
            {authors?.map((author, idx) => (
              <AuthorBadge
                key={idx}
                aria-label={`작성자 ${author.name}`}
                author={author}
                onClick={handleClickSearchResult(author.name)}
              />
            ))}
          </ContentSectionRows>
        </ContentSection>
        <ContentSection>
          <Text size={20} weight="semibold" tabIndex={0} as="h3">
            해시태그
          </Text>
          <ContentSectionRows>
            {hashtags?.length === 0 && (
              <Text weight="semibold" tabIndex={0}>
                관련 해시태그가 없습니다.
              </Text>
            )}
            {hashtags?.map((hashtag, idx) => (
              <HashTagBadge
                key={idx}
                aria-label={`해시태그 ${hashtag}`}
                hashtag={hashtag}
                onClick={handleClickSearchResult(hashtag)}
              />
            ))}
          </ContentSectionRows>
        </ContentSection>
      </ContentWrapper>
      <LastFocusedElement
        tabIndex={0}
        aria-label="Enter 키를 입력하면 대화상자를 종료합니다."
        onKeyDown={handleKeyDownLastElement}
      />
    </>
  );
};

export default SearchPopoverContent;

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const ContentSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const ContentSectionRows = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const Keyword = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

const LastFocusedElement = styled('button', {
  padding: 0,
  margin: 0,
  border: 'none',
});
