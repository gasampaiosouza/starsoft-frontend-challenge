export interface IProducts {
  data: IProduct[];
  metadata: Metadata;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  createdAt: string;
}

export interface Metadata {
  page: number;
  limit: number;
  count: number;
  pageCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
