import ClothesBlock from "../ClothesBlock/ClothesBlock"
import {data} from '../../data'
import "./ClothesSection.css"

export default function ClothesSection(props){
    return(
        <div>
            <h1>{props.ClothesName}</h1>
            <div className="clothes-section">
            {data.map((item, index) => (
                <ClothesBlock 
                    key={index}
                    name={item.name} 
                    price={item.price}
                    id={item.id}
                />
            ))}
            </div>
        </div>    
    )
}