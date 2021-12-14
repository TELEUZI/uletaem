import { createContext } from 'react';
import { RegisteredElements, TabsState } from '../models/tabs';

export const TabsStateContext = createContext<TabsState>([0, () => null]);
export const TabElements = createContext<RegisteredElements>({
  tabs: 0,
  panels: 0,
});
