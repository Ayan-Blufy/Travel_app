import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    chip: {
        margin: '5px 5px 5px 0',
    },
    subtitle: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
    },
    spacing: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    },
    space:{
        margin: "10px 0", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
}));