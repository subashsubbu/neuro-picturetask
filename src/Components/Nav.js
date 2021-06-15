// // src/components/Nav.js
// import React, { useState, useEffect } from "react";
// import { navigate } from "@reach/router";

// import { Status } from "./Status";
// import { Footer } from "./Footer";

// export function Nav({ notion }) {
//   const [info, setInfo] = useState(null);

//   useEffect(() => {
//     if (!notion) {
//       return;
//     }

//     notion.getInfo().then(info => {
//       setInfo(info);
//     });
//   }, [notion]);

//   return (
//     <nav className="card">
//       <Status notion={notion} info={info} />
//       <button onClick={() => navigate("/logout")} className="card-btn">
//         Logout
//       </button>
//     </nav>
//   );
// }





import React from "react";
import { navigate } from "@reach/router";

import { Status } from "./Status";

export function Nav() {
  function goToLogout() {
    navigate("/logout");
  }

  return (
    <nav className="card">
      <Status />
      <button onClick={goToLogout} className="card-btn">
        Logout
      </button>      
    </nav>
  );
}
