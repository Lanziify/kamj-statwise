import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const PublicRoute = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default PublicRoute
