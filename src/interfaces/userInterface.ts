import Debt from './debtsInterface';

export default interface User {
  name: string;
  debtsList: Debt[];
}