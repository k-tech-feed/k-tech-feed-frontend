interface Company {
  name: string;
  imgUrl: string;
}

interface Category {
  id: number;
  name: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  company: Company;
  pubDate: string;
  categories: Category[];
}

interface SearchResult {
  keywords: string[];
  companys: Company[];
  hashtags: string[];
}

export type { Article, Company, Category, SearchResult };
