import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { useAuth } from '../context/Auth'

const ProtectedRoute = () => {
    const { token, isTokenLoading } = useAuth()

    if (!token && isTokenLoading) {
        return
    } else if (!token) {
        return <Navigate to='/' replace />
    }

    return (
        <Flex minHeight='100vh' direction='column' background='gray.900'>
            <Header />
            <Box flex={1}>
                <Container maxWidth='6xl' mt={2}>
                    <Outlet />
                </Container>
            </Box>
        </Flex>
    )
}

export default ProtectedRoute
