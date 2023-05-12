import "./styles.css";

import { CreateFlow } from "./CreateFlow";
import { UpdateFlow } from "./UpdateFlow";
import { DeleteFlow } from "./DeleteFlow";


export default function App() {
  return (
    <div className="App">
      <CreateFlow />
      <UpdateFlow />
      <DeleteFlow />

    </div>
  );
}