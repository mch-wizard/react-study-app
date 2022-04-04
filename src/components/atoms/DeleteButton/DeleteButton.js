import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledDeleteButton } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <StyledDeleteButton {...props}>
    <DeleteIcon />
  </StyledDeleteButton>
);

export default DeleteButton;
