import ClothesSection from '../../components/ClothesSection/ClothesSection'

function Home() {
  return(
    <div>
      <ClothesSection ClothesName="Шорты"/>
      <ClothesSection ClothesName="Кофты"/>
      <ClothesSection ClothesName="Футболки"/>
    </div>
  )
}

export default Home