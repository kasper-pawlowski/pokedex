import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Pokemon from './Pokemon/Pokemon';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from 'views/Root.styles';
import { PokeProvider } from 'context/PokeContext';

const Root = () => {
    return (
        <PokeProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Wrapper>
                        <Nav />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/pokemon/:id" element={<Pokemon />} />
                        </Routes>
                    </Wrapper>
                </ThemeProvider>
            </BrowserRouter>
        </PokeProvider>
    );
};

export default Root;
