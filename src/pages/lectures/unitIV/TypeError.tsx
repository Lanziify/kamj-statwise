import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const TypeError = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Type I and Type II Errors</Heading>
      <Divider />
      <Text>Here's the example from the previous lecture:</Text>
      <Text>
        School District A states that its high schools have an 85% passage rate
        on the High School Exit Exam. A new school was recently opened in the
        district, and it was found that a sample of 150 students had a passage
        rate of 88%, with a standard deviation of 4%. Does this new school have
        a different passage rate than the rest of School District A? Answer this
        question using an alpha level of .05.
      </Text>
      <Image src="http://www.statisticslectures.com/images/null2.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        We're testing to see if the statistic we calculate (for example "z") is
        within the 95% range we expect it to be. If it is, we will conclude that
        what we're testing (usually the mean) is right where we expect it to be,
        so we will retain (keep) the null hypothesis.
      </Text>
      <Image src="http://www.statisticslectures.com/images/alpha1.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        If the statistic we calculate is outside of that range, we will conclude
        that what we're testing is not where we expect it to be, so it�s very
        likely that the null hypothesis is not true. So, we reject the null
        hypothesis and say that the alternative hypothesis is true.
      </Text>
      <Text>
        In reality, the school we sampled from either has a passage rate of 85%
        (our null hypothesis) or it has something different than 85% (the
        alternative hypothesis). We haven't measured the entire school, we only
        measured a sample of students. The decision we make will be based on the
        characteristics of the sample we've taken and what we know about the
        probabilities associated with the normal curve.
      </Text>
      <Text>
        Because statistics don't always accurately reflect the values of
        parameters, the decision we make may or may not accurately reflect
        reality. There are four possible outcomes, two of which are good, and
        two of which are errors:
      </Text>
      <Text>
        Outcome 1: We reject the Null Hypothesis when in reality, it is false.
        GOOD
      </Text>
      <Text>
        Outcome 2: We reject the Null Hypothesis when in reality, it is true.
        Type I Error
      </Text>
      <Text>
        Outcome 3: We do not reject the Null Hypothesis when in reality, it is
        false. Type II Error
      </Text>
      <Text>
        Outcome 1: We reject the Null Hypothesis when in reality, it is false.
        GOOD
      </Text>
      <Divider />
      <Heading>Type I Error</Heading>
      <Divider />
      <Text>
        When we reject a null hypothesis that is in reality true, we have made a
        Type I Error.
      </Text>
      <Divider />
      <Heading>Type II Error</Heading>
      <Divider />
      <Text>
        When we do not reject a null hypothesis that is in reality false, we
        have made a Type II Error.
      </Text>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/FHT6e_mdGoU"
          title="Type I and Type II Errors"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default TypeError
