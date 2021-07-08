import React, { useEffect } from 'react'
import { pipe } from "rxjs";
import { scan } from "rxjs/operators";
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

    const subscription = notion.brainwaves("raw").pipe(
      concatEpochs()
    ).subscribe(brainwaves => {
      console.log(brainwaves)
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


function concatEpochs() {
  return pipe(
    scan((acc, epoch) => {
      for (let channelIndex = 0; channelIndex < acc.data.length; channelIndex++) {
        acc.data[channelIndex].push(...epoch.data[channelIndex])
      }

      acc.info.markers = Array.isArray(acc.info.markers)
        ? acc.info.markers.concat(...(epoch.info.markers || []))
        : [];

      return acc;
    })
  )
}