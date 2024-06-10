import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const NullAltHypothesis = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Null and Alternative Hypotheses</Heading>
      <Divider />
      <Text>
        Here's an example: School District A states that its high schools have
        an 85% passage rate on the High School Exit Exam. A new school was
        recently opened in the district, and it was found that a sample of 150
        students had a passage rate of 88%, with a standard deviation of 4%.
        Does this new school have a different passage rate than the rest of
        School District A?
      </Text>
      <Text>
        When we do hypothesis testing, what we're really doing is testing
        claims.
      </Text>
      <Text>
        For this question, we're testing the claim that students at the new
        school have a passage rate that is different than the expected 85%.
      </Text>
      <Image src="http://www.statisticslectures.com/images/null1.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        We're going to try to find evidence which shows the null hypothesis to
        be false. If this evidence exists, we can reject the null hypothesis and
        say that the alternative hypothesis is true. If we cannot find this
        evidence, we will continue with the assumption that the null hypothesis
        is true. For this example:
      </Text>
      <Image src="http://www.statisticslectures.com/images/null2.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/5N7L1cGCL-w"
          title="Null and Alternative Hypotheses"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default NullAltHypothesis
