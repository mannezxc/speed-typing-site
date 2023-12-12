import { Outlet } from 'react-router-dom'
import { FC } from 'react'

const Layout: FC = () => {
  return <>
    <main className='h-screen'>
      <Outlet />
    </main>
  </>
}

export default Layout