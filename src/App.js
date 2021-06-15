import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";

import { ProvideNotion } from "./services/notion";
import { Devices } from "./pages/Devices";
import { Loading } from "./components/Loading";
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






// import React, { useEffect, useState } from "react";
// import { Router, navigate } from "@reach/router";

// import { ProvideNotion } from "./services/notion";
// import { Devices } from "./pages/Devices";
// import { Loading } from "./Components/Loading";
// import { Login } from "./pages/Login";
// import { Logout } from "./pages/Logout";
// import { Experiment } from "./pages/Experiment";
// import { Instructions } from "./pages/Instructions";
// import useLocalStorage from "react-use/lib/useLocalStorage";
// import { Notion } from "@neurosity/notion";
// import 'regenerator-runtime/runtime'



// export function App() {
//     const [notion, setNotion] = useState(null);
//     const [user, setUser] = useState(null);
//     const [deviceId, setDeviceId] = useLocalStorage("deviceId");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (deviceId) {
//             const notion = new Notion({ deviceId });
//             setNotion(notion);
//         } else {
//             setLoading(false);
//         }
//     }, [deviceId]);

//     useEffect(() => {
//         if (!notion) {
//             return;
//         }

//         const subscription = notion.onAuthStateChanged().subscribe(user => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 navigate("/");
//             }
//             setLoading(false);
//         });

//         return () => {
//             subscription.unsubscribe();
//         };
//     }, [notion]);

//     return (
//         <Router>
//             {/* <Instructions path="/ins" /> */}
//             <Experiment path='/' />
//             <Login
//                 path="/login"
//                 notion={notion}
//                 user={user}
//                 setUser={setUser}
//                 setDeviceId={setDeviceId}
//             />
//             <Logout
//                 path="/logout"
//                 notion={notion}
//                 resetState={() => {
//                     setNotion(null);
//                     setUser(null);
//                     setDeviceId("");
//                 }}
//             />
//         </Router>

//     )
// }





