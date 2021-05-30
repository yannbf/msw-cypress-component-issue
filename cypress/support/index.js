// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// load the covrage code
import "@cypress/code-coverage/support";

// load the global stylesheet
import "../../src/index.css";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { setupWorker, rest } from 'msw'

let worker = setupWorker()

worker.start({
  serviceWorker: {
    url: '/public/mockServiceWorker.js',
  },
})

worker.use([rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
  console.log('intercepted')
  return res(
    ctx.json({
      task: 'Do laundry',
    })
  )
})])