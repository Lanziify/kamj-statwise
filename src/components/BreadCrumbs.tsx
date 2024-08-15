import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
} from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').slice(1)

    const getPath = (path: string) => {
        const pathIndex = pathnames.indexOf(path)

        if (pathnames.length - 1 === pathIndex) return

        // if (pathIndex != pathnames.length - 1) {
        return `/${pathnames.slice(0, pathIndex + 1).join('/')}`
        // }
    }

    return (
        <Container
            maxWidth='6xl'
            position='sticky'
            top={0}
            right={0}
            left={0}
            paddingBottom={2}
            hidden={pathnames.length <= 1}
        >
            <Breadcrumb separator='/' color='white' overflow='auto'>
                {pathnames.map((pathname, index) => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink
                            as={NavLink}
                            to={getPath(pathname)}
                            sx={{
                                maxWidth: '5rem',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            }}
                        >
                            {pathname.charAt(0).toUpperCase() +
                                pathname.slice(1)}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </Container>
    )
}

export default BreadCrumbs
