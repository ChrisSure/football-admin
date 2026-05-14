export type CreateSourcePayload = {
  title: string;
  url: string;
  key: string;
  projectId: number;
};

export type UpdateSourcePayload = {
  id: number;
  projectId: number;
  title?: string;
  url?: string;
  key?: string;
  status?: string;
};

export type DeleteSourcePayload = {
  id: number;
  projectId: number; // Used for cache invalidation
};
