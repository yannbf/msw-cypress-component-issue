import React from 'react'
import { mount } from '@cypress/react'

const Todolist = ({ children }) => {
  const [todos, setTodos] = React.useState()

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await res.json()
      setTodos(data)
      console.log({ data })
    }

    fetchData()
  }, [])

  return (
    <h2>
      {children} {JSON.stringify(todos)}
    </h2>
  )
}

describe('<Login>', () => {
  it('Test 1', () => {
    mount(<Todolist>Hello</Todolist>)
      .get('Todolist')
      .should('exist')
  })
})
