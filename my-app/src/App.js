import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { request } from 'graphql-request';
import NaviBar from './components/NaviBar';
import {About} from './components/About';
import Post from './components/Post';
import {Home} from './components/Home';
import {NoMatch} from './components/NoMatch';

function App() {
        return (
            <React.Fragment>
                <Router>
                    <NaviBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/about" element={<About />} />
                        <Route component={NoMatch} />
                    </Routes>
                </Router>
            </React.Fragment>
        );
    }


export default App

