import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = (props: AuthUser) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Yuvraj',
            email: 'yuvi@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>UserName {user?.name}</div>
        <div>UserEmail {user?.email}</div>
    </div>
  )
}
