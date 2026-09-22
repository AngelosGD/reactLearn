import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina sobre vose</h1>
      <hr/>

      <div className="flex flex-col gap-2">
        <Link to='/profile' className="hover:text-blue-300 underline text-2xl">Perfil caon</Link>
        <Link to='/login' className="hover:text-blue-300 text-2xl">login peweon</Link>
      </div>
    </div>
  )
}
