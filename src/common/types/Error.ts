export type ErrorType = 'Repository' | 'Search';

export type ErrorMessages = {
  [key in ErrorType]: {
    [status: number]: string;
  };
};

export interface ErrorResponse {
  message?: string;
  request?: unknown;
  response?: {
    status: number;
    data: {
      message?: string;
    };
  };
}
