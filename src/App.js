import React, { useState } from "react"
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm"
import MySelect from './components/UI/select/MySelect'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'вв' },
    { id: 2, title: 'гг', body: 'ее' },
    { id: 3, title: 'бб', body: 'сс' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removepost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeСompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка по'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>

      {posts.length
        ?
        <PostList remove={removepost} posts={posts} title='Посты про JS' />
        :
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App
