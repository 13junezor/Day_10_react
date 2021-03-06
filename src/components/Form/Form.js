import { useContext, useState } from "react"
import { PostListContext } from "../../contexts/PostListContext"

const Form = () => {
  const {addNewPost} = useContext(PostListContext)

   const [title, setTitle] = useState('')
   const [text, setText] = useState('')
   const [img, setImg] = useState('')
   const [tag, setTag] = useState('')
/* отлавливаем занчения инпута*/
const changeTitle = (e) => {
    setTitle(e.target.value)
    }
const changeText = (e) => {
    setText(e.target.value)
    }
const changeImg = (e) => {
    setImg(e.target.value)
    }
const changeTag = (e) => {
    setTag(e.target.value)
    }
/* отлавливаем значения формы*/
const submitHandler = (e) => {
    e.preventDefault()
      /* проверяем на пустые строки */
      let newTitle = title.trim()
      if (newTitle) {
    addNewPost(title, text, img, tag)
    setTitle('')
    setText('')
    setImg('')
    setTag('')
      }
      else {alert('Введите заголовок!') 
      
    }
       }
       
   

   return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <label for="exampleInputEmail1" 
      className="form-label">Заголовок</label>
      <input 
      onChange={changeTitle}
      type="text" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      value={title}
      />
      <div id="emailHelp" className="form-text">Добавьте заголовок статьи</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label">Текст статьи</label>
      <input 
      onChange={changeText}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={text}
      />
      <div id="emailHelp" className="form-text">Добавьте текст статьи</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label">Ссылка на изображение</label>
      <input 
      onChange={changeImg}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={img}
      />
      <div id="emailHelp" className="form-text">Добавьте ссылку на изображение</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label">Укажите тег</label>
      <input 
      onChange={changeTag}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={tag}
      />
      <div id="emailHelp" className="form-text">Добавьте тег статьи</div>
    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
        Опубликовать
        </button>
  </form>
   ) 
}
export default Form