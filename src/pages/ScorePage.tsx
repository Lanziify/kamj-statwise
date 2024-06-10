import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { useLocation } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"

const ScorePage = () => {
  const location = useLocation()
  const [viewScore, setViewScore] = React.useState(false)
  return (
    <Stack
      maxWidth="2xl"
      padding={6}
      margin="auto"
      textAlign="center"
      borderRadius="xl"
      borderWidth={1}
    >
      <ReturnButton />
      <Heading>Quiz Results</Heading>
      <Text>Congratulations on completing the quiz!</Text>
      <Stack mt={6} hidden={!viewScore}>
        <Heading size="2xl">
          {location.state.score}/{location.state.total}
        </Heading>
      </Stack>
      <Button
        onClick={() => setViewScore(!viewScore)}
        hidden={viewScore}
        colorScheme="yellow"
      >
        View Score
      </Button>
    </Stack>
  )
}

export default ScorePage
