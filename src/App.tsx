import { FormEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Base } from './layout/base'
import { Avatar, Button, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material'
import { Box, CssBaseline, TextField } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { ConsultaPerfil } from './layout/base/ConsultaPerfil'
import { ConsultasPerfis } from './pages/ConsultasPerfis'
import { getUser } from './services/api'

type User ={
  avatar_url: string,
  html_url: string,
  name:string,
  followers:string,
  following:string,
  bio:string
  }

  const initialUser:User={
    avatar_url:"",
    html_url:"",
    name:"",
    followers:"",
    following:"",
    bio:""
  }



function App() {

  const [user, setUser] = useState<User>(initialUser)
  const [isLoading, setLoading] = useState(false)

 const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
  event.preventDefault()  
  const inputUserName:HTMLInputElement = form.userName
  setLoading(true)
  setUser(await getUser(inputUserName.value))
  setLoading(false)
 }

  return (
    <>

    <Theme>

      <CssBaseline/>
        <Base appBarTitle="Buscador de Perfis">
     <Grid item lg={6} sm={12} xs={12}>
      <Box display='flex'>
        <form onSubmit={handleSubmit}>
          <TextField label='Nome do perfil' fullWidth name="userName"/>
          <Button variant='contained' type='submit'>Buscar</Button>
            <ConsultasPerfis/>
         </form>   
      </Box>
      </Grid>
      <Grid item lg={6} sm={12} xs={12}>
      {isLoading ?(
      <CircularProgress/>
      ):(
          <Card>
            <CardContent>
              <Avatar src={user.avatar_url}/>
              <Typography variant='h4'>
                {user.name}
              </Typography>
              {user.bio}
              
            </CardContent>
            {user.followers}
            {user.following}
          </Card>

      )}
      </Grid>
      
       </Base>

    </Theme>

    </>

  )
}