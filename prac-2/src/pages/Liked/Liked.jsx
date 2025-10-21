import LikedBlock from "../../components/LikedBlock/LikedBlock"
import { useContext } from "react"
import { LikedContext } from "../../contexts/LikedContext" 

function Liked(){
    const {likes,clearLiked} = useContext(LikedContext)
    return(
   <div className="liked">
    {likes.map((item, index) => (
        <LikedBlock
            key={index}
            name={item.name} 
            price={item.price}
            id={item.id}
            />
            ))}
        </div>
    )
}

export default Liked