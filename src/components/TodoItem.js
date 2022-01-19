import React from 'react'
import { ListItem, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = ({todo, toggleTodoListItemStatus, deleteTodoListItem}) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id)

    const label = todo.done ? 'Not yet...' : 'Done!'
    const setControlScheme = todo.done ? 'pink' : 'blue'
    
    return (
        <ListItem borderWidth='1px' p='4' mt='4' bg='white' borderRadius='md' borderColor='gray.300' >
            <Text mb='6'>
                {todo.content}
            </Text>
            <Flex align='center' justify='flex-end'>
                <Button onClick={handleToggleTodoListItemStatus} colorScheme={setControlScheme} variant='outline' size='sm'>{label}</Button>
                <IconButton onClick={handleDeleteTodoListItem} icon={<DeleteIcon/>} variant='unstyled' aria-label='delete'/>
            </Flex>
        </ListItem>
    )
}

export default TodoItem

