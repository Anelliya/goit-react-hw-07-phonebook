import Header from './components/header/Header'
import Routes from './components/Routers'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import './App.css';

import operations from './redux/auth/auth-operations'

function App({ getCurrentUser }) {
  useEffect( ()=>(getCurrentUser()),
    []
  )
  
  return (
    < div className="App" >
      <Header className="App-header"/>
      <Routes />
    </div>
  )
}

const mapDispatchToProp = {
  getCurrentUser: operations.getUser
}

export default connect(null, mapDispatchToProp)(App);
