import React from 'react'
import { ExperimentWindow } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';


function App() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    return (
        <div>
            <ExperimentWindow
                settings={{ timeline }}
                plugins={{ callbackImageKeyboardResponsePlugin }}
            />

        </div>
    )
}

export default App
