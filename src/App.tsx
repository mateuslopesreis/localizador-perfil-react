import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Base } from './layout/base'
import { CssBaseline } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { ConsultaPerfil } from './pages/ConsultaPerfil'
import { ConsultasPerfis } from './layout/base/ConsultasPerfis'



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
