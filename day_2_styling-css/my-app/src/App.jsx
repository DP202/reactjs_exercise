// import Logist from "./Layout/Logist";
import { useEffect, useState } from "react";

import "./App.scss";
import axios from "axios";
import Button from "./components/Button/Button";
import Picture from "./components/Picture/Picture";

function App() {
  const [picture, setPicture] = useState([]);
  const [page, setPage] = useState(1);

  const [newPicture, setNewPicture] = useState([]);
  const handleClick = () => {
    setNewPicture(...picture, {
      page: page + 1,
      
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          ` https://picsum.photos/v2/list?page=${page}&limit=8`
        );
        console.log("res", res);
        setPicture((prevPicture)=>{...prevPicture,...res.data});
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      {/* <Logist /> */}
      <div>
        <Picture picture={picture} />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
