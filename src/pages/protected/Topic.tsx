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
        <Stack background='white' p={4}>
            {/* <Heading textAlign='center'>{location.state.title}</Heading> */}
            <div dangerouslySetInnerHTML={{ __html: location.state.content }} />
        </Stack>
    )
}

export default Topic
