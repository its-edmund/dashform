import { useState } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AppContext } from './context/AppContext'

import './index.css'

const App = () => {
  const [signUp, setSignUp] = useState([
    { name: 'First Name', content: '', _id: '123' },
    { name: 'Last Name', content: '', _id: '456' },
  ])
  const value = { signUp, setSignUp }
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <AppContext.Provider value={value}>
            <Routes />
          </AppContext.Provider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
