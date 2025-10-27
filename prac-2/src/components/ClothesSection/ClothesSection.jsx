import ClothesBlock from "../ClothesBlock/ClothesBlock"
import {data} from '../../data'
import "./ClothesSection.css"

export default function ClothesSection(props){
    const filteredData = data.filter(item => item.category === props.ClothesName);
    
    return(
        <div>
            <h1>{props.ClothesName}</h1>
            <div className="clothes-section">
            {filteredData.map((item, index) => (
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