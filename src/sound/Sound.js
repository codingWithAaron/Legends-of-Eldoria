import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Sound = () => {
  useEffect(() => {
    // Get the audio element by ID
    const audioElement = document.getElementById('audioPlayer');

    // Play the audio when any user interaction occurs
    const playOnUserInteraction = () => {
      audioElement.play();
      document.removeEventListener('click', playOnUserInteraction);
    };

    document.addEventListener('click', playOnUserInteraction);

    // Cleanup: pause the audio when the component unmounts
    return () => {
      audioElement.pause();
      document.removeEventListener('click', playOnUserInteraction);
    };
  }, []);

  return (
    <>
      <ReactAudioPlayer
        id="audioPlayer"
        src="/assets/adventure-theme.mp3" // aduio file must be in the public directory
        autoPlay
        controls
        loop
        volume={0.2} // Adjust the volume as needed (0.0 to 1.0)
        style={{ display: 'none' }} // Hide the audio player
      />
    </>
  );
};

export default Sound;
