import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./components/PosterList";

const dataProvider = jsonServerProvider('http://localhost:5000')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posters" list={PosterList} edit={EditGuesser}/>
      <Resource name="categories" list={ListGuesser}/>
    </Admin>
  );
};

export default App;
