import * as React from "react";
import SelectorInterface from '../interfaces/selectorInterface';
import User, { getUser } from '../interfaces/userInterface';

export default class UserSelector extends React.Component<SelectorInterface, {}> {
  constructor(props: SelectorInterface) {
    super(props);
  }
  render() {
    return (
      <div>
        Select User:&nbsp;
        <select name="users" id="users" onChange={(event) => this.props.setUser(getUser(event.target.value, this.props.userList))}>
          <option value="None"></option>
          {
            (this.props.userList).map((user, i) => <option value={user.name}>{user.name}</option>)
          }
        </select>
      </div>
    );
  }
}