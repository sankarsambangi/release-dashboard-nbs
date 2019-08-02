import React, { Component } from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    avatarIcon: {
        width: 25,
        height: 25,
        backgroundColor: theme.palette.secondary.main,
        marginRight: 10
    }
});

class FeatureItem extends Component {

    render() {
        const { classes, letter, name, hidden } = this.props;

        return <div style={{ display: hidden ? 'none' : 'flex', alignItems: 'center' }}>
            <Avatar aria-label="recipe" className={classes.avatarIcon} >
                {letter}
            </Avatar>
            <Typography noWrap variant='h6'>{name}</Typography>
        </div>
    }
}

export default withStyles(styles)(FeatureItem);