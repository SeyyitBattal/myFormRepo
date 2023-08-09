import logo from "./logo.svg";
import "./App.css";

import LoginForm from "./LoginForm";

function App() {
  // const [bunlarKarakter, setBunlarKarakter] = useState([]);

  // axios
  //   .get("https://swapi.dev/api/people/")
  //   .then(function (response) {
  //     console.log("Gelen veri: ", response.data.results);
  //     setBunlarKarakter(response.data.results);
  //     console.log("Karakter: ", bunlarKarakter);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  return (
    <div className="App">
      <header className="App-header">
        MERHABA!
        <div></div>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
