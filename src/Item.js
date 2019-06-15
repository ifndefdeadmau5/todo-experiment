import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

export default ({ children }) => {
  const [editable, setEditable] = useState(false);
  const [input, setInput] = useState(children);
  let content = null;

  if (editable) {
    content = <TextField value={input} />;
  } else {
    content = children;
  }

  return (
    <div>
      <li>
        {content}
        <Button
          onClick={() => {
            setEditable(!editable);
          }}
        >
          Edit
        </Button>
      </li>
    </div>
  );
};
