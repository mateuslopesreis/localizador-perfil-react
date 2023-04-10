import { Avatar, Card, Divider, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { UsuarioPerfil } from "../../type";

type ContactPerfilProps ={
    contactData: UsuarioPerfil
}

export function Perfil({contactData}:ContactPerfilProps){
    const{name, avatar_url} = contactData
    return(
        <>
        <ListItem>
            <ListItemAvatar>
                <Avatar src={avatar_url}/>
            </ListItemAvatar>

            <ListItemText primary={<Typography>{name}</Typography>}>
            </ListItemText>

          
        </ListItem>

        <Divider></Divider>
        </>
    )
   
}
