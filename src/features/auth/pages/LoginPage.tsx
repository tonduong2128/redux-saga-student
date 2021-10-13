import { Box, Button, Paper, Theme, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { useAppDispatch } from '../../../app/hooks';
import { authActions } from '../authSlice';

interface Props {
    
}
const useStyles = makeStyles((theme: Theme)=>(
    {
        root: {
            display: 'flex',
            flexFlow: 'row nowrap', 
            justifyContent: 'center',
            alignItems:'center',
            minHeight: '100vh'
        },
        box:{
            padding: "24px",
        }
    }
))
const LoginPage = (props: Props) => {
    
    const classes = useStyles();
    const dispatch=useAppDispatch();
    const handleLoginClick=()=>{
        dispatch(authActions.login({
            username:"ton",
            password:" 1"
        }))
    }

    return (
        <div className={classes.root}>   
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>

                <Box mt={4} >
                    <Button fullWidth variant="contained" onClick={()=>handleLoginClick()} color="primary" >
                        Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}

export default LoginPage
