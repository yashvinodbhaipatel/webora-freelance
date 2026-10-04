import { createContext, useContext } from 'react';
export const SiteContext = createContext({ paused: false, toggleMotion: () => {}, openBrief: () => {} });
export const useSite = () => useContext(SiteContext);
