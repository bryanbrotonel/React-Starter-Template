import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: red;
`;

function Foo() {
  return (
    <Container>
      <p>I am Foo! Pleasure to meet you.</p>
    </Container>
  );
}

export default Foo;
