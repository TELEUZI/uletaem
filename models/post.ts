export interface Post {
  title: string;
  coverImage?: { url: string };
  date: string;
  excerpt: string;
  author?: { name: string; picture: string };
  slug: string;
}
