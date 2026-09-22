import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"




export const ProfilePage = () => {

  // ? esta es la forma tradicional usando useContext
  // const {authStatus,user}  = useContext(UserContext)

  // * forma moderna con use
  const {user, authStatus} = use(UserContext)

  if(authStatus === 'checking'){
    return (
      <>
      <div className=" flex flex-col items-center justify-center max-h-screen">
        
      </div>
      </>
    )
  } 
  

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h1 className="text-4xl font-bold">Perfil do usere</h1>

      <pre className="my-4">
        {JSON.stringify(user, null,2)}
      </pre>

      <Button variant='destructive'>
        Salir
      </Button>
    </div>
  )
}
