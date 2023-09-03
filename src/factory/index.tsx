import { createQueryKeyStore } from "@lukemorales/query-key-factory";

interface ITodoFilters {
  id: number;
}

const getTodos = (filters?: ITodoFilters): Promise<number[]> => {
  return new Promise<number[]>((resolve) => {
    setTimeout(() => {
      resolve(new Array(50).fill("").map((_, index) => index));
    }, 100);
  });
};

const queryKeyStore = createQueryKeyStore({
  todos: {
    list: (filters?: ITodoFilters) => ({
      queryKey: [{ ...filters }],
      queryFn: () => getTodos(filters),
    }),
    detail: (userId: string) => ({
      queryKey: [userId],
      queryFn: () => {},
    }),
  },
});

export default queryKeyStore;
