import Box  from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CustomizedCardHeader } from './styles';
import { Button, CardActions, CardContent, TextField } from '@mui/material';


const Login = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <Card sx={{ maxWidht: '480'}}>
                <CustomizedCardHeader 
                    title = "Tah Feito"
                    subheader = "Transforme suas tarefas em ações"   
                />
                <CardContent>
                    <Box>
                        <TextField id='username' label='Usuário' variant='filled' />
                    </Box>
                    <Box>
                        <TextField id='password' label='Senha' variant='filled' />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant='contained'>
                        Login
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Login;