import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from 'react-materialize';
import theme from "./theme/theme";
import Header from "./components/Header";

const AppContainer = styled.div`
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.borders.borderRadiusSmall};
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.layout.contentHeight};
  justify-content: center;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  width: ${({ theme }) => theme.layout.contentWidth};
`;

const DadJoke = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-top: -${({ theme }) => theme.spacing.small};
`;

const JokeButton = styled(Button)`
  line-height: 6.25px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
`;

class App extends Component {
  state = {
    dadJoke: `Dad, did you get a haircut? No, I got them all cut!`
  };

  generateDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json',
      }
    });

    const dadJokeObj = await response.json();

    return this.setState({
      dadJoke: dadJokeObj.joke
    });
  };

  render() {
    const { dadJoke } = this.state;

    return (
      // Pass theme values to all child components
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <AppContainer>
            <DadJoke>"{dadJoke}"</DadJoke>
            <JokeButton onClick={this.generateDadJoke}>GET A NEW JOKE</JokeButton>
          </AppContainer>
        </>
      </ThemeProvider>
    );
  }
};

export default App;
