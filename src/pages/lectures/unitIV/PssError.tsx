import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const PssError = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Parameters, Statistics, and Sampling Error </Heading>
      <Divider />
      <Heading>Parameter</Heading>
      <Divider />
      <Text>
        A characteristic that describes a population is called a parameter.
        Because it is often difficult (or impossible) to measure an entire
        population, parameters are most often estimated.
      </Text>
      <Text>
        Parameters are usually written as Greek letters. I've already taught you
        about two: population mean, and population standard deviation.
      </Text>
      <Image src="http://www.statisticslectures.com/images/popmeanstd.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Divider />
      <Heading>Statistic</Heading>
      <Divider />
      <Text>
        A characteristic that describes a sample is called a statistic.
        Statistics are most often used to estimate the value of unknown
        parameters.
      </Text>
      <Text>
        Statistics are usually written as Latin (think: normal) letters. Here's
        two I've already taught you: sample mean, and sample variance.
      </Text>
      <Image src="http://www.statisticslectures.com/images/samplemeanvar.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        For example, if I were to measure the height of 5000 randomly selected
        individuals, then find the mean of the heights I collected, the
        resulting value would be a statistic. I could then use the value of this
        statistic to make an estimation of the mean height of the population,
        which is a parameter.
      </Text>
      <Divider />
      <Heading>Sampling Error</Heading>
      <Divider />
      <Text>
        Sampling error is any difference that exists between a statistic and its
        corresponding parameter.
      </Text>
      <Text>
        Imagine that after measuring the heights of 5000 individuals, I
        calculate a statistic which estimates the population mean (a parameter)
        to be 68 inches. However, my estimate is off, and the actual mean of
        individuals in the population in 70 inches. This discrepancy is known as
        sampling error.
      </Text>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/6O98qw7S8xA"
          title="Parameters, Statistics, and Sampling Error"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default PssError
