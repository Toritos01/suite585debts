import * as React from "react";
import SelectorInterface from '../interfaces/selectorInterface';
import User from '../interfaces/userInterface';

export default class UserSelector extends React.Component<SelectorInterface, {}> {
  constructor(props: SelectorInterface) {
    super(props);
  }
  render() {
    return (
      <div>
        Select User:&nbsp;
        <select name="users" id="users" onChange={(event) => this.props.setUser(this.getUser(event.target.value))}>
          <option value="None"></option>
          {
            (this.props.userList).map((user, i) => <option value={user.name}>{user.name}</option>)
          }
        </select>
      </div>
    );
  }

  /** Get a user object from the user's name. Causes an error if the userlist does not contain that user. */
  getUser(name: string) {
    if (name === "None") {
      return { name: "", debtsList: [] }
    }
    let usr: User | undefined = this.props.userList.find((value: User) => value.name === name);
    if (usr === undefined) {
      fail("Invalid user.");
    } else {
      return usr;
    }
  }
}