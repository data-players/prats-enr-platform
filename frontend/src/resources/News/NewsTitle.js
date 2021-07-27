import React from 'react';

const NewsTitle = ({ record }) => {
  console.log('record',record);
  return <span>{record ? record['semapps:title'] : ''}</span>;
};

export default NewsTitle;
