import React from 'react';

export type RegisteredElements = {
  tabs: number;
  panels: number;
};
export type TabsState = [number, React.Dispatch<React.SetStateAction<number>>];
export type TabsComponent = React.FC<{
  state?: TabsState;
}>;
