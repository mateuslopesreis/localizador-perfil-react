import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { ListarPerfil } from "../../components/ListarPerfil";
import { Base } from "../../layout/base";
import { FormEvent, useEffect, useState } from "react";
import { UsuarioPerfil } from "../../type";
import { Perfil } from "../../components/Perfil";
import { getPerfil } from "../../services/api";


export function ConsultaPerfil(){
/* 
    const [search, setSearch]= useState('')
    const [perfil, setPerfil]= useState([])

    onst [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");

 */

    /* const handleSearch = () => {
        axios
          .get<GITHUBResponse>(`https://api.github.com/users/${userName}`)
          .then((res) => {
            setName(res.data.name);
            setBio(res.data.bio);
            setAvatarURL(res.data.avatar_url);
          })
          .catch((err) => {
            console.log(err);
          });
      };
     */

    /* const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        getPerfil()

      
    } */

    let perfils
    /* const filteredContacts = perfil.filter((perfils)=> perfils.login.toLowerCase().includes(search)) */

   /*  useEffect(()=>{
        async function listaPerfis(){
           
            setPerfil(await getPerfil())

            console.log("é isto: "+setPerfil)
        }
        listaPerfis()
    },[]) */


return(
    <Card sx={{ display: 'flex' }}>
        
    
        


        <form /* onSubmit={handleSubmit} */ >
        <TextField /* value={search} onChange={(e)=>setSearch(e.target.value)} */ variant='outlined' label="Digite o perfil" fullWidth />
        <TextField  type="submit"  fullWidth />
        </form>

   
    

    

        <ListarPerfil>
      {/*  <Perfil login="maqueise" avatar_url=""/>  */}
       

        </ListarPerfil>
        </Card>
)

}