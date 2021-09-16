import React, {useState} from "react"
import './styles/App.css'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body: 'Description'},
    {id:2, title:'JavaScript 1', body: 'Description'},
    {id:3, title:'JavaScript 2', body: 'Description'}
  ])
  const [posts2, setPosts2] = useState([
    {id:1, title:'Python', body: 'Description'},
    {id:2, title:'Python 1', body: 'Description'},
    {id:3, title:'Python 2', body: 'Description'}
  ])
  return (
    <div className="App">
      <PostList posts={posts} title='Посты про JS'/>
      <PostList posts={posts2} title='Посты про Python'/>
    </div>
  );
}

export default App
