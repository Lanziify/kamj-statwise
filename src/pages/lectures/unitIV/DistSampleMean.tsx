import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const DistSampleMean = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Distribution of the Sample Mean</Heading>
      <Divider />
      <Text>
        The distribution of the sample mean is a probability distribution for
        all possible values of a sample mean, computed from a sample of size n.
      </Text>
      <Text>
        For example: A statistics class has six students, ages displayed below.
        Construct a sampling distribution of the mean of age for samples (n =
        2).
      </Text>
      <Text>Ages: 18, 18, 19, 20, 20, 21</Text>
      <Text>
        First, we find the mean of every possible pairing where n = 2:
      </Text>
      <Image src="http://www.statisticslectures.com/images/sampledistrib1.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        Next, we create a frequency distribution for the new sample means:
      </Text>
      <Image src="http://www.statisticslectures.com/images/sampledistrib2.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>This is the distribution of our sample mean, where n = 2.</Text>
      <Image src="http://www.statisticslectures.com/images/sampledistrib3.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Text>As sample size increases, standard deviation decreases.</Text>
      <Text>
        The standard deviation of the sampling distribution is also known as the
        standard error of the mean:
      </Text>
      <Image src="http://www.statisticslectures.com/images/sampledistrib4.gif" />
      <Heading size="md" textAlign="center">
        Figure 4.
      </Heading>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/j4ZpJ0T6eFw"
          title="Distribution of the Sample Mean"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default DistSampleMean
