export default function Header() {
  const navigation = [
    {
      name: "Bicicletas",
      link: "/bicicletas",
    },
    {
      name: "Seguros",
      link: "/seguros",
    },
    {
      name: "Contato",
      link: "/contato",
    },
  ];
  return (
    <div className="header">
      <img src="logo.svg" alt="logo"></img>
      <nav className="navbar">
        {navigation.map((nav) => {
          return <p>{nav.name}</p>;
        })}
      </nav>
    </div>
  );
}
