import React, { ChangeEvent, FormEvent } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { QuizCodeData } from '../types/data'
import { rdtCustomStyle } from '../utils/rdt-custom-style'
import {
    Button,
    Flex,
    IconButton,
    Input,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import moment from 'moment'
import { Modal } from './Modal'
import useQuizCode from '../hooks/useQuizCode'
import { FaTrash } from 'react-icons/fa'

type QuizCodeList = {
    quizId: number
}

const CodesList: React.FC<QuizCodeList> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        getQuizCodeData,
        isGetQuizCodeLoading,
        generateCode,
        isGenerateCodeLoading,
        deleteQuizCode,
    } = useQuizCode({ id: props.quizId })

    const [expDate, setExpDate] = React.useState<
        string | number | readonly string[] | undefined
    >()

    const handleDeleteCode = async (row: QuizCodeData) => {
        try {
            await deleteQuizCode(row.id)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = React.useMemo<TableColumn<QuizCodeData>[]>(
        () => [
            {
                grow: 0,
                name: 'Code',
                selector: (row) => row.code,
            },
            {
                name: 'Expires',
                selector: (row) => row.expires_at,
                format: (row) => moment(row.expires_at).format('LLL'),
            },
            {
                width: '3rem',
                right: true,
                cell: (row) => (
                    <IconButton
                        size='sm'
                        color='white'
                        variant='ghost'
                        aria-label='option'
                        icon={<FaTrash />}
                        _hover={{
                            backgroundColor: 'red.600',
                        }}
                        onClick={() => handleDeleteCode(row)}
                    />
                ),
            },
        ],
        []
    )

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await generateCode({quiz_id: props.quizId, expiration: expDate as string})
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setExpDate(e.target.value)
    }

    const handleClose = () => {
        onClose()
        setExpDate(undefined)
    }

    return (
        <Stack>
            <DataTable
                data={getQuizCodeData?.codes as QuizCodeData[]}
                columns={columns}
                progressPending={isGetQuizCodeLoading}
                customStyles={rdtCustomStyle}
            />
            <Button size='sm' colorScheme='yellow' onClick={onOpen}>
                New Code
            </Button>

            <Modal
                title='Code Expiration'
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                onCloseComplete={handleClose}
                closeOnOverlayClick={!isGenerateCodeLoading}
            >
                <form onSubmit={handleSubmit}>
                    <Stack>
                        <Input
                            value={expDate}
                            color='white'
                            type='datetime-local'
                            onChange={handleChange}
                        />
                        <Flex gap={2}>
                            <Button
                                flex={1}
                                size='sm'
                                variant='ghost'
                                color='white'
                                bg='gray.700'
                                _hover={{
                                    backgroundColor: 'gray.600',
                                }}
                                onClick={handleClose}
                                disabled={isGenerateCodeLoading}
                            >
                                Cancel
                            </Button>
                            <Button
                                flex={1}
                                size='sm'
                                colorScheme='yellow'
                                type='submit'
                                disabled={isGenerateCodeLoading}
                            >
                                Okay
                            </Button>
                        </Flex>
                        <Text color='gray.500' fontSize='xs'>
                            The default expiration date is set to 7 days.
                        </Text>
                    </Stack>
                </form>
            </Modal>
        </Stack>
    )
}

export default CodesList
