import {
  Flex,
  Button,
  Heading,
  Highlight,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Divider,
  Center,
  Tag,
  CardFooter,
} from "@chakra-ui/react"
import { IoArrowForward } from "react-icons/io5"
import LearnSvg from "../assets/undraw_mathematics_-4-otb.svg"
import QuizSvg from "../assets/undraw_questions_re_1fy7.svg"
import InfographSvg from "../assets/undraw_information_tab_re_f0w3.svg"
import landingBgOverlay from "../assets/WelcomeBg.png"
import aboutBgOverlay from "../assets/WebBg.jpg"
import helpBgOverlay from "../assets/HelpBg.jpg"
import { NavLink } from "react-router-dom"

const cards = [
  {
    heading: "Learn",
    svgSrc: LearnSvg,
    description:
      "Dive into the world of statistics with our comprehensive learning modules. Explore various statistical concepts, methods, and applications through interactive lessons and engaging content.",
    path: "learn",
  },
  {
    heading: "Quizzes/Games",
    svgSrc: QuizSvg,
    description:
      "Test your statistical knowledge with our interactive quizzes. Challenge yourself with a range of questions covering different topics and difficulty levels. Receive instant feedback to track your progress and improve your skills.",
    path: "quiz",
  },
  {
    heading: "Infographics",
    svgSrc: InfographSvg,
    description:
      "Visualize complex statistical information with our creative infographics. Gain insights and understanding through visually appealing graphics that simplify and explain statistical concepts in a clear and concise manner.",
    path: "infographic",
  },
]

const IndexPage = () => {
  return (
    <div>
      <Flex
        id="hero"
        height="calc(100vh - 80px)"
        alignItems="center"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `url(${landingBgOverlay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: -2,
          },
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(4, 19, 60, 1))`,
            backdropFilter: "blur(8px)",
            zIndex: -1,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          textAlign="center"
          maxWidth="7xl"
          margin="auto"
          padding={6}
          gap={4}
          color="white"
        >
          <Heading
            fontSize={{
              base: "4xl",
            }}
          >
            <Highlight
              query={["KAMJ", "STATWISE"]}
              styles={{ color: "yellow", fontWeight: "black" }}
            >
              Welcome To KAMJ StatWise
            </Highlight>
          </Heading>
          <Text fontSize="lg">
            Dive intro our cutting-edge platform designed to empower students at
            every level, from grasping fundamentals to mastering advanced
            techniques, making statistics accessible and engaging for all.
          </Text>
          <Button
            colorScheme="yellow"
            alignSelf="center"
            rightIcon={<IoArrowForward />}
          >
            Read More
          </Button>
        </Stack>
      </Flex>
      <Flex id="service" background="rgba(4, 19, 60)">
        <Stack flex={1} padding={6} maxWidth="7xl" margin="auto" spacing={6}>
          <Heading
            fontSize={{
              base: "2xl",
            }}
            textAlign="center"
            color="yellow"
          >
            <Highlight
              query={["Our Featured Contents"]}
              styles={{
                display: "block",
                color: "white ",
                fontWeight: "black",
              }}
            >
              Look! Our Featured Contents
            </Highlight>
          </Heading>
          <Text color="white" textAlign="center">
            <Highlight
              query={["lessons", "quizzes", "games", "infographics"]}
              styles={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Your gateway to the world of statistics! Explore engaging LESSONS
              to deepen you understanding, challenge yourself with QUIZZES, have
              fun with interactive GAMES, and visualize data with our
              captivating INFOGRAPHICS. Whether you're a biggener or an expert
              there's something for everyone to learn and enjoy in our curated
              collection.
            </Highlight>
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              md: 3,
              xl: 3,
            }}
            spacing={6}
          >
            {cards.map((item, index) => (
              <Card key={index} borderRadius="xl" background="#364263">
                <CardBody>
                  <Image
                    aspectRatio={1}
                    src={item.svgSrc}
                    padding={8}
                    background="#82899e"
                    borderRadius="xl"
                  />
                  <Stack mt={4}>
                    <Heading color="white">{item.heading}</Heading>
                    <Text textIndent="1rem" textAlign="justify" color="white">
                      {item.description}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button
                    width="100%"
                    as={NavLink}
                    colorScheme="yellow"
                    to={item.path}
                  >
                    Open
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
      <Flex
        id="about"
        minHeight="100vh"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `url(${aboutBgOverlay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: -2,
          },
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage:
              "linear-gradient(to bottom, rgba(4, 19, 60, 1), rgba(4, 19, 60, 0))",
            backdropFilter: "blur(8px)",
            zIndex: -1,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          flex={1}
          padding={6}
          maxWidth="7xl"
          margin="auto"
          spacing={6}
          textAlign="center"
          color="white"
        >
          <Heading>About Us</Heading>
          <Text>
            Our website is committed to helping learners enhance their
            statistical knowledge and skills through a comprehensive learning
            experience. Whether you are a novice seeking to grasp the
            fundamentals or a seasoned professional aiming to deepen your
            understanding, our platform offers a wealth of resources tailored to
            support your growth. Dive into a world of data-driven insights,
            analytical tools, and expert guidance as we empower you to excel in
            statistical analysis and make informed decisions. Join us on this
            journey of exploration and discovery as we unravel the complexities
            of statistics together.
          </Text>
        </Stack>
      </Flex>
      <Flex background="blue.900">
        <Stack
          flex={1}
          maxWidth="7xl"
          margin="auto"
          padding={6}
          spacing={6}
          textAlign="center"
          color="white"
        >
          <Heading>Mission Statement</Heading>
          <Text>
            Our mission is to support and empower learners by enhancing their
            statistical knowledge and skills. We are dedicated to providing a
            comprehensive and accessible learning environment where students,
            researchers, and data enthusiasts can expand their understanding of
            statistics through quality educational resources, practical tools,
            and expert guidance. Our platform is committed to fostering a
            community of engaged learners who are equipped to excel in
            statistical analysis, make informed decisions, and succeed in their
            data-driven endeavors.
          </Text>
        </Stack>
      </Flex>
      <Flex
        id="contact"
        minHeight="100vh"
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `url(${helpBgOverlay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: -2,
          },
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            zIndex: -1,
          },
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Stack
          maxWidth="7xl"
          margin="auto"
          direction={{ base: "column-reverse", md: "row", lg: "row" }}
          height="fit-content"
          padding={6}
          gap={6}
        >
          <Stack textAlign="center" color="white">
            <Heading mb={4}>Do you need any help?</Heading>
            <Tag alignSelf="center" fontWeight="bold">
              Call us at +639300616042
            </Tag>
            <Text>
              Whether you require guidance on statistical topics, data analysis
              techniques, or have inquiries about our NOR services, feel free to
              reach out to us. Your success is our priority, and we are
              committed to providing prompt and reliable assistance to help you
              excel in your data-driven endeavors.
            </Text>
            <Button colorScheme="yellow" alignSelf="center">
              Learn Now
            </Button>
          </Stack>
          <Divider hideFrom={["md", "lg"]} />
          <Center hideBelow="md" my="auto" height="10rem">
            <Divider orientation="vertical" />
          </Center>
          <Stack textAlign="center" color="white">
            <Heading mb={4}>Our Team</Heading>
            <Text>
              Our team of student-researchers is fueled by a shared passion for
              statistics. With a blend of academic curiosity and practical
              insights, we are dedicated to providing fellow learners with
              valuable resources and support on our statistical learning
              platform.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  )
}

export default IndexPage
