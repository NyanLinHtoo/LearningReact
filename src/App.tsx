import { Toaster } from "sonner";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="pl-5">
      <Toaster position="top-right" richColors />
      <Alert>
        <Buttons colorType="error" />
      </Alert>
    </div>
  );
}

export default App;
