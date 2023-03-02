import React from 'react';

const WorksiteTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default WorksiteTitle;
