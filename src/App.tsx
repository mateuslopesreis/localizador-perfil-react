import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Base } from './layout/base'
import { Box, CssBaseline, TextField } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { ConsultaPerfil } from './layout/base/ConsultaPerfil'
import { ConsultasPerfis } from './pages/ConsultasPerfis'
import { QueryClientProvider, useQuery } from "@tanstack/react-query"

import { getUser } from './services/api'

type User ={
  avatarURL: String,
  htmlURL: String,
  name:String
  }

  

function App() {
  const [search, setSearch] = useState("")
  const inputRef = useRef(null)
  
  const handleClick = ()=>{
    const username = inputRef.current
  }
  
  const {data, isLoading} =  useQuery({
    queryKey: ["user-github"],
    queryFn: ()=>{
      getUser(search)},
})




  return (
    <>
   
    <Theme>

      <CssBaseline/>
        <Base appBarTitle="Buscador de Perfis">

      <Box display='flex'>
          <TextField label='Nome do perfil' fullWidth value={search} ref={}/>
          <Buttom variant='contained' onclick={handleClick}>Buscar</Buttom>
            <ConsultasPerfis/>
      </Box>
       </Base>

    </Theme>
    
    </>
    
  )
}

export default App
