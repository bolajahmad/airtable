export interface ITableProps {
  name: string;
  location: {
    city: string;
    street: string;
  };
  status: number;
  entries: {
    amount: number;
    isHomogenous: boolean;
  };
  risk: 'Low' | 'High' | 'Mid';
}