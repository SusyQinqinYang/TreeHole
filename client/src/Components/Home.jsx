import React, {useState, useEffect} from "react";
import axios from 'axios';

let Home = ({ newWords, addNewWords }) => {

  let [word, setWord] = useState('');

  //Do not really need to use redux to control the state. But i understand, this is more for displaying my redux skill
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewWords(word);

  }
  useEffect(()=>{
      if (newWords.length !== 0 && newWords == word) {
        axios({
            method:'post',
            url:"/post",
            data:{
                text:newWords
            }
        })
        .then((result) => {
            console.log('result after post',result);
            alert('Thank you for telling me your mind!')
        })
        .catch((err) => {
            console.log('Post request error:', err);
          });
      }
  }, [newWords])

  return (
    <div>
      <form className="word-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Anything in mind?"
          className="text-input"
          onChange={(e) => setWord(e.target.value)}
        />
        <input type="submit" value="Tell me" />
      </form>
    </div>
  );
};

export default Home;
