import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const Topic = () => {
    const location = useLocation()
    if (!location.state) {
        return (
            <Flex
                minHeight='calc(100vh - 80px)'
                padding={6}
                justifyContent='center'
                alignItems='center'
                color='white'
            >
                <Stack>
                    <Heading textAlign='center'>Oopss! Page Not Found</Heading>
                    <Text>
                        The page you are trying to access cannot be found or
                        does not exist.
                    </Text>
                </Stack>
            </Flex>
        )
    }
    return (
        <Stack p={4}>
            {/* <Heading color='white' textAlign='center'>{location.state.title}</Heading> */}
            <Stack background='white' p={6} rounded='md'>
                <div
                    dangerouslySetInnerHTML={{ __html: location.state.content }}
                />
            </Stack>
        </Stack>
    )
}

export default Topic
