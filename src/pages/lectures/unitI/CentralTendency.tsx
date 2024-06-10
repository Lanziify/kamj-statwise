import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

const CentralTendency = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Central Tendency</Heading>
      <Divider />
      <Text>
        Central tendency refers to the measure used to determine the center of a
        distribution of data. It is used to find a single score that is most
        representative of an entire data set.
      </Text>
      <Text>1, 1, 2, 2, 2, 3, 3, 4, 5, 5</Text>
      <Text>
        If we could pick a single value to represent the above sample data set,
        what ways could we do it?
      </Text>
      <Divider />
      <Heading>Mean</Heading>
      <Divider />
      <Text>
        To find the mean, add up all values, then divide by the total number of
        values you have.
      </Text>
      <Image src="http://www.statisticslectures.com/images/ctmean.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>Our mean is 2.8.</Text>
      <Divider />
      <Heading>Median</Heading>
      <Divider />
      <Text>
        To find the median, first put all the values in order (this has been
        done already). Next, find out what value lies in the middle.
      </Text>
      <Image src="http://www.statisticslectures.com/images/dataset.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        For our data set, 2 is the mode because it occurs the most frequently.
      </Text>
      <Text>
        If two values occur the most often, the distribution is said to be
        bi-modal. If more than two values occur the most often, the distribution
        is said to be multi-modal.
      </Text>
      <Text>
        The mean will be used for almost all occasions. However, outliers can
        sometimes interfere with usage of the mean.
      </Text>
      <Divider />
      <Heading>Outlier</Heading>
      <Divider />
      <Text>
        An outlier is a value that is very different from the other data in your
        data set. This can skew your results.
      </Text>
      <Text>
        In situations with many outliers, the mean is not a good measure of
        central tendency. The median or mode should be used instead, depending
        on the type of information you're dealing with.
      </Text>
      <Divider />
      <AspectRatio ratio={1}>
        <iframe
          src="https://www.youtube.com/embed/pADOt1tzi2o"
          title="Central Tendency: Mean, Median, and Mode"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default CentralTendency
