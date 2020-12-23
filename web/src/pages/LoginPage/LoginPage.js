import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()
  return (
    <>
      <h1>LoginPage</h1>
      {isAuthenticated && <p>{currentUser.email}</p>}
      {!isAuthenticated && <p>Logged Out</p>}
      <button onClick={logIn}>Login</button>
      <button onClick={logOut}>LogOut</button>
    </>
  )
}

export default LoginPage
