import type { ErrorResponse } from '@common/types/Error';
import type { IRepository, RepositoryResponse } from '@common/types/Repository';

import api from '@common/api/axios-instance';
import { getErrorMessage } from '@common/utilities';
import { throttle } from '@common/utilities/throttle/throttle';
import { flow, makeAutoObservable } from 'mobx';
import { toast } from 'sonner';

import RequestState from '../RequestState/RequestState';

class RepositoryStore {
  repositoriesState = new RequestState<IRepository[]>([]);
  currentRepositoryState = new RequestState<IRepository>(null);
  query = '';
  sortType = '';

  constructor() {
    makeAutoObservable(this);
    this.getRepositories = throttle(this.getRepositories, 500);
  }

  setQuery = (query: string) => {
    this.query = query;
    this.getRepositories();
  };

  setSortType = (type: string) => {
    this.sortType = type;
    this.getRepositories();
  };

  getRepositories = flow(function* (this: RepositoryStore) {
    if (!this.query) {
      this.repositoriesState.fulfilled([]);
      return;
    }
    this.repositoriesState.pending();
    try {
      const fetchRepositories = yield api.get<RepositoryResponse>(`/search/repositories`, {
        params: {
          q: this.query,
          sort: this.sortType.split('/')[0],
          order: this.sortType.split('/')[1]
        }
      });
      this.repositoriesState.fulfilled(fetchRepositories.data.items);
    } catch (error) {
      if (error instanceof Error) {
        const { description } = getErrorMessage('Search', error as ErrorResponse);
        toast.error('Ошибка получения репозитория', { description });
        this.currentRepositoryState.rejected(description);
      }
    }
  });

  fetchRepositoryById = flow(function* (this: RepositoryStore, owner: string, repo: string) {
    this.currentRepositoryState.pending();
    try {
      const response = yield api.get<IRepository>(`/repos/${owner}/${repo}`);
      this.currentRepositoryState.fulfilled(response.data);
    } catch (error) {
      const { description } = getErrorMessage('Repository', error as ErrorResponse);
      toast.error('Ошибка получения репозитория', { description });
      this.currentRepositoryState.rejected(description);
    }
  });
}

export default RepositoryStore;
