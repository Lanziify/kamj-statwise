import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../context/Auth'

const AuthRoute = () => {
    const { token, isTokenLoading } = useAuth()

    if (!token && isTokenLoading) {
        return
    } else if (token) {
        return <Navigate to={'admin'} />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default AuthRoute
