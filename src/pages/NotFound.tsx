import { Flex, Heading, Stack, Text } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Flex
      minHeight="calc(100vh - 80px)"
      padding={6}
      justifyContent="center"
      alignItems="center"
    >
      <Stack>
        <Heading textAlign="center">Oopss! Page Not Found</Heading>
        <Text>
          The page you are trying to access cannot be found or does not exist.
        </Text>
      </Stack>
    </Flex>
  )
}

export default NotFound
