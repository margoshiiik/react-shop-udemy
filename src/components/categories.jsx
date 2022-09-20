import Category from "./category"
import './categories.styles.scss'

const Categories = ({categories}) => {
    return (
        <div className='categories-container'>
        {categories.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </div>
    )
}

export default Categories; 