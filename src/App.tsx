import { Toaster, toast } from "sonner";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="pl-5">
      <Toaster position="top-right" richColors />
      <Alert>
        <button onClick={() => toast.success("Testing Toast")}>
          Testing Toast
        </button>
      </Alert>
    </div>
  );
}

export default App;
