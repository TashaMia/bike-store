import BikeCollection from "./BikeCollection";
import CompanyDescription from "./CompanyDescription";
import Header from "./Header";
import "/index.css";

function App() {
  const bikes = [
    {
      name: "Magic Might",
      image: "public/bikes/bicicleta1.jpg",
      price: "R$ 2499",
    },
    {
      name: "Nimbus Stark",
      image: "public/bikes/bicicleta2.jpg",
      price: "R$ 4909",
    },
    {
      name: "Nebula Cosmic",
      image: "public/bikes/bicicleta3.jpg",
      price: "R$ 3999",
    },
  ];

  return (
    <div className="main">
      <Header />
      <CompanyDescription />
      <BikeCollection bikes={bikes} />
    </div>
  );
}

export default App;
