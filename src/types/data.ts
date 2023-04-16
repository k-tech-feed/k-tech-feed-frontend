interface CompanyPubdate {
  companyName: string;
  pubDate: string;
}

interface Article extends CompanyPubdate {}

export type { Article, CompanyPubdate };
