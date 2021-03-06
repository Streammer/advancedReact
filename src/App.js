import React, { useState, useMemo } from "react"
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm"
import PostFilter from './components/PostFilter'
import MyModal from "./components/UI/MyModal/MyModal"
import MyButton from "./components/UI/button/MyButton"


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'аа', body: 'вв' },
		{ id: 2, title: 'гг', body: 'ее' },
		{ id: 3, title: 'бб', body: 'сс' }
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)

	const sortedPosts = useMemo(() => {
		console.log('Отработала функция getsorted posts')
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		} else {
			return posts
		}
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removepost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	return (
		<div className="App">
			<MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>
				Создать пользователя
			</MyButton>

			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<hr style={{ margin: "15px 0" }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList
				remove={removepost}
				posts={sortedAndSearchedPosts}
				title='Посты про JS'
			/>
		</div>
	);
}

export default App
