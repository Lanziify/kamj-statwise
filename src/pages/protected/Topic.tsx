import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import useTopic from '../../hooks/useTopic'
import React from 'react'

const Topic = () => {
    const location = useLocation()

    const { isGetTopicLoading, isGetTopicError, getTopic } = useTopic()

    React.useEffect(() => {
        const getTopicFromDb = async () => {
            const id = location.pathname.substring(
                location.pathname.lastIndexOf('/') + 1
            )
            const response = await getTopic(id)

            location.state = response.data
        }
        getTopicFromDb()
    }, [])

    if (isGetTopicLoading && !location.state)
        return (
            <Text color='white' fontSize='2xl'>
                Loading...
            </Text>
        )

    if (isGetTopicError) {
        return (
            <Flex
                minHeight='calc(100vh - 80px)'
                padding={6}
                justifyContent='center'
                alignItems='center'
                color='white'
            >
                <Stack>
                    <Heading textAlign='center'>Something went wrong</Heading>
                    <Text>
                        The content you are trying to access cannot be found or
                        does not exist.
                    </Text>
                </Stack>
            </Flex>
        )
    }

    return (
        <Stack p={4}>
            {/* <Heading color='white' textAlign='center'>{location.state.title}</Heading> */}
            {location.state && (
                <Stack background='white' p={6} rounded='md'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: location.state.content,
                        }}
                    />
                </Stack>
            )}
        </Stack>
    )
}

export default Topic
