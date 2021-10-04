import React from 'react';
import { useListContext, Link, linkToRecord } from 'react-admin';
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles(() => ({
  grid: {
    display: 'flex',
    marginLeft: -20,
    marginBottom: -20,
    width: 'auto'
  },
  column: {
    paddingLeft: 20,
    backgroundClip: 'padding-box'
  },
  card: {
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

const CustomMasonryList = ({ image, content, actions, breakpointCols, linkType }) => {
    const classes = useStyles();
    const { ids, data, basePath } = useListContext();

    return (
      <Masonry breakpointCols={breakpointCols} className={classes.grid} columnClassName={classes.column}>
        {ids.map(id => {
          const imageUrl = typeof image === 'function' ? image(data[id]) : image;
          console.log("ici : ",linkToRecord(basePath, id).replace("undefined", "task"));

          return (
            <Card key={id} className={classes.card} variant="outlined"  >
              <Link to={linkToRecord(basePath, id).replace("undefined", "task") + "/" + linkType}>
                <CardActionArea>
                  {imageUrl && <CardMedia className={classes.media} image={imageUrl} />}
                  {content && <CardContent>{content(data[id])}</CardContent>}
                </CardActionArea>
              </Link>
              {actions && (
                <CardActions>
                  {actions.map(action => React.createElement(action, { record: data[id], basePath }))}
                </CardActions>
              )}
            </Card>
          );
        })}
      </Masonry>
    );
  };

  export default CustomMasonryList;
