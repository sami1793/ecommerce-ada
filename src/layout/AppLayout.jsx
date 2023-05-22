import { NavApp } from '../components/NavApp'

export const AppLayout = ({ children }) => {
  return (
    <>
      <NavApp />
      <div>{children}</div>
      <footer>footer</footer>
    </>
  )
}
