import React, { useRef } from 'react';
import { TwitterIcon, TwitterShareButton, LineIcon,LineShareButton } from 'react-share';

import { useTodo } from './hooks/useTodo';
import TodoTitle from './components/TodoTitle';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import Time from './components/Time';
import LineChart from './components/LineChart';
import Share from './components/Share';

import { Container, Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';



function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
        <Time/>
        <TodoTitle
          title="Today I try to do..."
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
        />
        <TodoAdd
          placeholder="ADD TODO"
          leftIcon={<AddIcon />}
          buttonText="Add Task"
          inputEl={inputEl}
          handleAddTodoListItem={handleAddTodoListItem}
        />
        <TodoList
          todoList={inCompletedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="What I do now are..."
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
        />
        <TodoList
          todoList={completedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="Done! Good job!"
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
        />
        <LineChart pl='50' mt='1'/>

        <Box mr='20px' mt='3'>
          <TwitterShareButton display='block' left='50%' top='50%' url="https://youtu.be/LD3IShX8BWQ" title="[Watch on DAZN.]" >
                <TwitterIcon round={true} size={40}/>
          </TwitterShareButton>
          <LineShareButton url="https://qiita.com/koyablue/items/4aeee2fa3c831e2842b7">
            <LineIcon round={true} size={40}/>
          </LineShareButton>
        </Box>
      </Container>
      
      
    </>
  );
}

export default App;
