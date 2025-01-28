import { makeAutoObservable } from 'mobx';

class RequestState<T> {
  isLoading: boolean = false;
  error: string | null = null;
  data: T | null = null;

  constructor(defaultData: T | null = null) {
    makeAutoObservable(this);
    this.data = defaultData;
  }

  pending = () => {
    this.isLoading = true;
    this.error = null;
  };

  fulfilled = (data: T) => {
    this.isLoading = false;
    this.data = data;
    this.error = null;
  };

  rejected = (error: string) => {
    this.isLoading = false;
    this.error = error;
  };
}

export default RequestState;
