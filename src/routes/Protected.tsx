import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Container, Flex } from '@chakra-ui/react'
import { useAuth } from '../context/Auth'

const ProtectedRoute = () => {
    const { token, isTokenLoading } = useAuth()

    if (!token && isTokenLoading) {
        return
    } else if (!token) {
        return <Navigate to='/' replace />
    }

    return (
        <>
            <Header />
            <Flex minHeight='100vh' background='gray.900'>
                <Container maxWidth='6xl' mt='64px'>
                    <Outlet />
                </Container>
            </Flex>
        </>
    )
}

export default ProtectedRoute
