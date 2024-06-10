import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const ZscoreI = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Z-Scores (part 1)</Heading>
      <Divider />
      <Text>
        z-Scores are standardized values that can be used to compare scores in
        different distributions.
      </Text>
      <Text>
        Take this example: For the past two years, Joe has been in a bowling
        league.
      </Text>
      <Text>First Year Stats:</Text>
      <Text>League Average = 181</Text>
      <Text>Standard Deviation = 12</Text>
      <Text>Joe's Score in Final Game = 187</Text>
      <Text>Second Year Stats:</Text>
      <Text>League Average = 182</Text>
      <Text>Standard Deviation = 5</Text>
      <Text>Joe's Score in Final Game = 185</Text>
      <Text>
        Compared to the rest of the league, in which year was Joe�s score in the
        final game better?
      </Text>
      <Image src="http://www.statisticslectures.com/images/zscore1.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>We can calculate a z-score for each year:</Text>
      <Image src="http://www.statisticslectures.com/images/zscore2.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        We can then plot the z-scores and compare their placement on the
        distribution. From the graphs below you can see that compared to the
        rest of the league, Joe had a better score in his second year.
      </Text>
      <Image src="http://www.statisticslectures.com/images/zscore3.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Divider />
      <AspectRatio>
        <iframe
          width="640"
          height="506"
          src="https://www.youtube.com/embed/5v3Czc6ZK-Q"
          title="Z-Scores (part one)"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default ZscoreI
