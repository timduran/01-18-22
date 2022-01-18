import { useState } from "react"

const App = () => {

  const [userState, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    user: {}
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setUserState({ ...userState, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setUserState({
      ...userState,
      user: {
        name: userState.name,
        email: userState.email,
        password: userState.password
      },
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <>
      <form>
        <p>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={userState.name}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={userState.email}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={userState.password}
            onChange={handleInputChange} />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h1>{userState.user.name}</h1>
        <h1>{userState.user.email}</h1>
        <h1>{userState.user.password}</h1>
      </div>
    </>
  )
}

export default App
