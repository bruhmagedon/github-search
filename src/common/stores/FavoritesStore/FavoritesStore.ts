import type { IRepository } from '@common/types/Repository';

import { makeAutoObservable, reaction } from 'mobx';
import { toast } from 'sonner';

// Стор для работы с избранными репозиториями (хранение избранных репозиториев, подругрузка из из localStorage, сортировка)
class FavoritesStore {
  favorites: IRepository[] = [];
  sortType: string = '';

  constructor() {
    makeAutoObservable(this);
    this.favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    reaction(
      () => this.favorites.length,
      () => localStorage.setItem('favorites', JSON.stringify(this.favorites))
    );
  }

  setSortType = (type: string) => {
    this.sortType = type;
  };

  get sortedFavorites(): IRepository[] {
    switch (this.sortType) {
      case 'stars':
        return [...this.favorites].sort((a, b) => b.stargazers_count - a.stargazers_count);
      case 'forks':
        return [...this.favorites].sort((a, b) => b.forks_count - a.forks_count);
      case 'alphabet/desc':
        return [...this.favorites].sort((a, b) => b.full_name.localeCompare(a.full_name));
      case 'alphabet/asc':
        return [...this.favorites].sort((a, b) => a.full_name.localeCompare(b.full_name));
      default:
        return this.favorites;
    }
  }

  changeFavorite = (repository: IRepository) => {
    const isFavorite = this.favorites.some((repo) => repo.id === repository.id);
    if (isFavorite) {
      this.favorites = this.favorites.filter((repo) => repo.id !== repository.id);
      toast.error('Репозиторий удален из избранного');
    } else {
      this.favorites.push(repository);
      toast.success('Репозиторий добавлен в избранное');
    }
  };

  getReposIsFavorite = (id: number) => {
    return this.favorites.some((repo) => repo.id === id);
  };
}

export default FavoritesStore;
