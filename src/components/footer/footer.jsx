import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
  root: {
    width: '100%',
    borderTop : 'rgba(0,0,0,0.50) 1px solid',
    padding : '20px',
    'box-shadow': '0px -16px 37px -16px rgba(0,0,0,0.72)'
  },
});

const Footer = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    return (
    <div style={{marginTop : '100px' }}>
      <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}}  showLabels  className={classes.root} >
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href='https://github.com/tamaraalbilleh'/>
        <p>All Rights Reserved &copy; Tamara Amin</p>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href='https://www.linkedin.com/in/tamaraalbilleh/' />
      </BottomNavigation>
    </div>
    );

}

export default Footer






