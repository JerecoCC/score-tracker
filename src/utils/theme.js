import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main : '#50ABFF',
            selected : '#3877b2',
            light: '#73bbff'
        },
        secondary: {
            main : '#ffc400',
            selected: '#b28900',
            contrastText : '#ffcf33',
        },
        extras: {
            main: '#FF9636',
        }
    },
});

export default theme;