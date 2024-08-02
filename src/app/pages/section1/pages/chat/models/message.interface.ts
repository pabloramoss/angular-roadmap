export interface Message { 
  id: string;
  text: string;
  date: Date;
  isAgent: boolean;
  name?: string;
  avatar?: string;
}