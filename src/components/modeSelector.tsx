import * as React from "react";
import { appModes } from "../appModes"

interface modeSelectorInterface {
  setMode: any
}

export default class ModeSelector extends React.Component<modeSelectorInterface, {}> {
  constructor(props: modeSelectorInterface) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={(event) => this.props.setMode(appModes.displayMode)}>
          See Debts
        </button>
        <button onClick={(event) => this.props.setMode(appModes.addMode)}>
          Add Debts
        </button>
        <button onClick={(event) => this.props.setMode(appModes.payMode)}>
          Pay Debts
        </button>
      </div>
    );
  }
}