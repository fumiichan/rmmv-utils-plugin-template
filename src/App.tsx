import React from 'react'
import { IVariablesManager } from './sdk/lib/IVariablesManager'
import { IInternalTimerCollection } from './sdk/lib/IInternalTimerCollection'

interface AppState {
  active: boolean;
}

// In this example, we will show how to use internal libraries and how do they work.
export class App extends React.Component<{}, AppState> {
  private readonly _timer: IInternalTimerCollection;

  constructor(props: {}) {
    super(props)
    this.state = {
      active: false
    }
    // In here, we imported InternalTimers library which allows the plugin developers to run constant background
    // tasks, such as auto killing enemies, auto update variables (which is this example) and more.
    this._timer = window.iLib.require<IInternalTimerCollection>('InternalTimers')
  }

  componentDidMount () {
    // In here, on initial render, we check if we have already existing timer registered.
    this.setState({
      active: this._timer.hasTimer('example-auto-update-variable')
    })
  }

  toggle () {
    if (this.state.active) {
      this._timer.clearTimer('example-auto-update-variable')
      this.setState({ active: false })
    } else {
      // We register the timer here using .register(name: string, ReturnType<typeof setInterval>) API
      // Note that when duplicate timer names won't be registered. Ensure to check first with .hasTimer(name: string)
      // API to determine whether it is in use or not.
      this._timer.registerTimer('example-auto-update-variable', setInterval(() => {
        // In here we imported IVariablesManager again. IVariablesManager is a singleton instance which this will
        // reuse its instance when we are calling it.
        const _lib = window.iLib.require<IVariablesManager>('VariablesManager')
        // In here we modify a variable with ID of 15 with a type of number and with a value of 100.
        _lib.modify(15, 'number', 100)
      }, 1000))
      this.setState({ active: true })
    }
  }

  render () {
    return (
      <button onClick={() => this.toggle()}>active {this.state.active ? 'yes' : 'no'}</button>
    )
  }
}
