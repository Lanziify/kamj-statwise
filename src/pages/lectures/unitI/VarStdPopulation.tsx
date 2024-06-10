import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const VarStdPopulation = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Dispersion</Heading>
      <Divider />
      <Text>
        Dispersion refers to how spread out a data set is about the mean.
      </Text>
      <Text>
        Variance and Standard Deviation are two measures of dispersion within a
        data set. Below are the definitional formulas for finding both:
      </Text>
      <Image src="http://www.statisticslectures.com/images/popvarstd.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        Using the definitional formula calculate variance for the data set 1, 2,
        2, 3, 4, 5:
      </Text>
      <Image src="http://www.statisticslectures.com/images/popdefinitional.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        Here's what's happening here: first, we're finding out how much each
        individual number deviates from the mean.
      </Text>
      <Text>
        We are then squaring all of those values (called "deviations"), and
        adding them together. We take the sum of all deviations and divide by
        the total number of scores to get a variance of 1.81.
      </Text>
      <Text>
        To get the standard deviation of this data set, all we need to do is
        take the square root of 1.81. After doing so, we find the standard
        deviation to be 1.35.
      </Text>
      <Text>
        Using the definitional formula can take a long time, so we usually use a
        shorter formula called the computational formula:
      </Text>
      <Image src="http://www.statisticslectures.com/images/popcomputational.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Text>
        In this problem, N is the size of our data set(6). The other values are
        calculated like this:
      </Text>
      <Image src="http://www.statisticslectures.com/images/othervalues.gif" />
      <Heading size="md" textAlign="center">
        Figure 4.
      </Heading>
      <Text>
        After plugging in all the values, we again find a variance of 1.81, and
        a standard deviation of 1.35.
      </Text>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/_x-XWDEIhfE"
          title="Variance and Standard Deviation of a Population"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default VarStdPopulation
