import React, { useState, useMemo, useContext } from 'react';
import useConstant from 'use-constant';
import { TabElements, TabsStateContext } from '../../contexts/tabs-contexts';
import { TabsComponent } from '../../models/tabs';

export const Tabs: TabsComponent = ({ state: outerState, children }) => {
  const innerState = useState(0);
  const elements = useConstant(() => ({ tabs: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <TabElements.Provider value={elements}>
      <TabsStateContext.Provider value={state}>
        {children}
      </TabsStateContext.Provider>
    </TabElements.Provider>
  );
};

export const useTabState = () => {
  const [activeIndex, setActive] = useContext(TabsStateContext);
  const elements = useContext(TabElements);

  const tabIndex = useConstant(() => {
    const currentIndex = elements.tabs;
    elements.tabs += 1;

    return currentIndex;
  });

  const onClick = useConstant(() => () => setActive(tabIndex));

  const state = useMemo(
    () => ({
      isActive: activeIndex === tabIndex,
      onClick,
    }),
    [activeIndex, onClick, tabIndex],
  );

  return state;
};

export const usePanelState = () => {
  const [activeIndex] = useContext(TabsStateContext);
  const elements = useContext(TabElements);

  const panelIndex = useConstant(() => {
    const currentIndex = elements.panels;
    elements.panels += 1;

    return currentIndex;
  });

  return panelIndex === activeIndex;
};
const cn = (...args: Array<string | boolean>) => args.filter(Boolean).join(' ');

export const Tab: React.FC = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button
      type="button"
      className={cn('tab', isActive && 'active')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
// const Tab = ({ children }) => {
//   const { isActive, onClick } = useTabState()

//   )
// }
// eslint-disable-next-line react/require-default-props
export const Panel: React.FC<{ active?: boolean }> = ({ active, children }) => {
  const isActive = usePanelState();

  return <>{isActive || active ? children : null}</>;
};
