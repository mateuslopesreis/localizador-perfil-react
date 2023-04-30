import { Card, List, Paper } from "@mui/material"

type ListagemPerfilProps ={
    children:React.ReactNode
}

export function ListarPerfil({children}:ListagemPerfilProps){

    return(

        <Paper variant="outlined" >
    
        <List sx={{
            bgcolor: '#2e3136',
            width: '100%',
            height: '80%',
            padding: '8px',
            borderRadius: '8px',
            color: 'white'

            
        }}>
                    {children}
                    
 
        </List>
        </Paper>
    )
}
