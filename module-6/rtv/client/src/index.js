import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserProvider'
import { IssueContextProvider } from './context/IssueProvider'
import { DisplayContextProvider } from './context/DisplayProvider'

ReactDOM.render(
  <React.StrictMode>
    <DisplayContextProvider>
      <UserContextProvider>
        <IssueContextProvider>
          <App />
        </IssueContextProvider>
      </UserContextProvider>
    </DisplayContextProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
