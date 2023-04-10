import { Card, List, Paper } from "@mui/material"

type ListagemPerfilProps ={
    children:React.ReactNode
}

export function ListarPerfil({children}:ListagemPerfilProps){

    return(

        <Paper variant="outlined" >
    
        <List sx={{
            bgcolor: '#9b34eb',
            width: '100%'
        }}>
                    {children}
                    
 
        </List>
        </Paper>
    )
}
