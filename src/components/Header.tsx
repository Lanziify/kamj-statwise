import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import { IoExtensionPuzzle, IoMenuOutline } from 'react-icons/io5'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
// import { Link } from 'react-scroll'
import { FaBook, FaGamepad, FaImage, FaLock, FaPencil } from 'react-icons/fa6'
import { useAuth } from '../context/Auth'
import { MdLibraryBooks, MdOutlineDashboard } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import BreadCrumbs from './BreadCrumbs'

const Header = () => {
    const { token, logout } = useAuth()
    const location = useLocation()

    const [showHeaderBackground, setShowHeaderBackground] =
        React.useState(false)

    const defaultMenuItems = [
        {
            label: 'Check Lessons',
            icon: <FaBook />,
            path: 'lessons',
        },
        {
            label: 'Take Quizes',
            icon: <FaPencil />,
            path: 'quizzes',
        },
        {
            label: 'Play Games',
            icon: <FaGamepad />,
            path: 'games',
        },
        {
            label: 'View Infographics',
            icon: <FaImage />,
            path: 'infographics',
        },
        {
            label: 'Login Admin',
            icon: <FaLock />,
            path: 'login',
        },
    ]
    const adminMenuItems = [
        {
            label: 'Dashboard',
            icon: <MdOutlineDashboard />,
            path: '/admin/dashboard',
        },
        {
            label: 'My Lessons',
            icon: <MdLibraryBooks />,
            path: '/admin/lessons',
        },
        {
            label: 'My Quizzes',
            icon: <IoExtensionPuzzle />,
            path: '/admin/quizzes',
        },
        // {
        //     label: 'Check Lessons',
        //     icon: <FaBook />,
        //     path: 'lessons',
        // },
        // {
        //     label: 'Take Quizes',
        //     icon: <FaPencil />,
        //     path: 'quizzes',
        // },
        // {
        //     label: 'Play Games',
        //     icon: <FaGamepad />,
        //     path: 'games',
        // },
        // {
        //     label: 'View Infographics',
        //     icon: <FaImage />,
        //     path: 'infographics',
        // },
    ]

    React.useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 64 / 2) {
                setShowHeaderBackground(true)
            } else {
                setShowHeaderBackground(false)
            }
        }

        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    console.log()

    return (
        <Box
            sx={{
                position:
                    location.pathname.split('/').slice(1)[0] === ''
                        ? 'fixed'
                        : 'sticky',
                top: 0,
                right: 0,
                left: 0,
                zIndex: 10,
                backgroundColor: showHeaderBackground
                    ? 'rgba(23, 25, 35, .95)'
                    : '',
                backdropFilter: showHeaderBackground ? 'blur(16px)' : '',
                transition: 'all 300ms cubic-bezier(.17,.67,.83,.67)',
            }}
        >
            <Box
                sx={{
                    maxW: '6xl',
                    m: 'auto',
                    p: 4,
                }}
            >
                <Flex justify='space-between' alignItems='center'>
                    <Link to='/'>
                        <Text textColor='white' fontWeight='black'>
                            KAMJ StatWise
                        </Text>
                    </Link>
                    {/* <IconButton
                        ref={btnRef}
                        size='sm'
                        colorScheme='yellow'
                        aria-label='menu'
                        icon={<IoMenuOutline />}
                        onClick={onOpen}
                    /> */}
                    <Menu>
                        <MenuButton as={Button} size='sm' colorScheme='yellow'>
                            <IoMenuOutline />
                        </MenuButton>
                        <MenuList
                            sx={{
                                backgroundColor: 'rgba(23, 25, 35, 1)',
                                color: 'white',
                                border: '1px solid #2D3748',
                            }}
                        >
                            {(!token ? defaultMenuItems : adminMenuItems).map(
                                (menuItem) => (
                                    <MenuItem
                                        key={menuItem.label}
                                        background='transparent'
                                        icon={menuItem.icon}
                                        as={Link}
                                        to={menuItem.path}
                                        fontWeight={500}
                                        fontSize='sm'
                                    >
                                        {menuItem.label}
                                    </MenuItem>
                                )
                            )}
                            {token && (
                                <MenuItem
                                    background='transparent'
                                    icon={<BiLogOut />}
                                    fontWeight={500}
                                    fontSize='sm'
                                    onClick={logout}
                                >
                                    Logout
                                </MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>

            {location.pathname.includes('admin') && <BreadCrumbs />}
        </Box>
    )
}

export default Header
