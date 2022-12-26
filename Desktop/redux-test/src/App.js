import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addPost, deletePost } from './features/Posts';
import { useState } from 'react';


function App() {
  const [name,setName] = useState("")
  const [author,setAuthor] = useState("")
  const postList = useSelector((state)=> state.posts.value)
  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(addPost(
      {
        id:postList.length + 1,
        name:name,
        author:author
      }
    ))
    setName("")
    setAuthor("")
  }
  return (
    <div className="App">
      <div>
        <h1>掲示板</h1>
      </div>
      <div className='addPost'>
        <input type="text" value={name} placeholder='お名前' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={author} placeholder='投稿内容'onChange={(e)=>setAuthor(e.target.value)}/>
        <button onClick={()=>handleClick()}>投稿</button>
        <hr />
      </div>
      <div className='displayPosts'>
       {postList.map((post)=>(
        <div key={post.id} className="post">
          <h1 className='postName'>{post.name}</h1>
          <h1 className='postContent'>{post.author}</h1>
          <button onClick={()=>dispatch(deletePost({id:post.id}))}>削除</button>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;
