import { List } from "@mui/material"

type ListagemPerfilProps ={
    children:React.ReactNode
}

export function ListarPerfil({children}:ListagemPerfilProps){

    return(

        <section className='listandoPerfil'>
        <List sx={{
        }}>
                    {children}
            
 
        </List>
        </section>
    )
}
