import React from 'react';
import { css } from 'styled-components';
import defaultImg from '../images/jpeg/room-1.jpeg';

const StyledHero = (props) => {
  const StyledHeader = css`
    min-height: 60vh;
    background: url(${(props) => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <header css={StyledHeader}>
      {props.children}
    </header>
  );
};

export default StyledHero;
