import FavoritesStore from './FavoritesStore/FavoritesStore';
import RepositoryStore from './RepositoryStore/RepositoryStore';

class RootStore {
  repositoryStore: RepositoryStore;
  favoritesStore: FavoritesStore;

  constructor() {
    this.repositoryStore = new RepositoryStore();
    this.favoritesStore = new FavoritesStore();
  }
}

export const rootStore = new RootStore();
