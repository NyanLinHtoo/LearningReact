// import { Toaster } from "sonner";
// import Alert from "./components/Alert";
// import Buttons from "./components/Buttons";

import Like from "./components/Like";

function App() {
  return (
    <div className="p-8">
      {/* <Toaster position="top-right" richColors />
      <Alert>
        <Buttons colorType="error" />
      </Alert> */}
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
