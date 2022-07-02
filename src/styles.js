import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 50px',
        backgroundColor: 'white',
        width: '70%',
        borderRadius: '20px'
    }

}));
