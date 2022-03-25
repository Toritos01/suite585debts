import User from './userInterface';

/** A Debt is owed to a user, has an amount, and a type of currency */
export default interface Debt {
  owedTo: User;
  amount: number;
  type: string;
  date: Date;
  description: string;
  showDescription?: boolean;
}