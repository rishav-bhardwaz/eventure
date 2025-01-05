import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<Auth0Provider
    domain="dev-dg4nu7ki8ccr48mf.us.auth0.com"
    clientId="CJQQxrBxvHa9ekJrD8Vm9r6Jbc4xVo7B"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
)
