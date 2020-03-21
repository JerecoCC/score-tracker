import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';

const _Card = (props) => {
    const classes = style(props);
    return (
        <Card
            classes={{
                root: classes.root
            }}
            elevation={props.raised ? 1 : 0}
        >
            {props.children}
        </Card>
    );
}

const style = makeStyles({
    root: {
        borderRadius: props => props.rounded ? 30 : 20,
        width: props => props.width ? props.width : 300,
        height: props => props.height ? props.height : 300,
        padding: props => props.noPadding ? 0 : '15px',
        boxSizing: 'border-box',
        border: props => props.raised ? 'none' : '1px solid #dbdbdb'
    }
});

export {
    _Card as Card
};