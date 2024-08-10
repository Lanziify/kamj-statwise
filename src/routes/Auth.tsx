import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../context/Auth'
import { Box, Container, Flex } from '@chakra-ui/react'

const AuthRoute = () => {
    const { token, isTokenLoading } = useAuth()

    if (!token && isTokenLoading) {
        return
    } else if (token) {
        return <Navigate to={'admin'} />
    }

    return (
        <Flex minHeight='100vh' background='gray.900' direction='column'>
            <Header />
            <Container
                maxWidth='6xl'
                flex={1}
                display='flex'
                flexDirection='column'
            >
                <Outlet />
            </Container>
        </Flex>
    )
}

export default AuthRoute
