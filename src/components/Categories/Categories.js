import { useEffect, useState } from "react";
import {loadCategories} from '../../store/Categories';
import { useDispatch, useSelector } from 'react-redux';
// import './Category.css';

function Category(){
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    }, []);
    return (
        <div className='category'>
            <h2>Category</h2>
            {categories.map((category) => (
                <div key={category.id}>
                    <span>{category.name}</span>
                </div>
            ))}
        </div>
    );
}
export default Category;