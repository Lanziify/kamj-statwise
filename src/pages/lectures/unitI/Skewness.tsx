import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const Skewness = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Skewness</Heading>
      <Divider />
      <Text>
        Skewness refers to how a distribution "leans". It is important to
        recognize skewness because it has strong implications in hypothesis
        testing.
      </Text>
      <Text>Let's examine three different kinds of skew:</Text>
      <Image src="http://www.statisticslectures.com/images/noskew.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        This symmetrical distribution has no skew. The mean exists perfectly at
        the center.
      </Text>
      <Image src="http://www.statisticslectures.com/images/skewright.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        This distribution is skewed to the right. The mean is pulled to the left
        from the center.
      </Text>
      <Image src="http://www.statisticslectures.com/images/skewleft.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Text>
        This distribution is skewed to the left. The mean is pulled to the right
        from the center.
      </Text>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/lBuJmzyiu8Y"
          title="Skewness"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default Skewness
