import React from 'react';
import Foo from 'components/Foo/index.js';
import styled from 'styled-components';

const Container = styled.div`
  color: green;
`;

const App = () => {
  return (
    <Container>
      <p>Hello World</p>
      <Foo />
    </Container>
  );
};

export default App;
