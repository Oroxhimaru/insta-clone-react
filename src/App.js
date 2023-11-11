import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
     username:"hassan",
     caption:"yeah yeah",
     imageUrl:"https://i.pinimg.com/1200x/09/8d/40/098d40876eddf9bd843eb3863e125028.jpg"
    },
    {
      username:"naruto",
     caption:"rasengan",
     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarWMNR_1akZESyvStTIerY47_bYEuevSNnw"
    }
  ]);

  return (
    <div className="app">
      <div className="app_header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="insta logo"
          className="app_headerImage"
        />
      </div>
       
       {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
       }


    </div>
  );
}

export default App;
