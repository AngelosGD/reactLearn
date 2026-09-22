import { type PropsWithChildren } from "react"

// interface UserContextProps {
//     children: React.ReactNode
// }


// ? ya que PROVEE estadp
export const UserContextProvider = ({children}: PropsWithChildren) => {
  
    return (
    <div>
        <h1>Hola</h1>
        {children}
    </div>
  )
}
