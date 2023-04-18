import { Text, styled } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

import Badge from '@/components/atoms/Badge/Badge';
import CompanyBadge from '@/components/molecules/CompanyBadge/CompanyBadge';
import { useSearchHintQuery } from '@/hooks/queries/searchs';
import { CategoryColor } from '@/utils/categoryColors';

interface Props {
  keyword: string;
}

const SearchPopoverContent = ({ keyword }: Props) => {
  const {
    result: { keywords, companys, hashtags },
  } = useSearchHintQuery(keyword);

  return (
    <ContentWrapper>
      <ContentSection>
        <Text size={20} weight="bold">
          검색어
        </Text>
        <ContentSectionRows>
          {keywords.length === 0 && <Text weight="semibold">관련 검색어가 없습니다.</Text>}
          {keywords.map((keyword, idx) => (
            <Keyword key={idx}>
              <IconSearch color="gray" />
              <Text size={16} weight="normal">
                {keyword}
              </Text>
            </Keyword>
          ))}
        </ContentSectionRows>
      </ContentSection>
      <ContentSection>
        <Text size={20} weight="bold">
          작성자
        </Text>
        <ContentSectionRows>
          {companys.length === 0 && <Text weight="semibold">관련 작성자가 없습니다.</Text>}
          {companys.map((company, idx) => (
            <CompanyBadge key={idx} company={company} />
          ))}
        </ContentSectionRows>
      </ContentSection>
      <ContentSection>
        <Text size={20} weight="bold">
          해시태그
        </Text>
        <ContentSectionRows>
          {companys.length === 0 && <Text weight="semibold">관련 해시태그가 없습니다.</Text>}
          {hashtags.map((hashtag, idx) => (
            <Badge key={idx} color={CategoryColor(hashtag)}>
              # {hashtag}
            </Badge>
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
