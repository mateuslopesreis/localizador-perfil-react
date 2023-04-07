import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Base } from './layout/base'
import { CssBaseline } from '@mui/material'
import { Theme } from './theme/ThemeProvider'


function App() {

  return (
    <>
    <Theme>

      <CssBaseline/>
        <Base appBarTitle="Buscador de Perfis">

       </Base>

    </Theme>
    </>
    
  )
}

export default App
