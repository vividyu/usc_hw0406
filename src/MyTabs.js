import React, { useState } from 'react';

const MyTabs = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs">
      {children.map((child, index) => (
        <button
          key={index}
          className={index === activeTabIndex ? 'btn-active' : 'btn'}
          onClick={() => handleTabClick(index)}
          disabled={index === activeTabIndex}
        >
          {child.props.title}
        </button>
      ))}
      <div className="view">{children[activeTabIndex]}</div>
    </div>
  );
};

export default MyTabs;
