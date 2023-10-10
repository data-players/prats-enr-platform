import React from 'react';
import Markdown from 'markdown-to-jsx';
import * as addons from "../addons";
import LargeLabel from '../common/lists/MainList/LargeLabel';

const MarkdownField = ({ source, record }) => 
  record && record[source] ? <Markdown options={{
    createElement(type, props, children) {
      if( props.label ) {
        return (
          <>
            <LargeLabel>{props.label}</LargeLabel>
            {React.createElement(type, props, children)}
          </>
        );
      } else {
        return React.createElement(type, props, children)
      }
    },
    overrides: {
      h1: LargeLabel,
      ...addons
    },
  }}>
    {record[source]}
  </Markdown> : null;

MarkdownField.defaultProps = {
  addLabel: true
};

export default MarkdownField;
