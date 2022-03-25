import * as React from "react";
import { useReducer } from "react";
import Debt from "../interfaces/debtsInterface"
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
            (this.props.debtsList).map((debt) => this.renderDebt(debt))
          }
          {
            (this.props.debtsList.length === 0) ? <h4> No debts owed by this user. </h4> : <span></span>
          }
        </div>
      );
    }
  }

  renderDebt(debt: Debt) {
    return (
      <div>
        {debt.date.toLocaleDateString("en-US")}: {debt.amount} {debt.type} is owed to {debt.owedTo.name}.
        <button onClick={(event) => {
          if (debt.showDescription === undefined) {
            debt.showDescription = true;
          } else {
            debt.showDescription = !(debt.showDescription || false)
          }
          this.forceUpdate();
        }}>
          Show Description
        </button>
        {debt.showDescription && <span><br />{debt.description}</span>}
      </div>
    );
  }

}