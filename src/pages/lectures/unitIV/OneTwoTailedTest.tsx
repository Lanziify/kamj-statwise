import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const OneTwoTailedTest = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>One-Tailed and Two-Tailed Tests</Heading>
      <Divider />
      <Text>Here's an example we've been using for the last few lectures:</Text>
      <Text>
        School District A states that its high schools have an 85% passage rate
        on the High School Exit Exam. A new school was recently opened in the
        district, and it was found that a sample of 150 students had a passage
        rate of 88%, with a standard deviation of 4%. Does this new school have
        a different passage rate than the rest of School District A?
      </Text>
      <Text>
        The question that's being asked is "Does the school have a passage rate
        different than 85%?"
      </Text>
      <Text>
        This is a two-tailed test, because we are testing to see if the mean is
        either below or above 85%.
      </Text>
      <Image src="http://www.statisticslectures.com/images/graph1.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        What if the question was "Does the school have a passage rate greater
        than 85%?"
      </Text>
      <Text>
        This is a one-tailed test, because we are only testing to see if the
        mean is greater than 85%.
      </Text>
      <Image src="http://www.statisticslectures.com/images/graph2.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        What if the question was "Does the school have a passage rate less than
        85%?"
      </Text>
      <Text>
        This is a one-tailed test, because we are only testing to see if the
        mean is less than 85%.
      </Text>
      <Image src="http://www.statisticslectures.com/images/graph3.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/enQDKXI2PdA"
          title="One-Tailed and Two-Tailed Tests"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default OneTwoTailedTest
