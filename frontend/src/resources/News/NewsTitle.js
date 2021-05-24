import React from 'react';

const NewsTitle = ({ record }) => {
  return <span>{record ? record['semapps:title'] : ''}</span>;
};

export default NewsTitle;
