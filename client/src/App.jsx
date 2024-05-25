import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

// axios.defaults.baseURL = BACKEND_BASE_URL;
 axios.defaults.baseURL = "http://ec2-44-223-4-88.compute-1.amazonaws.com:4000";

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
