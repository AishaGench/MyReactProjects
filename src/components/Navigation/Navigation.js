import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: 'black solid 1px',
    padding: [15, 10],
    textAlign: 'right',
  }
});

export default function Navigation() {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      Welcome, Your Name
    </div>
  )
}