/// <reference types="react-scripts" />

interface CoffeeType {
  id: number;
  title: string;
  content: string;
  price: number;
}

interface BestCoffeeType {
  id: number;
  rank: number;
  title: string;
  content: string;
  price: number;
}

interface ContextStorageType {
  stock: number;
  setStock: React.Dispatch<React.SetStateAction<number>>;
}
