import { Perfil } from "../../components/Perfil";
import axios from "axios";
import { useState } from "react";
import { UsuarioPerfil } from "../../type";
import { Avatar, Box, Button, Card, CardContent, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { ListarPerfil } from "../../components/ListarPerfil";

export function ConsultasPerfis(){


    
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [avatarURL, setAvatarURL] = useState("");

  const handleSearch = () => {
    axios
      .get<UsuarioPerfil>(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setName(res.data.name);
        setAvatarURL(res.data.avatar_url);


      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card sx={{ display: 'flex' , width: '100%'}}>

        <CardContent sx={{ justifyContent: '1 0 auto', width:'50%', padding: '5%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding:'2%'
      }}>

              <TextField onChange={(e) => setUserName(e.target.value)} label="Buscar Perfil" variant="outlined" />
            </Box>

            <Button onClick={handleSearch} variant="contained" color="success">Buscar</Button>
            </CardContent>

          <ListarPerfil>
        
          <ListItem>
            <img src={avatarURL}/>
          
            <ListItemText primary={<Typography>{name}</Typography>}>
            </ListItemText>

             
            </ListItem>
           
            </ListarPerfil>
            
    
      </Card>
  );
}