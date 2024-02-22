import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
import CallbackTutorial from './CallbackTutorial.jsx'
import MemoTutorial from './MemoTutorial.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <GoogleOAuthProvider clientId={import.meta.env.VITE_MY_GOOGLE_LOGIN_CLIENT_ID}>
   <App />
   {/* <CallbackTutorial/>
   <MemoTutorial/> */}
   </GoogleOAuthProvider>;
   </Provider>
  </React.StrictMode>,
)
