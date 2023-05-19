import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

import { Text, styled } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

import { AuthorBadge, HashTagBadge } from '@/components';
import { useRelatedQueries } from '@/hooks/queries/searchs';
import usePopover from '@/hooks/utils/usePopover';
import { searchInputAtom } from '@/recoils/atoms/searchInputAtom';

interface Props {
  keyword: string;
}

const SearchPopoverContent = ({ keyword }: Props) => {
  const { keywords, authors, hashtags } = useRelatedQueries(keyword);
  const { closePopover } = usePopover();
  const setInputValue = useSetRecoilState(searchInputAtom);

  const handleClickSearchResult = (resultKeyword: string) => () => {
    setInputValue(resultKeyword);
    closePopover();
  };

  return (
    <ContentWrapper>
      <ContentSection>
        <Text size={20} weight="bold">
          검색어
        </Text>
        <ContentSectionRows>
          {keywords?.length === 0 && <Text weight="semibold">관련 검색어가 없습니다.</Text>}
          {keywords?.map((keyword, idx) => (
            <Link key={idx} href={`/keyword/${keyword}`} onClick={handleClickSearchResult(keyword)}>
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
        <Text size={20} weight="bold">
          작성자
        </Text>
        <ContentSectionRows>
          {authors?.length === 0 && <Text weight="semibold">관련 작성자가 없습니다.</Text>}
          {authors?.map((author, idx) => (
            <AuthorBadge key={idx} author={author} onClick={handleClickSearchResult(author.name)} />
          ))}
        </ContentSectionRows>
      </ContentSection>
      <ContentSection>
        <Text size={20} weight="bold">
          해시태그
        </Text>
        <ContentSectionRows>
          {hashtags?.length === 0 && <Text weight="semibold">관련 해시태그가 없습니다.</Text>}
          {hashtags?.map((hashtag, idx) => (
            <HashTagBadge key={idx} hashtag={hashtag} onClick={handleClickSearchResult(hashtag)} />
          ))}
        </ContentSectionRows>
      </ContentSection>
    </ContentWrapper>
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
