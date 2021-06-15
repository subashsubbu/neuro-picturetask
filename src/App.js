import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";

import { ProvideNotion } from "./services/notion";
import { Devices } from "./pages/Devices";
import { Loading } from "./Components/Loading";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Experiment } from "./pages/Experiment";
import { Instructions } from "./pages/Instructions";
import { useNotion } from "./services/notion";
import 'regenerator-runtime/runtime'

export function App() {
    return (
        <ProvideNotion>
            <Routes />
        </ProvideNotion>
    );
}

function Routes() {
    const { user, loadingUser } = useNotion();

    useEffect(() => {
        if (!loadingUser && !user) {
            navigate("/login");
        }
    }, [user, loadingUser]);

    if (loadingUser) {
        return <Loading />;
    }

    return (
        <Router>
            <Instructions path="/" />
            <Experiment path="/experiment" />
            <Devices path="/devices" />
            <Login path="/login" />
            <Logout path="/logout" />
        </Router>
    );
}


