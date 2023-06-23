import AddItems from "./components/AddItems";
import Items from "./components/Items";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <div>
      <AddItems />
      <Items />
      <ReactQueryDevtools />
    </div>
  );
};

export default App;
