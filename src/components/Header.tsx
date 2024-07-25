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
import { IoMenuOutline } from 'react-icons/io5'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FaBook, FaGamepad, FaImage, FaLock, FaPencil } from 'react-icons/fa6'
import { useAuth } from '../context/Auth'
import { MdOutlineDashboard } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const Header = () => {
    const { token, logout } = useAuth()
    const [showHeaderBackground, setShowHeaderBackground] =
        React.useState(false)

    const defaultMenuItems = [
        {
            label: 'Check Lessons',
            icon: <FaBook />,
            path: 'lessons',
            as: NavLink,
        },
        {
            label: 'Take Quizes',
            icon: <FaPencil />,
            path: 'quizzes',
            as: NavLink,
        },
        {
            label: 'Play Games',
            icon: <FaGamepad />,
            path: 'games',
            as: NavLink,
        },
        {
            label: 'View Infographics',
            icon: <FaImage />,
            path: 'infographics',
            as: NavLink,
        },
        {
            label: 'Login Admin',
            icon: <FaLock />,
            path: 'login',
            as: NavLink,
        },
    ]
    const adminMenuItems = [
        {
            label: 'Dashboard',
            icon: <MdOutlineDashboard />,
            path: 'dashboard',
            as: NavLink,
        },
        // {
        //     label: 'Check Lessons',
        //     icon: <FaBook />,
        //     path: 'lessons',
        //     as: NavLink,
        // },
        // {
        //     label: 'Take Quizes',
        //     icon: <FaPencil />,
        //     path: 'quizzes',
        //     as: NavLink,
        // },
        // {
        //     label: 'Play Games',
        //     icon: <FaGamepad />,
        //     path: 'games',
        //     as: NavLink,
        // },
        // {
        //     label: 'View Infographics',
        //     icon: <FaImage />,
        //     path: 'infographics',
        //     as: NavLink,
        // },
    ]

    React.useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            const opacity = Math.min(scrollY / (window.innerHeight / 10), 1)
            if (opacity === 1) {
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

    return (
        <Box
            sx={{
                position: 'fixed',
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
                    <NavLink to='/'>
                        <Text textColor='white' fontWeight='black'>
                            KAMJ StatWise
                        </Text>
                    </NavLink>
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
                                        as={menuItem?.as}
                                        to={menuItem.path}
                                        fontWeight={500}
                                    >
                                        {menuItem.label}
                                    </MenuItem>
                                )
                            )}
                            {token && (
                                <MenuItem
                                    background='transparent'
                                    icon={<BiLogOut/>}
                                    fontWeight={500}
                                    onClick={logout}
                                >
                                    Logout
                                </MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
        </Box>
    )
}

export default Header
