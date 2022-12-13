export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

export interface ICartState {
  items: Item[];
  totalAmount: number;
}

export interface ICartContext extends ICartState {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}
