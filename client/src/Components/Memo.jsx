import React, { useState, useEffect } from "react";
import axios from "axios";

let Memo = () => {
    let [memo, setMemo] = useState(''); 
    const getMemo = () => {
        axios({
            method:'get',
            url:"/get",
        })
        .then((result) => {
            console.log('res in memo',result)
            setMemo(result.data);
        })
        .catch((err) => {
            console.log('Get request error:', err);
          });
    }
  return (
    <div style={{"marginTop": "20px"}}>
      <button onClick={getMemo}>What you have told me</button>
      <div>{memo}</div>
    </div>
  );
};

export default Memo;