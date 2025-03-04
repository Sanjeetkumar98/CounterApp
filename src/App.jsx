import { useSelector } from "react-redux";
import "./App.css";
import Controls from "./components/Controls";
import Counter from "./components/Counter";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="p-2.5 rounded w-auto">
      <h1 className="font-bold text-2xl mb-10 text-violet-900">
        Counter App using @redux/toolkit
      </h1>
      {privacy ? <PrivacyMessage /> : <Counter />}
      <Controls />
    </center>
  );
}

export default App;
