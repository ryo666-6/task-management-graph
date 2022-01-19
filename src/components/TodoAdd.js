import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const TodoAdd = ({inputEl, handleAddTodoListItem, placeholder, leftIcon, buttonText}) => {
    return (
      <>
        <Textarea placeholder={placeholder} bgColor='white' mt='8' ref={inputEl} borderColor='gray.400'/>
        <Button onClick={handleAddTodoListItem} colorScheme='blue' leftIcon={leftIcon} mt='8'>{buttonText}</Button>
      </>
    )
  }
export default TodoAdd


