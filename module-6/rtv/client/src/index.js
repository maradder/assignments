import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserProvider'
import { IssueContextProvider } from './context/IssueProvider'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <IssueContextProvider>
        <App />
      </IssueContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
