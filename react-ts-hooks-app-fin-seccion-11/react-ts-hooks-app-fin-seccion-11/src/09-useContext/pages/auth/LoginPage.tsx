import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Login peig caon</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10">
        <Input
        placeholder="id del usuario" type="number"
        />

        <Button type="submit">
          login
        </Button>
      </form>


      <Link to='/about'>
        <Button variant='ghost' >
          Volver a la pagina principal
        </Button>
      </Link>
    </div>
  );
};
