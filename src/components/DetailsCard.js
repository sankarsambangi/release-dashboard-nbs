import React, { Component } from 'react'
import { Card, CardContent, Typography, CardHeader, Avatar, withStyles } from '@material-ui/core';
import FeatureItem from './FeatureItem';

const styles = theme => ({
    card: {
        maxWidth: 345,
        margin: 10,
        padding: 5
    },
    titleCard: {
        maxWidth: 345,
        margin: 10,
        padding: 5,
        display: 'flex',
        alignItems: 'center'
    },
    avatarTitle: {
        width: 50,
        height: 50,
        backgroundColor: theme.palette.primary.main,
    }
});

class DetailsCard extends Component {

    render() {
        console.log(this.props);

        return this.props.title ? this.getTitleCard(this.props) : this.getDetailsCard(this.props)
    }

    getFeatureItemList(props) {
        if (props.details.features) {
            return this.props.details.features.map((feature) => <FeatureItem letter='B' name={feature} />);
        }

        return null;
    }

    getReleaseLetter(gateway, app) {
        if (gateway && app) {
            return 'F';
        } else {
            return gateway ? 'G' : 'A';
        }
    }

    getTitleCard(props) {
        const { classes } = props;
        return <Card className={classes.titleCard}>
            <CardContent>
                <Typography noWrap variant='h3'>{this.props.title}</Typography>
            </CardContent>
        </Card>
    }

    getDetailsCard(props) {
        const { classes, details: { name, date, gateway, app, appVersion, gatewayVersion } } = this.props;
        let rtlItems = this.getFeatureItemList(this.props);

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatarTitle}>
                            {this.getReleaseLetter(gateway, app)}
                        </Avatar>
                    }
                    titleTypographyProps={{ variant: 'h5', noWrap: true }}
                    title={name}
                    subheader={date} />
                <CardContent hidden={!rtlItems}>
                    {rtlItems}
                </CardContent>

                <CardContent style={{ display: !!(appVersion || gatewayVersion) ? 'flex' : 'none', alignItems: 'center', justifyContent: 'space-between' }} hidden={true}>

                    <FeatureItem letter='A' name={appVersion} />
                    <FeatureItem letter='G' name={gatewayVersion} />
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(DetailsCard);