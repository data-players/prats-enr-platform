import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MarkdownField } from '@semapps/markdown-components';

const useStyles = makeStyles(theme => ({
    rightTitle: {
      fontWeight: "bold",
      fontSize: "23px",
    },
    contactContent: {
      fontSize: "18px",
      paddingBottom: "20px",
    },
}));

const MarkdownFieldWithTitle = ({title, source, padding=false}) => {
    const classes = useStyles();
    return (
      <>
        <Box style={{marginBottom: "20px", paddingTop: padding ? "20px" : "0px"}}>
          <div className={classes.rightTitle}>{title}</div>
          <MarkdownField source={source} className={classes.contactContent}/>
        </Box>
      </>
    )
  }

  export default MarkdownFieldWithTitle;