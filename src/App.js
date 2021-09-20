import React, {useState} from "react"
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm"

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body: 'Description'},
    {id:2, title:'JavaScript 1', body: 'Description'},
    {id:3, title:'JavaScript 2', body: 'Description'}
  ])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const removepost = (post) => {
  setPosts(posts.filter(p=> p.id !== post.id))
}

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removepost} posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App
