import React, { Component } from 'react'
import { test } from './Components/test'
// import { Router } from '@reach/router'
import { LoginForm } from './Components/LoginForm'
import { Experiment } from './pages/Experiment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

    return (
        <Router>
            <Switch>
                <Route path='/test' component={test} />
                <Route path='/login' component={LoginForm} />
                <Route path='/experiment' component={Experiment} />
            </Switch>
            {/* <Experiment /> */}
            {/* <LoginForm /> */}

        </Router>

    )
}

export default App





// import React from 'react'
// import { ExperimentWindow } from 'jspsych-react';
// import { timelineFactory } from './Components/timeline';
// import callbackImageKeyboardResponsePlugin from './Plugins/callbackImageKeyboardResponsePlugin';



// function App() {
//     const callback = (targetID) => console.log(targetID);
//     const timeline = timelineFactory(callback);
//     return (
//         <div>
//             <ExperimentWindow
//                 path='/experiment'
//                 settings={{ timeline }}
//                 plugins={{ callbackImageKeyboardResponsePlugin }}
//             />

//         </div>
//     )
// }

// export default App
