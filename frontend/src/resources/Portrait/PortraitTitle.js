import React from 'react';

const PortraitTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default PortraitTitle;
