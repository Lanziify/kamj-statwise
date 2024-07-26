import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from '../api/axios'
import { JWTData, loginFields } from '../types/type'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import useAxiosInterceptor from '../hooks/useAxiosInterceptor'

interface AuthProverProps {
    children: React.ReactNode
}

type AuthContextType = {
    token: string | null
    tokenPayload: JWTData | null
    isTokenLoading: boolean
    login: (values: loginFields) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = React.createContext<AuthContextType>({
    token: null,
    tokenPayload: null,
    isTokenLoading: true,
    login: async () => {},
    logout: async () => {},
})

const Auth: React.FC<AuthProverProps> = ({ children }) => {
    const navigation = useNavigate()
    const [token, setToken] = React.useState<string | null>(null)
    const customAxios = useAxiosInterceptor(token as string)
    const [tokenPayload, setTokenPayload] = React.useState<JWTData | null>(null)
    const [isTokenLoading, setIsTokenLoading] = React.useState(true)

    const { mutateAsync: tokenMutation, isPending } = useMutation({
        mutationKey: ['accessToken'],
        mutationFn: (values: loginFields) => {
            return axios.post('login', values)
        },
        onSuccess: (response) => {
            window.localStorage.setItem(
                'accessToken',
                response.data.access_token
            )
            setToken(response.data.access_token)
            setTokenPayload(jwtDecode(response.data.access_token))
        },
    })

    const login = async (values: loginFields) => {
        try {
            await tokenMutation(values)
            return navigation('admin')
        } catch (error) {
            throw error
        }
    }

    const logout = async () => {
        try {
            await customAxios.post('logout')
            setToken(null)
            setTokenPayload(null)
            window.localStorage.removeItem('accessToken')
        } catch (error) {
            throw error
        }
    }

    const getTokenFromStorage = async (key: string) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(window.localStorage.getItem(key))
            } catch (error) {
                reject(error)
            }
        })
    }

    React.useEffect(() => {
        setIsTokenLoading(true)
        getTokenFromStorage('accessToken').then((token) => {
            if (token) {
                setToken(token as string)
                setTokenPayload(jwtDecode(token as string))
            }
        })
        setIsTokenLoading(false)
    }, [])

    React.useEffect(() => {
        if (token && tokenPayload) {
            try {
                if (tokenPayload.exp < Date.now() / 1000) {
                    setToken(null)
                    setTokenPayload(null)
                    window.localStorage.removeItem('accessToken')
                    navigation('/')
                }
                // customAxios.get('user').then((response) => {
                //     console.log(response)
                // })
            } catch (error) {
                console.log(error)
            }
        }
    }, [token])

    return (
        <AuthContext.Provider
            value={{ login, logout, token, tokenPayload, isTokenLoading }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { Auth as AuthProvider }

export const useAuth = () => React.useContext(AuthContext)
