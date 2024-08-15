import {
    Button,
    IconButton,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Stack,
} from '@chakra-ui/react'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { ActionMenu } from '../types/props'

type ActionButtonProps<T> = {
    actions: ActionMenu<T>[]
    row: T
}

const ActionButton = <T,>(props: ActionButtonProps<T>) => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <IconButton
                    size='sm'
                    color='white'
                    variant='ghost'
                    aria-label='option'
                    icon={<IoEllipsisHorizontal />}
                    _hover={{
                        color: 'whiteAlpha.800',
                        backgroundColor: 'gray.600',
                    }}
                    _active={{
                        color: 'whiteAlpha.800',
                        backgroundColor: 'gray.600',
                    }}
                />
            </PopoverTrigger>
            <Portal>
                <PopoverContent
                    width='fit-content'
                    sx={{
                        backgroundColor: 'gray.900',
                        color: 'white',
                        border: '1px solid #2D3748',
                    }}
                >
                    {/* <PopoverArrow
                        bg='gray.900'
                        shadowColor='gray.700'
                    /> */}
                    <PopoverHeader fontSize='sm' borderBottomColor='gray.700'>
                        Actions
                    </PopoverHeader>
                    <PopoverBody padding={0}>
                        <Stack spacing={0}>
                            {props.actions.map((action) => (
                                <Button
                                    key={action.name}
                                    display='flex'
                                    gap={1}
                                    justifyContent='flex-start'
                                    fontWeight={500}
                                    rounded='unset'
                                    size='sm'
                                    color='white'
                                    background='transparent'
                                    _hover={{
                                        color: 'whiteAlpha.800',
                                        backgroundColor: 'gray.700',
                                    }}
                                    leftIcon={action.icon}
                                    onClick={() => action.onClick(props.row)}
                                >
                                    {action.name}
                                </Button>
                            ))}
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}

export default ActionButton
