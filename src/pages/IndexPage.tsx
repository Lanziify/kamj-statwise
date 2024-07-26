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
    CardHeader,
} from '@chakra-ui/react'
import LearnSvg from '../assets/undraw_mathematics_-4-otb.svg'
import QuizSvg from '../assets/undraw_questions_re_1fy7.svg'
import InfographSvg from '../assets/undraw_information_tab_re_f0w3.svg'
import landingBgOverlay from '../assets/HeroBg.png'
import aboutBgOverlay from '../assets/WebBg.jpg'
import helpBgOverlay from '../assets/HelpBg.jpg'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const cards = [
    {
        heading: 'Lessons',
        svgSrc: LearnSvg,
        description:
            'Dive into the world of statistics with our comprehensive learning modules. Explore various statistical concepts, methods, and applications through interactive lessons and engaging content.',
        path: 'lessons',
        buttonLabel: 'Check Lessons',
    },
    {
        heading: 'Quizzes',
        svgSrc: QuizSvg,
        description:
            'Test your statistical knowledge with our interactive quizzes. Challenge yourself with a range of questions covering different topics and difficulty levels. Receive instant feedback to track your progress and improve your skills.',
        path: 'quiz',
        buttonLabel: 'Take Quizzes',
    },
    {
        heading: 'Games',
        svgSrc: InfographSvg, // Replace GameSvg with the appropriate SVG source for games
        description:
            'Have fun while learning statistics with our educational games. Engage in interactive challenges and activities designed to reinforce statistical concepts and enhance your learning experience.',
        path: 'games', // Replace with the appropriate path for games section
        buttonLabel: 'Play Games', // Adjust button label as needed
    },
    {
        heading: 'Infographics',
        svgSrc: InfographSvg,
        description:
            'Visualize complex statistical information with our creative infographics. Gain insights and understanding through visually appealing graphics that simplify and explain statistical concepts in a clear and concise manner.',
        path: 'infographic',
        buttonLabel: 'View Graphics',
    },
]

const IndexPage = () => {

    return (
        <div>
            {/* Hero */}
            <Flex
                id='hero'
                height='100vh'
                alignItems='center'
                sx={{
                    '&:before': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundImage: `url(${landingBgOverlay})`,
                        // WebkitFilter: 'grayscale(30%)',
                        WebkitBackgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: -2,
                    },
                    '&:after': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundImage: `linear-gradient(to bottom, #17192390, gray.900)`,
                        backdropFilter: 'blur(4px)',
                        zIndex: -1,
                    },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Stack
                    textAlign='center'
                    maxWidth='3xl'
                    margin='auto'
                    padding={6}
                    gap={4}
                    color='white'
                >
                    <Heading
                        fontSize={{
                            base: '4xl',
                        }}
                    >
                        <Highlight
                            query={['KAMJ', 'STATWISE']}
                            styles={{ color: 'yellow.400', fontWeight: 'black' }}
                        >
                            Welcome To KAMJ StatWise
                        </Highlight>
                    </Heading>
                    <Text fontSize='sm'>
                        Dive intro our cutting-edge platform designed to empower
                        students at every level, from grasping fundamentals to
                        mastering advanced techniques, making statistics
                        accessible and engaging for all.
                    </Text>
                    <Button size='sm' colorScheme='yellow' alignSelf='center'>
                        Read More
                    </Button>
                </Stack>
            </Flex>
            {/* Cards */}
            <Flex id='service' background='gray.900'>
                <Stack
                    flex={1}
                    padding={6}
                    maxWidth='6xl'
                    margin='auto'
                    spacing={6}
                >
                    <Heading
                        fontSize={{
                            base: '2xl',
                        }}
                        textAlign='center'
                        color='yellow'
                    >
                        <Highlight
                            query={['Our Featured Contents']}
                            styles={{
                                display: 'block',
                                color: 'white ',
                                fontWeight: 'black',
                            }}
                        >
                            Look! Our Featured Contents
                        </Highlight>
                    </Heading>
                    <Text color='white' textAlign='center' fontSize='sm'>
                        <Highlight
                            query={[
                                'lessons',
                                'quizzes',
                                'games',
                                'infographics',
                            ]}
                            styles={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            Your gateway to the world of statistics! Explore
                            engaging LESSONS to deepen you understanding,
                            challenge yourself with QUIZZES, have fun with
                            interactive GAMES, and visualize data with our
                            captivating INFOGRAPHICS. Whether you're a biggener
                            or an expert there's something for everyone to learn
                            and enjoy in our curated collection.
                        </Highlight>
                    </Text>

                    <SimpleGrid
                        columns={{
                            base: 1,
                            sm: 2,
                            md: 2,
                            xl: 2,
                        }}
                        spacing={6}
                    >
                        {cards.map((item, index) => (
                            <Card
                                key={index}
                                borderRadius='md'
                                background='transparent'
                                shadow='none'
                                borderWidth={1}
                                borderColor='gray.700'
                            >
                                <CardHeader>
                                    <Heading color='white' fontSize='xl'>
                                        {item.heading}
                                    </Heading>
                                </CardHeader>
                                <CardBody paddingY={0}>
                                    <Flex gap={4}>
                                        {/* <Image
                                            aspectRatio={1}
                                            src={item.svgSrc}
                                            padding={4}
                                            // background='#82899e'
                                            borderRadius='md'
                                            sizes='auto'
                                            alignSelf='flex-start'
                                        /> */}
                                        <Text color='white' fontSize='sm'>
                                            {item.description}
                                        </Text>
                                    </Flex>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        size='sm'
                                        variant='ghost'
                                        marginLeft='auto'
                                        as={NavLink}
                                        colorScheme='yellow'
                                        _hover={{
                                            backgroundColor: 'whiteAlpha.200',
                                        }}
                                        rightIcon={<FaArrowRight />}
                                        to={item.path}
                                    >
                                        {item.buttonLabel}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Flex>
            <Flex id='about' minHeight='100vh' background='gray.900'>
                <Stack
                    flex={1}
                    padding={6}
                    maxWidth='6xl'
                    margin='auto'
                    spacing={6}
                    textAlign='center'
                    color='white'
                >
                    <Heading>About Us</Heading>
                    <Text fontSize='sm'>
                        Our website is committed to helping learners enhance
                        their statistical knowledge and skills through a
                        comprehensive learning experience. Whether you are a
                        novice seeking to grasp the fundamentals or a seasoned
                        professional aiming to deepen your understanding, our
                        platform offers a wealth of resources tailored to
                        support your growth. Dive into a world of data-driven
                        insights, analytical tools, and expert guidance as we
                        empower you to excel in statistical analysis and make
                        informed decisions. Join us on this journey of
                        exploration and discovery as we unravel the complexities
                        of statistics together.
                    </Text>
                </Stack>
            </Flex>
            <Flex background='yellow.400'>
                <Stack
                    flex={1}
                    maxWidth='6xl'
                    margin='auto'
                    padding={6}
                    spacing={6}
                    textAlign='center'
                >
                    <Heading>Mission Statement</Heading>
                    <Text fontSize='sm'>
                        Our mission is to support and empower learners by
                        enhancing their statistical knowledge and skills. We are
                        dedicated to providing a comprehensive and accessible
                        learning environment where students, researchers, and
                        data enthusiasts can expand their understanding of
                        statistics through quality educational resources,
                        practical tools, and expert guidance. Our platform is
                        committed to fostering a community of engaged learners
                        who are equipped to excel in statistical analysis, make
                        informed decisions, and succeed in their data-driven
                        endeavors.
                    </Text>
                </Stack>
            </Flex>
            <Flex
                id='contact'
                minHeight='100vh'
                sx={{
                    '&:before': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundImage: `url(${helpBgOverlay})`,
                        WebkitBackgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        zIndex: -2,
                    },
                    '&:after': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(12px)',
                        zIndex: -1,
                    },
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}
            >
                <Stack
                    maxWidth='6xl'
                    margin='auto'
                    direction={{ base: 'column-reverse', md: 'row', lg: 'row' }}
                    height='fit-content'
                    padding={6}
                    gap={6}
                >
                    <Stack textAlign='center' color='white'>
                        <Heading mb={4}>Do you need any help?</Heading>
                        <Tag alignSelf='center' fontWeight='bold'>
                            Call us at +639300616042
                        </Tag>
                        <Text fontSize='sm'>
                            Whether you require guidance on statistical topics,
                            data analysis techniques, or have inquiries about
                            our NOR services, feel free to reach out to us. Your
                            success is our priority, and we are committed to
                            providing prompt and reliable assistance to help you
                            excel in your data-driven endeavors.
                        </Text>
                        <Button
                            size='sm'
                            mt={4}
                            colorScheme='yellow'
                            alignSelf='center'
                        >
                            Contact Us
                        </Button>
                    </Stack>
                    <Divider hideFrom={['md', 'lg']} />
                    <Center hideBelow='md' my='auto' height='10rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Stack textAlign='center' color='white'>
                        <Heading mb={4}>Our Team</Heading>
                        <Text fontSize='sm'>
                            Our team of student-researchers is fueled by a
                            shared passion for statistics. With a blend of
                            academic curiosity and practical insights, we are
                            dedicated to providing fellow learners with valuable
                            resources and support on our statistical learning
                            platform.
                        </Text>
                    </Stack>
                </Stack>
            </Flex>
        </div>
    )
}

export default IndexPage
