// Helper functions having generally to do with network actions.

import { infoEndpoint, serverAddress } from "../config"

export function logVisit() {
  post(serverAddress + infoEndpoint)
}

export function post(endpoint: string): Promise<any> {
    return fetch(endpoint, {method: "POST"})
      .then(resp => {
        try {
          if (resp.status === 200)
            return resp.json()
          else
            return {}
        }
        catch {
          console.log("Failed network post")
        }
      })
}
