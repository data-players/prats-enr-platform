import React from 'react';

const NewsTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default NewsTitle;
