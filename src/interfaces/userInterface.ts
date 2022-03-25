import Debt from './debtsInterface';

export default interface User {
  name: string;
  debtsList: Debt[];
}

/** Get a user object from the user's name. Causes an error if the userlist does not contain that user. */
export function getUser(name: string, userList: User[]) {
  if (name === "None") {
    return { name: "", debtsList: [] }
  }
  let usr: User | undefined = userList.find((value: User) => value.name === name);
  if (usr === undefined) {
    throw new Error("Invalid user.");
  } else {
    return usr;
  }
}