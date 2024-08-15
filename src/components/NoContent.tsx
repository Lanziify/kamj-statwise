import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

const NoContent = () => {
    return (
        <Flex
            minHeight='calc(100vh - 80px)'
            padding={6}
            justifyContent='center'
            alignItems='center'
            color='white'
        >
            <Stack textAlign='center'>
                <Heading textAlign='center'>Something went wrong</Heading>
                <Text>
                    The content you are trying to access cannot be found or does
                    not exist.
                </Text>
            </Stack>
        </Flex>
    )
}

export default NoContent
