interface Author_detail {
  name: string;
  username: string;
  avatar_path?: any;
  rating: number;
}

interface Result {
  author: string;
  author_details: Author_detail;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IMovieReviews {
  id: number;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
