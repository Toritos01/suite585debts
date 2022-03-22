import * as React from "react";
import UserInterface from '../interfaces/userInterface';

export default class DebtsDisplayer extends React.Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props);
  }
  render() {
    if (this.props.name === "") {
      return (<div> <h2> Please select a user from the list. </h2> </div>)
    } else {
      return (
        <div>
          <h2>Currently selected user: {this.props.name}</h2>
          {
            (this.props.debtsList).map((debt, i) => <h4> {debt.amount} {debt.type} is owed to {debt.owedTo.name}. </h4>)
          }
          {
            (this.props.debtsList.length === 0) ? <h4> No debts owed by this user. </h4> : <span></span>
          }
        </div>
      );
    }
  }
}