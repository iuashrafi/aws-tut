import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

axios.defaults.baseURL = BACKEND_BASE_URL;

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/test")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error occured somewhere");
      });
  }, []);
  return (
    <div className="p-8 text-lg">
      <h1 className="text-2xl">Hello world by Imtiaz</h1>
      <p>
        Message from backend =<span className="text-red-500">{message}</span>
      </p>
    </div>
  );
}

export default App;
