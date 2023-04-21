interface Author {
  id: number;
  name: string;
  logoUrl: string;
}

interface HashTag {
  id: number;
  name: string;
}

interface Article {
  id: number;
  author: Author;
  title: string;
  summary: string;
  thumbnailUrl: string;
  timestamp: string;
  hashtags: string[];
}

interface SearchResult {
  keywords: string[];
  authors: Author[];
  hashtags: string[];
}

type Trend = 'weekly' | 'monthly';

export type { Article, Author, HashTag, SearchResult, Trend };
