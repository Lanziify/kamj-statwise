import React from 'react'
import { customAxios } from '../api/axios'
import { AxiosError, isAxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'
import { JWTData } from '../types/type'

const useAxiosInterceptor = (token: string) => {
    
    // const isAccessTokenExpired = () => {
    //     const currentToken: JWTData = jwtDecode(token)
    //     return currentToken.exp < Date.now() / 1000
    // }

    React.useEffect(() => {
        if (token) {
            const requestInterceptor = customAxios.interceptors.request.use(
                (config) => {
                    // if (!isAccessTokenExpired()) {
                    // }
                    config.headers['Authorization'] = `Bearer ${token}`
                    return config
                },
                (error) => {
                    return Promise.reject(error)
                }
            )

            const responseInterceptor = customAxios.interceptors.response.use(
                (response) => {
                    return response
                },
                async (error) => {
                    if (isAxiosError(error)) {
                        const axiosError = error as AxiosError
                        if (axiosError.response?.data) {
                            throw axiosError.response.data
                        }
                    }
                    return Promise.reject(error)
                }
            )

            return () => {
                customAxios.interceptors.request.eject(requestInterceptor)
                customAxios.interceptors.response.eject(responseInterceptor)
            }
        }
    }, [token])

    return customAxios
}

export default useAxiosInterceptor
