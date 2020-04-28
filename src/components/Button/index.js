import React from 'react';
import styled from 'styled-components';

export const IconButton = styled.button`
  background: ${(props) =>
    props.color
      ? props.theme.colors[props.color].light
      : props.theme.colors.blue.light};
  border: 1px solid #ececf2;
  box-sizing: border-box;
  border-radius: 8px;
  :hover {
    background: ${(props) =>
      props.color
        ? props.theme.colors[props.color].dark
        : props.theme.colors.blue.dark};
  }
`;

const ButtonWrapper = styled.button`
  color: ${(props) =>
    props.color !== 'gray'
      ? props.theme.colors.white
      : props.theme.colors.gray.dark};
  background: ${(props) =>
    props.color !== 'gray'
      ? props.theme.colors[props.color]?.main || props.theme.colors.blue.main
      : props.theme.colors[props.color].light};
  border-radius: 8px;
  border-width: 0;
  text-transform: uppercase;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${(props) =>
      props.color !== 'gray'
        ? props.theme.colors[props.color]?.dark || props.theme.colors.blue.dark
        : props.theme.colors[props.color].main};
  }
  svg {
    color: ${(props) =>
      props.color !== 'gray' ? props.theme.colors.white : undefined};
  }
`;

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
