import FormComponent from "./components/Form";
import TableList from "./components/TableList";

import "./styles/home.css";

function App() {
  return (
    <div className="container">
      <section className="form">
        <FormComponent />
      </section>
      <section className="list">
        <TableList />
      </section>
    </div>
  );
}

export default App;
