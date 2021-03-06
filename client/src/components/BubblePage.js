import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./axiosWithAuth";
import { fetchApi } from './fetchApi'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    // axiosWithAuth().get('colors')
    fetchApi()
      .then(res => {
        console.log(res)
        setColorList(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
