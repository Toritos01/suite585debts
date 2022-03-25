import * as React from "react";
import Debt from "../interfaces/debtsInterface"
import UserInterface, { getUser } from '../interfaces/userInterface';
import Select from 'react-select'
import User from "../interfaces/userInterface";
import UserSelector from "./userSelector";
import { appModes } from "../appModes";

interface AddDebtsProps {
  userList: User[]
  setMode: any
}

export default class AddDebts extends React.Component<AddDebtsProps, {}> {
  constructor(props: AddDebtsProps) {
    super(props);
    this.state = { owedUser: {}, selectedUsers: [], amountOwed: 0, type: "", description: "", date: new Date() };

    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleOwedChange = this.handleOwedChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const CustomStyle = {
      option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected ? 'gray' : 'darkslategray',
      })
    }

    return (
      <div>
        <h2>Add new debt</h2>
        <form onSubmit={this.onSubmit}>
          <label>
            Who is owed the debt?
            <Select
              name="Owed to selector"
              options={this.generateOptions()}
              onChange={this.handleOwedChange}
              isMulti={false}
              styles={CustomStyle}
            />
          </label> <br /><br />
          <label>
            Who owes the debt? (select multiple to split the debt evenly)
            <Select
              name="Owes selector"
              options={this.generateOptions()}
              onChange={this.handleMultiChange}
              isMulti={true}
              styles={CustomStyle}
            />
          </label><br /><br />
          <label>
            How much is owed? (enter a decimal or integer) <br />
            <input type="text" value={(this.state as any).owed} onChange={(event) => this.setState({ amountOwed: parseInt(event.target.value) })} />
          </label><br /><br />

          <label>
            What currency type? <br />
            <input type="text" value={(this.state as any).type} onChange={(event) => this.setState({ type: event.target.value })} />
          </label><br /><br />

          <label>
            What is this debt for? (Enter a short description) <br />
            <input type="text" value={(this.state as any).description} onChange={(event) => this.setState({ description: event.target.value })} />
          </label><br /><br />

          <input type="submit" value="Submit" onSubmit={this.onSubmit}></input>
        </form>
      </div>
    );
  }

  handleMultiChange(option: any) {
    this.setState({ selectedUsers: option })
    console.log(this.state)
  }

  handleOwedChange(option: any) {
    let u = getUser(option.value, this.props.userList);
    this.setState({ owedUser: u });
    console.log(this.state);
  }

  generateOptions() {
    var options: any[] = [];
    (this.props.userList).forEach((user: User, i: number) => {
      options[i] = { value: user.name, label: user.name }
    })
    return options;
  }

  onSubmit(event: any) {
    event.preventDefault();
    let state: any = this.state as any
    if (state.selectedUsers.length === 0) return;

    let splitAmount = state.amountOwed / state.selectedUsers.length;

    // Set a debt for each user
    (state.selectedUsers).forEach((obj: any) => {
      console.log(obj.value)
      let u: User = getUser(obj.value, this.props.userList);
      let d: Debt = {
        owedTo: state.owedUser,
        amount: splitAmount,
        type: state.type,
        date: state.date,
        description: state.description,
      }
      u.debtsList[u.debtsList.length] = d
      console.log(u.debtsList)
      this.props.setMode(appModes.displayMode);
    })

  }
}