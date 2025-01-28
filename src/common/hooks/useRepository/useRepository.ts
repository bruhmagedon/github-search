import { rootStore } from '@common/stores/RootStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useRepository = () => {
  const { owner, repo } = useParams<{ owner: string, repo: string }>();
  const { currentRepositoryState: { data, isLoading, error } } = rootStore.repositoryStore;

  useEffect(() => {
    if (owner && repo) {
      rootStore.repositoryStore.fetchRepositoryById(owner, repo);
    }
  }, []);

  return { data, isLoading, error };
};
