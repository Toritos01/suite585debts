import User from './userInterface';

export default interface Selector {
  userList: User[]
  setUser: (user: User) => void
}