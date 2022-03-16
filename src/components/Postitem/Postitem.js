import React, { useContext } from "react"
import { PostListContext } from "../../contexts/PostListContext"
import './styles.css'
const Postitem = ({id, title, text, img, tag, index}) => {
    
const {deletePost} = useContext(PostListContext)

const deleteHandler = () => deletePost(id)

 return (
   <>
        <div className="container">
          <h1 className="media-heading">{index+1}. {title}</h1>
        <p>{text}</p>
        <div className="text-center">
       <img src={img} class="rounded pict" alt=""/>
        </div>
        <p>Тэги: {tag}</p>
     </div>
     <div className="text-center">
     <button 
     onClick={deleteHandler}
     type="button" 
     className="btn btn-danger btn-sm my-1">
         Удалить
         </button>
     </div>
         </>
)
}
export default Postitem