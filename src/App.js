import UsersList from "./components/UsersList";
import { fetchUsers } from "./store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  //   const data = dispatch(fetchUsers());
  //   console.log(
  //     "dataaaaa",
  //     data.then((res) => {
  //       console.log("resssss", res);
  //     })
  //   );

  async function newFunc() {
    const data = await dispatch(fetchUsers()).unwrap();
    console.log("dataaaaaaaaaaaaaaaaaaaaaa", data);
  }

  newFunc();
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
}

export default App;
