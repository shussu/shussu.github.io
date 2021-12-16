import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NaviBar from './NaviBar';
import {About} from './About';
import {Post} from './Post';
import {Home} from './Home';
import {NoMatch} from './NoMatch';

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

