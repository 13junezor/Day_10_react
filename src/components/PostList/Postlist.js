import { useContext } from "react"
import { PostListContext } from "../../contexts/PostListContext"
import Postitem from "../Postitem/Postitem"

const PostList = () => {
 const {postos} = useContext(PostListContext)

    return (
      <ul class='list-group'>
  {postos.map((postos, i) => (
    <Postitem 
          index={i} id={postos.id} 
          title={postos.title}
          text={postos.text} 
          img={postos.img}
          tag={postos.tag} />     
  ))}
  </ul>
  )
}
export default PostList