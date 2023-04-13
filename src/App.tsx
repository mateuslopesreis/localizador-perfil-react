import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Base } from './layout/base'
import { CssBaseline } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { ConsultaPerfil } from './layout/base/ConsultaPerfil'
import { ConsultasPerfis } from './pages/ConsultasPerfis'



function App() {

  return (
    <>
    <Theme>

      <CssBaseline/>
        <Base appBarTitle="Buscador de Perfis">
            <ConsultasPerfis/>
       </Base>

    </Theme>
    </>
    
  )
}

export default App
