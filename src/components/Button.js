import React from 'react';
import { Button } from '@material-ui/core';

const _Button = (props) => {
    return (
        <Button 
            variant="contained" 
            color="primary"
            onClick={props.onClick}
        >
            {props.label}
        </Button>
    )
}

export {
    _Button as Button
}