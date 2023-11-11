import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebaseData"
import { onSnapshot, collection } from 'firebase/firestore';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'post'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);


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
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
       }

    </div>
  );
}

export default App;
