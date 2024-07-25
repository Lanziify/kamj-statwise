import React from 'react'
import {
    Alert,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { loginFields } from '../../types/type'
import { useAuth } from '../../context/Auth'
import { AxiosError, isAxiosError } from 'axios'

const Login = () => {
    const { login } = useAuth()
    const [loginError, setLoginError] = React.useState(null)
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: loginFields) => {
        try {
            await login(values)
        } catch (error) {
            if (isAxiosError(error)) {
                setLoginError(error.response?.data.message)
            }
        }
    }

    return (
        <Flex height='100vh' background='gray.900'>
            <Container
                p={6}
                maxWidth='sm'
                alignSelf='center'
                borderWidth={1}
                rounded='md'
                borderColor='gray.700'
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} color='white'>
                        <Heading mb={4}>Login</Heading>
                        <FormControl isInvalid={!!errors.email}>
                            <FormLabel fontSize='sm' fontWeight={700}>
                                Email
                            </FormLabel>
                            <Input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                type='email'
                                placeholder='Email'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                _autofill={{
                                    background: 'transparent',
                                }}
                                fontSize='sm'
                                borderColor='gray.700'
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.password}>
                            <FormLabel fontWeight={700} fontSize='sm'>
                                Password
                            </FormLabel>
                            <Input
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters long',
                                    },
                                })}
                                type='password'
                                placeholder='Password'
                                _focus={{
                                    borderColor: 'yellow.500',
                                    boxShadow:
                                        '0 0 0 2px rgba(255, 255, 0, 0.5)',
                                }}
                                _autofill={{
                                    background: 'transparent',
                                }}
                                fontSize='sm'
                                borderColor='gray.700'
                            />
                            <FormErrorMessage>
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Alert
                            hidden={!loginError}
                            status='error'
                            rounded='md'
                            variant='solid'
                            fontSize='sm'
                        >
                            {loginError}
                        </Alert>
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            colorScheme='yellow'
                            alignSelf='start'
                        >
                            Login
                        </Button>
                    </Stack>
                </form>
            </Container>
        </Flex>
    )
}

export default Login
