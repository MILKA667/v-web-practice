import { useContext } from 'react';
import { LikedContext} from '../../contexts/LikedContext';


function LikedBlock(props){
    const {addToLikes} = useContext(LikedContext)

    function clickHandle(){
        addToLikes(props)
    }
    return(
        <div className='likedBlock'>
            <img src="./кабуто.jpg" className="clothes_block_img"></img>
            <span>{props.name}</span>
            <span>{props.price}</span>
            <button onClick={clickHandle}>Удалить</button>
        </div>
    )
}

export default LikedBlock