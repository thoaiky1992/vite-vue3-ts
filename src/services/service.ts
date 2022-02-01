export interface CRUDServiceInterface<T> {
  getOne(): Promise<T>;
}

export function Service<T>() {
  return class implements CRUDServiceInterface<T> {
    async getOne(): Promise<T> {
      const result = await fetch('https://random-data-api.com/api/app/random_app');
      const data = await result.json();
      return data;
    }
  };
}
