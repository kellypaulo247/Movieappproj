import {useContext, createContext, useState} from 'react';

type TDetailsTabs = 'about' | 'review' | 'cast';
type THomeTabs = 'nowPlaying' | 'toprated' | 'popular' | 'upcoming';

type TabContextType = {
  activeDetailsTab: TDetailsTabs;
  activeHomeTab: THomeTabs;
  updateActiveDetailsTab: (value: TDetailsTabs) => void;
  updateActiveHomeTab: (value: THomeTabs) => void;
};

const TabContext = createContext<TabContextType>({
  activeDetailsTab: 'about',
  activeHomeTab: 'nowPlaying',
  updateActiveDetailsTab: () => {},
  updateActiveHomeTab: () => {},
});

const useTabContext = () => useContext(TabContext);

const TabContextProvider = ({children}: {children: React.ReactNode}) => {
  const [activeDetailsTab, setActiveDetailsTab] =
    useState<TDetailsTabs>('about');
  const [activeHomeTab, setActiveHomeTab] = useState<THomeTabs>('nowPlaying');

  const updateActiveDetailsTab = (value: TDetailsTabs) => {
    setActiveDetailsTab(value);
  };

  const updateActiveHomeTab = (value: THomeTabs) => {
    setActiveHomeTab(value);
  };

  return (
    <TabContext.Provider
      value={{
        activeHomeTab,
        activeDetailsTab,
        updateActiveDetailsTab,
        updateActiveHomeTab,
      }}>
      {children}
    </TabContext.Provider>
  );
};

export {TabContextProvider, useTabContext};
