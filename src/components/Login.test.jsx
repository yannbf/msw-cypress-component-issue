import React from "react";
import { mount } from "@cypress/react";
import { setupWorker } from 'msw'

describe('<Login>', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    setupWorker()
    // commenting the method start makes the tests run fine. keeping it brings to weird test loop
    .start({
      serviceWorker: {
        url: '/public/mockServiceWorker.js',
      }
    })
  })

  it('Test 1', () => {
    mount(<button>Hello</button>) 
      .get('button')
      .should('exist')
  })

  it('Test 2', () => {
    mount(<button>Something went wrong!</button>) 
      .get('body')
      .findByText('Something went wrong!').should('exist')
  })
})