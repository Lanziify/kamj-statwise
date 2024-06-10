import {
  Heading,
  Link,
  ListItem,
  UnorderedList,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react"
import { IoChevronBack } from "react-icons/io5"
import { lessons } from "../data/lessons"
import landingBgOverlay from "../assets/WelcomeBg.png"
import { NavLink, useNavigate } from "react-router-dom"

const LearnPage = () => {
  const navigate = useNavigate()
  return (
    <Flex
      background="gray"
      minHeight="calc(100vh - 80px)"
      padding={6}
      justifyContent="center"
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
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(4, 19, 60, 1))`,
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
        alignSelf="center"
        padding={6}
        width="fit-content"
        background="white"
        borderRadius="xl"
        shadow="md"
      >
        <Button
          variant="link"
          alignSelf="flex-start"
          leftIcon={<IoChevronBack />}
          mb={6}
          onClick={() => navigate(-1)}
        >
          Return
        </Button>
        <Heading>LESSONS</Heading>
        {lessons.map((lesson, i) => (
          <Stack key={i} ml={6}>
            <Heading size="md">
              UNIT {lesson.unit}. {lesson.title}
            </Heading>
            <UnorderedList ml={8}>
              {lesson.topics.map((topic, j) => (
                <ListItem key={j}>
                  <Link
                    as={NavLink}
                    to={`${topic.name
                      .replace(/[,:\s]+/g, "_")
                      .toLowerCase()}`}
                    state={{ id: topic.id }}
                  >
                    {topic.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>
        ))}
      </Stack>
    </Flex>
  )
}

export default LearnPage
