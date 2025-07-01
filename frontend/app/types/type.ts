export type BlogType = {
  _id: string;

  title: string;
  summary: string;
  createdAt: string;
  author: {
    _id: string;
    fullName: string;
  };
};
