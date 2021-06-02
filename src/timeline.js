// Helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const post_trial_gap = function () {
  return Math.floor(Math.random() * jitter) + iti;
};


// Experiment parameters
const trial_duration = 300;
const stim_duration = 200;
const iti = 300;
const jitter = 200;
const n_trials = 10;
const prob = .15;
const plugin_name = 'callbackImageKeyboardResponsePlugin';


/**
 *
 * Example callback:
 *
 * const callback =  (targetID) => {
 *    console.log(targetID)
 * }
 *
 */
export function timelineFactory(callback) {

  const start_callback = function () {
    callback('start')
  };
  const target_callback = function () {
    callback('target')
  };
  const nontarget_callback = function () {
    callback('nontarget')
  };
  const stop_callback = function () {
    callback('stop')
  };

  // jspsych is in the node_modules
  const base_path = '/src/images/';
  let targets = [
    '000001.jpg',
    '000002.jpg',
    '000003.jpg',
    '000004.jpg',
    '000005.jpg',
    '000006.jpg',
    '000007.jpg',
    '000008.jpg',
    '000009.jpg',
    '000010.jpg',
  ];

  targets = targets.map(target => `${base_path}${target}`);

  const stimuli_order = [];

  for (let counter = 0; counter < n_trials; counter++) {
    stimuli_order.push(Math.random() > prob)
  }

  const stim_list = [];
  const images = [];
  let trial, image;
  for (let counter = 0; counter < n_trials; counter++) {
    if (stimuli_order[counter] === true) {
      let photo_idx = getRandomInt(0, targets.length);
      trial = {
        stimulus: targets[photo_idx],
        on_start: target_callback
      };
      image = targets[photo_idx];
    }

    images.push(image);
    stim_list.push(trial);
  }

  // Create timeline
  const timeline = [];

  const welcome_block = {
    type: 'callback-html-keyboard-response',
    stimulus: "In this exercise, you will be shown a series of quickly moving pictures. In between each picture, you will see a <strong>+</strong>. Please focus on this when there is not an image on the screen. This exercise contains imagery that some may find disturbing. User beware. Press any key to begin.",
    post_trial_gap: 500,
    on_start: start_callback
  };
  timeline.push(welcome_block);

  const test_trials = {
    stimulus: 'stimulus',
    type: plugin_name,
    timeline: stim_list,
    trial_duration: trial_duration,
    stimulus_duration: stim_duration,
    post_trial_gap: post_trial_gap(),
  };
  timeline.push(test_trials);

  // const fixation = {
  //   type: "callbackImageDisplay",
  //   stimulus: "./images/fixation.png",
  //   stimulus_duration: stim_duration,
  //   trial_duration: () => params.iti + Math.random() * params.jitter,
  //   post_trial_gap: post_trial_gap(),

  // }
  // timeline.push(fixation);

  const end_block = {
    type: 'callback-html-keyboard-response',
    stimulus: "Thanks for participating!",
    post_trial_gap: 500,
    on_start: stop_callback
  };

  timeline.push(end_block);

  return timeline;

}
