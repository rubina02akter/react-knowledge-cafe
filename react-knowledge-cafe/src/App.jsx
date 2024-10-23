import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
 const [bookmarks,setBookmarks] = useState([]);
 const handleAddTobookmark = blog => {
  console.log('bookmark adding soon');
 }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
       <Blogs handleAddTobookmark={handleAddTobookmark}></Blogs>
       <Bookmarks></Bookmarks>
      </div>    
    </>
  )
}

export default App
