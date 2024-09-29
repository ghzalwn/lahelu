import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
  Video,
  AVPlaybackStatus,
  ResizeMode,
  AVPlaybackStatusSuccess,
} from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Type guard to ensure we are working with AVPlaybackStatusSuccess
const isPlaybackStatusSuccess = (
  status: AVPlaybackStatus | null,
): status is AVPlaybackStatusSuccess => {
  return status !== null && !('error' in status) && status.isLoaded; // Ensure it is loaded and not an error
};

const VideoPlayer = () => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null); // Initialize status as null

  const handlePlayPause = async () => {
    console.log('this');
    if (videoRef.current && isPlaybackStatusSuccess(status)) {
      if (status.isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
    }
  };

  return (
    <View style={{}}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        }}
        useNativeControls={false} // Hide native controls
        resizeMode={ResizeMode.CONTAIN} // Use ResizeMode from expo-av
        isLooping
        onPlaybackStatusUpdate={(status) => {
          setStatus(status); // Update the playback status
        }}
      />

      {isPlaybackStatusSuccess(status) && (
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
          {!status.isPlaying ? (
            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 30,
                padding: 10,
              }}
            >
              <MaterialIcons name={'play-arrow'} size={30} color="#fff" />
            </View>
          ) : (
            <MaterialIcons name={'pause'} size={50} color="transparent" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: windowWidth,
    minHeight: windowHeight * 0.4,
    height: 'auto', // Adjust height as needed
  },
  playButton: {
    position: 'absolute', // Position the button on top of the video
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    marginLeft: -25, // Adjust left offset to center the icon (icon width / 2)
    marginTop: -25, // Adjust top offset to center the icon (icon height / 2)
  },
});

export default VideoPlayer;
