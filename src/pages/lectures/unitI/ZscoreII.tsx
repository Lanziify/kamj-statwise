import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const ZscoreII = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>Z-Scores (part 2)</Heading>
      <Divider />
      <Text>Let's say we have a random variable, x, distributed as such:</Text>
      <Image src="http://www.statisticslectures.com/images/zscore4.gif" />
      <Heading size="md" textAlign="center">
        Figure 1.
      </Heading>
      <Text>
        You can see from the distribution that x has a mean of 4, and a standard
        deviation of 1. I want to know: What percentage of scores fall above
        4.25?
      </Text>
      <Image src="http://www.statisticslectures.com/images/zscore5.gif" />
      <Heading size="md" textAlign="center">
        Figure 2.
      </Heading>
      <Text>
        Or basically, what falls in this blue area. Remember from the empirical
        rule that we know what probabilities are associated with different areas
        of the normal distribution. We can use this information to find the
        percentage of scores above 4.25. First, we need to calculate a z-score:
      </Text>
      <Image src="http://www.statisticslectures.com/images/zscore6.gif" />
      <Heading size="md" textAlign="center">
        Figure 3.
      </Heading>
      <Text>
        With our z-score of 0.25, we now head to the <Link as={NavLink} color='blue' to='/learn/z-table' >z-table</Link> to find the area
        associated with it. The first thing you'll notice about the z table is
        that it's asking for the "area in body".
      </Text>
      <Image src="http://www.statisticslectures.com/images/zscore7.gif" />
      <Heading size="md" textAlign="center">
        Figure 4.
      </Heading>
      <Text>
        When you split a distribution into two parts, the smaller portion is the
        tail, while the larger portion is the body. We're trying to look up a
        tail, but this table only gives us body. To find the correct answer, we
        must first find the area in the body, then subtract it from 1. That will
        give us the area in the tail.
      </Text>
      <Text>
        Looking up the area in the body for z = 0.25, we find a proportion of
        0.5987. To find our final answer, we just have to make one quick change:
      </Text>
      <Text>Area in Body = 0.5987</Text>
      <Text>Area in Tail = 1.00-0.5987 = 0.4013 </Text>
      <Text>So, about 40% of scores fall above 4.25.</Text>
      <Divider />
      <AspectRatio>
        <iframe
          width="640"
          height="506"
          src="https://www.youtube.com/embed/aa_deKPDgI4"
          title="Z-Scores (part two)"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Stack>
  )
}

export default ZscoreII
