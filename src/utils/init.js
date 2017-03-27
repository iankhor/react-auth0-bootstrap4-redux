import React from 'react'

import AuthService from './AuthService'

export const auth = new AuthService(
                    process.env.REACT_APP_AUTH0_CLIENT_ID || "" , 
                    process.env.REACT_APP_AUTH0_DOMAIN || "")

// To notify user if Auth0 ENV variable sets 
export function isAuth0ENVValid() {
  if (process.env.REACT_APP_AUTH0_CLIENT_ID === undefined || process.env.REACT_APP_AUTH0_DOMAIN === undefined) {
    return <h1 className="font-warning"> Warning : Auth0 ENV not set </h1>
  }
}
