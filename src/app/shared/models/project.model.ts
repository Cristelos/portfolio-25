export interface Project {
  id: number;
  image: string;
  title: string;
  category: Category[];
  url: string;
  description: string;
  date: string;
  git: string;
  layout?: { col: number; row: number };
}

export interface Category{
  id: string,
  name: string,
}
