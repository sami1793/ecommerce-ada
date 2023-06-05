import { Outlet } from 'react-router-dom'
import { NavApp } from '../components/NavApp'
import { Footer } from '../components/Footer'

export const AppLayout = () => {
  return (
    <>
      <NavApp />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
