// components/Tabs.jsx
import React, { useState, Children, cloneElement } from 'react';
import './Tabs.scss';

function Tabs({ defaultValue, children }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const handleTabClick = (value) => {
        setActiveTab(value);
    };

    return (
        <div className="tabs">
            <div className="tabs-list">
                {Children.map(children, (child) => {
                    if (child.type === TabsTrigger) {
                        return cloneElement(child, {
                            activeTab: activeTab,
                            onClick: handleTabClick,
                        });
                    }
                    return null;
                })}
            </div>
            <div className="tabs-content">
                {Children.map(children, (child) => {
                    if (child.type === TabsContent) {
                        return cloneElement(child, {
                            activeTab: activeTab,
                        });
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

function TabsTrigger({ value, children, activeTab, onClick }) {
    const isActive = value === activeTab;
    return (
        <button
            className={`tabs-trigger ${isActive ? 'tabs-trigger--active' : ''}`}
            onClick={() => onClick(value)}
        >
            {children}
        </button>
    );
}

function TabsContent({ value, children, activeTab }) {
    return (
        <div className={`tabs-content-item ${value === activeTab ? 'tabs-content-item--active' : ''}`}>
            {children}
        </div>
    );
}

export { Tabs, TabsTrigger, TabsContent };