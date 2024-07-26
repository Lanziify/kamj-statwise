import {
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps as ChakraModalProps,
} from '@chakra-ui/react'
import React from 'react'

type CustomModalProps = ChakraModalProps & {
    title: string

    children: React.ReactNode
}

const CustomModal: React.FC<CustomModalProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <ChakraModal {...props}>
            <ModalOverlay />
            <ModalContent background='gray.800'>
                <ModalHeader color='white'>{title}</ModalHeader>
                <ModalCloseButton color='white' />
                <ModalBody pb={6}>{children}</ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}

export { CustomModal as Modal }
