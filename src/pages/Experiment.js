import React, { useEffect } from 'react'
import { Notion } from "@neurosity/notion";
import { notion, useNotion } from "../services/notion";
import { ExperimentWindow } from 'jspsych-react';
import { timelineFactory } from '../Components/timeline';
import callbackImageKeyboardResponsePlugin from '../Plugins/callbackImageKeyboardResponsePlugin';


export function Experiment() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    useEffect(() => {
        // if (!user || !notion) {
        //     return;
        // }

        const subscription = notion.brainwaves("raw").subscribe(brainwaves => {

            console.log(brainwaves);

            const marker = brainwaves.marker;
            if (marker) {
                console.warn("Marker found", brainwaves.marker)
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [notion]);
    return (
        <div>
            <ExperimentWindow
                settings={{ timeline }}
                plugins={{ callbackImageKeyboardResponsePlugin }}
            />

        </div>
    )
}


