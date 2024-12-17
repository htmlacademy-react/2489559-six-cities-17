export interface ReviewsBase {
  id: string;
  date: string;
  comment: string;
  rating: number;
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface Reviews extends ReviewsBase {
  user: User;
}
