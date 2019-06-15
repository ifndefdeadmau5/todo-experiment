import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Item from './Item';

const StyledPaper = styled(Paper)`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
`;

export default ({ children }) => {
  const [todoList, setTodoList] = useState(['강아지 밥주기', '빨래하기']);
  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState('ex) 서울특별시');

  return (
    <StyledPaper>
      <InputWrapper>
        <TextField
          placeholder={placeholder}
          onFocus={() => {
            setPlaceholder('');
          }}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button
          onClick={() => {
            setTodoList([...todoList, input]);
          }}
        >
          Submit
        </Button>
      </InputWrapper>
      <ul>
        {todoList.map(item => {
          return <Item>{item}</Item>;
        })}
      </ul>
    </StyledPaper>
  );
};
