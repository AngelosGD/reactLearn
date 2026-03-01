const firtsName = "angels";
const lastName = "mejia";

const juegos = ["forrnite", "gd", "metro"];

const isActive = false;

const address = {
  zipCode: "ABC-123",
  country: "abasolo",
};

export function MyAwesomeApp() {
  return (
    <div data-testid="div-app">
      <h1 data-testid="firts-namee">{firtsName}</h1>
      <h3>{lastName}</h3>

      <p className="miClaseFavorita">{juegos.join(",")}</p>

      <h1>{isActive ? "activoxnds" : ":,vv"}</h1>

      <p
        style={{
          backgroundColor: "red",
          borderRadius: 10,
          padding: 10,
        }}
      >
        {JSON.stringify(address)}
      </p>
    </div>
  );
}
