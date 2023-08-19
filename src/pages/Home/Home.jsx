import React from 'react'
import { Navbar } from './components/Navbar'
import { BizKimiz } from './components/BizKimiz'
import { Hizmetlerimiz } from './components/Hizmetlerimiz'
import { Ekibimiz } from './components/Ekibimiz'
import { Contact } from './components/Contact'

export const Home = () => {
  return (

<>

<Navbar/>
<BizKimiz />
<Hizmetlerimiz />
<Ekibimiz />
<Contact />
{/* <Footer/> */}



</>
  )
}
