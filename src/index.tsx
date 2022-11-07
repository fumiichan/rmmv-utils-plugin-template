import React from 'react'
import {CodeIcon} from '@primer/octicons-react'
import {Plugin} from './sdk/Plugin'
import {App} from './App'
import {PluginTypes} from './sdk/enums/PluginTypes'

class SamplePlugin extends Plugin {
  constructor() {
    super()
    // This is the ID of the Plugin. Plugin IDs must be unique otherwise, whatever is first registered will be
    // registered while other plugins with exact ID will be ignored.
    this._pluginId = 'SamplePluginTemplate-V1'
    // Your Plugin name
    this._name = 'Sample Plugin V1'
    // Author of the Plugin
    this._author = 'Aiko Fujimoto'
    // Type of Plugin
    this._pluginType = PluginTypes.Cheat
  }

  getIcon (): React.ReactElement {
    return (<CodeIcon size={24} />)
  }

  getInterface () {
    return (<App />)
  }
}

window.CheatUtilityPluginManager.register(new SamplePlugin())
