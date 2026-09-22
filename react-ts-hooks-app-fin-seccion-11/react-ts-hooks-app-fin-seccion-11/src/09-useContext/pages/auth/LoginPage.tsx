import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  // ? creamos con useContext y le pasamos el UserContext que creamos en el UserContext.
  const { login } = useContext(UserContext);


  // ! forma 1 (usar useNavigate)
  const navigation = useNavigate()

  // ? en esta funcion mandamos llamar el login creado en el context y simplemente le pasamos el userId (el + es por que es un numeor xd)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);

    // ? esto es para que salga una notificacion (toast) al poner un mal usuario xd
    if(!result) 
    {
      toast.error('Usurio no encontrado')
      return
    }

    navigation('/profile')

    console.log({ result });
  };
  const [userId, setUserId] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Login peig caon</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <Input
          placeholder="id del usuario"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <Button type="submit">login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost">Volver a la pagina principal</Button>
      </Link>
    </div>
  );
};
