import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import styles from '../../assets/jss/material-kit-react/components/typographyStyle';

const useStyles = makeStyles(styles);

export default function Success(props: any) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.successText}`}>
      {children}
    </div>
  );
}
