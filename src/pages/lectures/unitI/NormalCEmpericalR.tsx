import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const NormalCEmpericalR = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>The Normal Curve and Empirical Rule </Heading>
      <Divider />
      <Text>
        The distributions of most continuous random variables will follow the
        shape of the normal curve.
      </Text>
      <Text>Let's examine three different kinds of skew:</Text>
      <Image src="http://www.statisticslectures.com/images/normalcurve1.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        On the normal curve, mean, median, and mode all exist at the center.
      </Text>
      <Image src="http://www.statisticslectures.com/images/normalcurve2.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        The graph changes direction at inflection points. These first points
        mark the distance of one standard deviation from the mean.
      </Text>
      <Image src="http://www.statisticslectures.com/images/normalcurve3.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Divider />
      <Heading>The Empirical Rule </Heading>
      <Divider />
      <Text>The empirical rule states that:</Text>
      <Text>
        68% of all values fall within 1 standard deviation of the mean.
      </Text>
      <Text>
        95% of all values fall within 2 standard deviations of the mean.
      </Text>
      <Text>
        99.7% of all values fall within 3 standard deviations of the mean.
      </Text>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/McSFVzc8Swk"
          title="The Normal Curve and Empirical Rule"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default NormalCEmpericalR
