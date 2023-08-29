'use client';

import React from 'react';

interface TabsContextProps {
  activeTab?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TabsContext = React.createContext<TabsContextProps>({
  activeTab: undefined,
  setActiveTab: () => {},
});

interface TabsProps {
  children: React.ReactNode;
  initialValue?: string;
}

export const Tabs = (props: TabsProps) => {
  const { children, initialValue } = props;

  const [activeTab, setActiveTab] = React.useState<string | undefined>(
    initialValue
  );

  const value = { activeTab, setActiveTab };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList = (props: TabsListProps) => {
  const { children, className } = props;

  const classes = ['flex divide-x divide-gray-600', className].join(' ').trim();

  return <div className={classes}>{children}</div>;
};

interface TabsButtonProps {
  value: string;
  label: string;
  className?: string;
}

export const TabsButton = (props: TabsButtonProps) => {
  const { className, value, label } = props;

  const { activeTab, setActiveTab } = React.useContext(TabsContext);

  const isCurrentTab = activeTab === value;

  const classes = [
    'font-bold',
    isCurrentTab ? 'bg-yellow-200 text-black' : '',
    className,
  ].join(' ');

  return (
    <button className={classes} onClick={() => setActiveTab(value)}>
      {label}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

export const TabsContent = (props: TabsContentProps) => {
  const { value, children, className } = props;

  const { activeTab } = React.useContext(TabsContext);

  const isCurrentTab = activeTab === value;

  const classes = ['', className].join(' ');

  return isCurrentTab ? <div className={classes}>{children}</div> : null;
};
