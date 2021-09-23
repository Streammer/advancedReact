import React, { useState, useMemo } from "react"
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm"
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'вв' },
    { id: 2, title: 'гг', body: 'ее' },
    { id: 3, title: 'бб', body: 'сс' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция getsorted posts')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  }, [selectedSort, posts])

  const sortedSearchedPosts = useMemo(()=>{
      return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removepost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value) }}
          placeholder='Поиск...'
        />
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

      {sortedSearchedPosts.length
        ?
        <PostList remove={removepost} posts={sortedSearchedPosts} title='Посты про JS' />
        :
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App
