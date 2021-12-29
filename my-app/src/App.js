import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NaviBar from './components/NaviBar';
import {About} from './components/About';
import {Home} from './components/Home';
import {NoMatch} from './components/NoMatch';
import PostTemplate from './components/PostTemplate';
import PostPage from './PostPage';

function App() {
        return (
            <React.Fragment>
                <Router>
                    <NaviBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/posts" element={<PostPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NoMatch />} />
                        <Route path="/single-post/:id" element={<PostTemplate />} />
                    </Routes>
                </Router>
            </React.Fragment>
        );
    }


export default App

