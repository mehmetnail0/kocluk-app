import React from 'react'
import { Navbar } from './components/Navbar'
import { BizKimiz } from './components/BizKimiz'
import { Paketlerimiz } from './components/Paketlerimiz'
import { Ekibimiz } from './components/Ekibimiz'
import { Contact } from './components/Contact'

export const Home = () => {
  return (

<>

{/* <Navbar/> */}
<BizKimiz/>
<Paketlerimiz/>
<Ekibimiz/>
<Contact/>
{/* <Footer/> */}



</>
  )
}
