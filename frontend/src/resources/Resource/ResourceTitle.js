import React from 'react';

const ResourceTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default ResourceTitle;
