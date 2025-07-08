declare global {
    interface Window {
      katex: typeof import("katex");
    }
  }


export interface BlogContent {
  id?: string;
  content_type: "text" | "media";
  content: string;
}

export interface BlogCategory {
  id: string;
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  status: boolean;
  contents: BlogContent[];
  categories: BlogCategory[];
  hashtags?: string[];
  created_at?: string;
  updated_at?: string;
}