interface AdminUser {
  username: string;
  id: number;
}

interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  category: Category;
  images: string[];
  created_at: string;
}

interface AdminFormType {
  username: string;
  password: string;
}

interface Category {
  name: string;
  id: number;
}
interface ContentInterface {
  title: string;
  step: string;
  content: string;
}
