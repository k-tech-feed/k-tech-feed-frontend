import { Text, styled } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

import Badge from '@/components/atoms/Badge/Badge';
import CompanyBadge from '@/components/molecules/CompanyBadge/CompanyBadge';
import { useSearchQuery } from '@/hooks/queries/searchs';
import { CategoryColor } from '@/utils/categoryColors';

interface Props {
  keyword: string;
}

const SearchPopoverContent = ({ keyword }: Props) => {
  const {
    result: { keywords, companys, hashtags },
  } = useSearchQuery(keyword);

  return (
    <ContentWrapper>
      <ContentSection>
        <Text size={20} weight="bold">
          검색어
        </Text>
        <ContentSectionRows>
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
