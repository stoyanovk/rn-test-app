import React from 'react'
import bootstrap from './src/bootstrap'
import AppNavigation from './src/navigation/AppNavigation'
import { AppLoading } from 'expo'

export default function App() {
  const [isReady, setIsReady] = React.useState(false)
  if (!isReady) {
    return <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} />
  }

  return <AppNavigation />
}
