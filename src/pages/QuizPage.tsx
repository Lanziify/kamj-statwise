import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import { quizzes } from "../data/quizzes"
import { useLocation, useNavigate } from "react-router-dom"
import { IQuiz } from "../types/type"
import { useForm, SubmitHandler } from "react-hook-form"
import { IoChevronBack } from "react-icons/io5"

const QuizPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, getValues } = useForm()
  const [quiz, setQuiz] = React.useState<null | IQuiz>(null)
  const choiceAlphabet = ["a", "b", "c", "d"]

  React.useEffect(() => {
    const quizContent = quizzes.find((quiz) => quiz.quizId == location.state.id)
    if (quizContent) {
      setQuiz(quizContent)
    }
  }, [])

  const onSubmit: SubmitHandler<any> = (data) => {
    const answerKey: any = {}
    let score = 0
    quiz?.quizTypes.forEach((item) => {
      item.questions.forEach((questionItem, i) => {
        if (item.type == 0) {
          answerKey[`multi_choice_item_${i + 1}`] = questionItem.answer
        } else if (item.type === 1) {
          answerKey[`identification_item_${i + 1}`] = questionItem.answer
        } else if (item.type === 2) {
          answerKey[`matching_item_${i + 1}`] = questionItem.answer
        } else if (item.type === 3) {
          answerKey[`solving_item_${i + 1}`] = questionItem.answer
        }
      })
    })
    Object.entries(data).forEach((answer) => {
      if (answer[1] == answerKey[answer[0]]) {
        score += 1
      }
    })

    navigate("/quiz/score", {
      state: { score: score, total: Object.entries(answerKey).length },
    })
  }

  const handleBackPress = () => {
    const values = getValues()
    let hasValue = false

    Object.values(values).forEach((value) => {
      if (value !== null && value !== "") {
        hasValue = true
      }
    })

    if (hasValue) {
      onOpen()
    } else {
      navigate(-1)
    }
  }

  return quiz ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack maxWidth="2xl" margin="auto" padding={6}>
        <Button
          variant="link"
          alignSelf="flex-start"
          leftIcon={<IoChevronBack />}
          mb={6}
          onClick={handleBackPress}
        >
          Return
        </Button>
        <Heading textAlign="center">{quiz.quizTitle}</Heading>
        {quiz.quizTypes.map((item) => (
          <Stack key={item.type}>
            <Heading size="md">{item.description}</Heading>
            {item.type == 2 ? (
              <Flex
                margin={4}
                padding={4}
                gap={2}
                borderRadius="md"
                flexWrap="wrap"
                borderWidth={1}
              >
                {item.choices?.map((choiceItem, choiceKey) => (
                  <Tag key={choiceKey} colorScheme="yellow">
                    {choiceItem}
                  </Tag>
                ))}
              </Flex>
            ) : null}
            <Stack>
              {item.questions.map((questionItem, i) => {
                return item.type === 0 ? (
                  <Stack key={i}>
                    <Text>
                      {i + 1}. {questionItem.question}
                    </Text>
                    <Image src={questionItem.imgSrc} />
                    <RadioGroup>
                      <Stack borderRadius="md" padding={3} borderWidth={1}>
                        {questionItem.choices?.map((questionItemChoice, j) => (
                          <Radio
                            {...register(`multi_choice_item_${i + 1}`, {
                              //   required: true,
                            })}
                            key={j}
                            value={j.toString()}
                          >
                            {choiceAlphabet[j]}. {questionItemChoice}
                          </Radio>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </Stack>
                ) : item.type != 4 ? (
                  <Stack
                    key={i}
                    direction={item.type === 1 ? "row-reverse" : "column"}
                  >
                    <Stack width="100%">
                      <Text>
                        {i + 1}. {questionItem.question}
                      </Text>
                      {questionItem.list && (
                        <UnorderedList ml={20}>
                          {questionItem.list.map((listItem, listItemKey) => (
                            <ListItem key={listItemKey}>{listItem}</ListItem>
                          ))}
                        </UnorderedList>
                      )}
                    </Stack>

                    <Input
                      {...register(
                        item.type === 1
                          ? `identification_item_${i + 1}`
                          : item.type === 2
                          ? `matching_item_${i + 1}`
                          : `solving_item_${i + 1}`,
                        {
                          // required: true,
                        }
                      )}
                      variant="filled"
                      width="auto"
                    />
                  </Stack>
                ) : (
                  <Stack key={i}>
                    <Heading size="sm">Problem #{i + 1}</Heading>
                    <Text width="100%">{questionItem.problem}</Text>
                    {questionItem.questions?.map((solvingProblem, k) => (
                      <Text ml={2} key={k} width="100%">
                        {k + 1}. {solvingProblem}
                      </Text>
                    ))}
                    <Input />
                  </Stack>
                )
              })}
            </Stack>
          </Stack>
        ))}
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Stack>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Return</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to exit?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                onClose()
                navigate(-1)
              }}
            >
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  ) : null
}

export default QuizPage
