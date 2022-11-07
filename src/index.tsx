import React from 'react'
import {CodeIcon} from '@primer/octicons-react'
import {Plugin} from './sdk/Plugin'
import {App} from './App'
import {PluginTypes} from './sdk/enums/PluginTypes'

class SamplePlugin extends Plugin {
  constructor() {
    super()
    this._pluginId = 'SamplePluginTemplate-V1'
    this._name = 'Sample Plugin V1'
    this._author = 'Aiko Fujimoto'
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
