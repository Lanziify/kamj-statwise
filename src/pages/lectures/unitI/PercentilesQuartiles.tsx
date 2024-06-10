import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const PercentilesQuartiles = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Percentiles and Quartiles</Heading>
      <Divider />
      <Text>For the following data set:</Text>
      <Text>1, 2, 3, 4, 5</Text>
      <Text>What percent of the numbers are even?</Text>
      <Text>
        Variance and Standard Deviation are two measures of dispersion within a
        data set. Below are the definitional formulas for finding both:
      </Text>
      <Image src="http://www.statisticslectures.com/images/percentage.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>40% of the values are even.</Text>
      <Divider />
      <Heading>Percentiles</Heading>
      <Divider />
      <Text>
        A percentile is a value below which a certain percentage of observations
        lie.
      </Text>
      <Text>For the following data set:</Text>
      <Text>
        2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 9, 10, 11, 11, 12
      </Text>
      <Text>What is the percentile ranking of "10"?</Text>
      <Image src="http://www.statisticslectures.com/images/percentile.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>Now, what value exists at the percentile ranking of 25%?</Text>
      <Image src="http://www.statisticslectures.com/images/percentile2.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Text>
        Here, it is saying that the 25% percentile exists somewhere between the
        5th and 6th value. There is no "5.25th" value, so I take the average of
        the 5th and 6th values to find what value exists at the 25th percentile.
        5 and 5 average to give us an answer of 5.
      </Text>
      <Divider />
      <Heading>Quartile</Heading>
      <Divider />
      <Text>
        Quartiles divide data sets into quarters. There are three quartiles: The
        1st Quartile is located at the 25th percentile, the 2nd Quartile is
        located at the 50th percentile, and the 3rd Quartile is located at the
        75th percentile.
      </Text>
      <Image src="http://www.statisticslectures.com/images/quartiles.gif" />
      <Heading size="md" textAlign="center">
        Figure 4.
      </Heading>
      <Divider />
      <AspectRatio>
        <iframe
          src="https://www.youtube.com/embed/Snf6Wpn-L4c"
          title="Percentiles and Quartiles"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default PercentilesQuartiles
