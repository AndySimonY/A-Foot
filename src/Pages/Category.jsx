import {useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router'
import {getFilteredCategory} from '../api'
import MealList from '../components/MealList'
import Preloader from '../components/Preloader'

const Category = () => {
     const {name} = useParams()
     const {goBack} = useHistory()
     const [meals, setMeals] = useState([])
    useEffect(() => {
        getFilteredCategory(name)
        .then(data => {
            setMeals(data.meals)
        })
    }, [name])

    return (
      <>
      <button onClick={goBack} className="btn">
          Go Back
      </button>
      {!meals.length ? <Preloader/> : 
      <MealList meals = {meals}/>
      }
      </>
    )
}

export default Category
