# Background
- This repo was made forking "jspsych-react-example" (https://github.com/openexp/jspsych-react-example). Currently this project has a neurosity login authentication with devices status and ability to switch devices. 

- We have created a experiment using "jspsych" (https://www.jspsych.org) in the form of timeline and uses plugins to define what to do at each point on the timeline. In this experiment we have displayed random set of images from the [Open Affective Standardized Image Set (OASIS)](https://doi.org/10.3758/s13428-016-0715-3) (**WARNING: explicit content**) in every fraction of seconds and are limited what number of images we have set.

- Currently we have subscribed to the notion devices(emulater) that we have been using and displays "raw" brainwaves in the console.


# Outstanding issues
- 'Raw' brainwaves that we are displaing in console doesn't depend on the task(experiment). what we want is generate brainwaves throughout the task and print in JSON fromat by ```console.log()``` after all pictures have been finished being presented.

- When trying to implement the addMarker function, we are running into an error saying: ```Error: A device must be selected. Make sure to call "notion.selectDevice()"```. At the top of the file, we have instantiated an instance of Notion by declaring ```const notion = new Notion()```, but are running into this error when trying to execute the program. Looking at the documention, we have attempted using the 3 steps to manually select a device, but it has not worked thus far.


# Getting started

- npm install 
- npm install jspsych-react
- npm install @neurosity/notion
- npm start

//If it says some module missing, install the missing one and that should work



