import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return <>
    <header>

    </header>
    <main className='h-screen'>
        <aside>

        </aside>
        <Outlet/>
    </main>
  </>
}

export default Layout