import { useCallback } from 'react';

export const useSound = (soundPath: string, volume: number = 1) => {
  return useCallback(() => {
    const audio = new Audio(soundPath);
    audio.volume = volume;
    audio.play();
  }, [soundPath, volume]);
};