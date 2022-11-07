import React from "react";
import {Route} from "react-router-dom";


interface Props {
    path: string,
    component: React.ReactNode,
}

const PublicRoute: React.FC<Props> = (props) => {
    return <Route path={props.path} element={props.component}/>;
};

export default PublicRoute;
