import {inject, observer} from "mobx-react";
import {withTheme} from "styled-components";
import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";
import Login from "../login/Login";
import NoMatchRoute from "../NoMatchRoute/NoMatchRoute";
import Home from "../home/Home";

const Splash: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<FullScreenLoader/>}>
                <Routes>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'/*'} element={<Home/>}/>
                    <Route path={'/not-found'} element={<NoMatchRoute/>}/>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default inject("store")(observer(withTheme(Splash)));