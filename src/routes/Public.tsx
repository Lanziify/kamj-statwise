import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React from 'react'

const PublicRoute = () => {
    return (
        <>
            <Stack
                spacing={0}
                minHeight='100vh'
                display='flex'
                direction='column'
                background='gray.900'
            >
                <Header />
                <Container maxWidth='6xl' flex={1}>
                    <Outlet />
                </Container>
            </Stack>
        </>
    )
}

export default PublicRoute
