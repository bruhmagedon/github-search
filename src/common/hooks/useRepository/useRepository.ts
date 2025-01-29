import { rootStore } from '@common/stores/RootStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Хук для получения репозитория и управления его состоянием
export const useRepository = () => {
  const { owner, repo } = useParams<{ owner: string, repo: string }>();
  const { currentRepositoryState: { data, isLoading, error } } = rootStore.repositoryStore;

  useEffect(() => {
    if (owner && repo) {
      // Получаю данные репозитория как попаду на его страницу, заношу это в стор
      rootStore.repositoryStore.fetchRepositoryById(owner, repo);
    }
  }, []);

  return { data, isLoading, error };
};
