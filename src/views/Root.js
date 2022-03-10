import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from 'views/Root.styles';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Nav />
                <Home />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
