import React, { useEffect, useState } from 'react';
import './CollectionPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleSearchBar } from '../../Redux/productsSlice';
import { Navigate, useNavigate } from 'react-router';

const CollectionPage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const showSearchBar = useSelector(state => state.products.toggleSearchBar);
  const [inputValue, setInputValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
  let filtered = products;


  // Sort by price
  if (sortOption === 'lowToHigh') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOption === 'highToLow') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(filtered);
}, [inputValue, selectedCategories, products, sortOption]);


  const handleCategoryChange = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    setSelectedCategories((prev) => [...prev, value]);
  } else {
    setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
  }
};

useEffect(() => {
  let filtered = products;

  if (inputValue !== '') {
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  if (selectedCategories.length > 0) {
    filtered = filtered.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }

  setFilteredProducts(filtered);
}, [inputValue, selectedCategories, products]);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
      setFilteredProducts(filtered);
    }
  }

  useEffect(() => {
    if (inputValue === '') {
      setFilteredProducts(products);
    }
  }, [inputValue, products])
  
  const navigate = useNavigate();
  
    const handleClick = (link) => {
      navigate(link);
      window.scroll(0, 0);
    }
  
  const handleCloseSearch = () => {
    dispatch(setToggleSearchBar(false));
  };


  return (
    <div className='collectionPage'>
      {showSearchBar && (
        <div className="main-search-input">
          <div className="input-texts">
            <div className="inp">
              <input
                value={inputValue}
                onChange={handleInputChange}
                type="text" placeholder='Search' />
            </div>
            <div className="closing-svg" onClick={handleCloseSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill='#636363'/>
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="collectionPage-inner">
        <div className="first-column-content">
          <div className="first-column-heading">
            <h2>FILTERS</h2>
          </div>
          <div className="category-list">
            <div className="first-category-conatiner">
              <div className="main-category-heading">
                <p>CATEGORIES</p>
              </div>
              <div className="main-list">
                <div className="listOne firstOption">
                  <input
                value='Men'
                onChange={(e) => handleCategoryChange(e)}
                  type="checkbox" />
                <p>Men</p>
                </div>
                <div className="listOne secondOption">
                  <input
                  value='Women'
                onChange={(e) => handleCategoryChange(e)}
                  type="checkbox" />
                <p>Women</p>
                </div>
                <div className="listOne thirdOption">
                  <input
                    value='Women'
                  onChange={(e) => handleCategoryChange(e)}  
                  type="checkbox" />
                <p>Kids</p>
                </div>
              </div>
            </div>
            <div className="second-category-conatiner">
              <div className="main-category-heading">
                <p>TYPE</p>
              </div>
              <div className="main-list">
                <div className="listOne firstOption">
                <input type="checkbox" />
                <p>Topwear</p>
                </div>
                <div className="listOne secondOption">
                <input type="checkbox" />
                <p>Bottomwear</p>
                </div>
                <div className="listOne thirdOption">
                <input type="checkbox" />
                <p>Winterwear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-column-content">
          <div className="main-headings">
            <div className="second-cloumn-heading">
            <h2><span>ALL</span> COLLECTIONS</h2>
            <hr />
          </div>
          <div className="filter-options">
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} name="" id="">
            <option value="">Sort by: Relevant</option>
            <option value="lowToHigh">Sort by: Low to high</option>
            <option value="highToLow">Sort by: High to low</option>
         </select>
          </div>
          </div>
        <div className="products">
        {filteredProducts.map((item, index) => (
        <div
          onClick={()=>handleClick(item.link)}
           key={index} className='eachProduct'>
         <div className="product-img">
           <img src={item.img} alt={item.title}/>
            </div>
            <div className="product-title">
              <p>{item.title}</p>
            </div>
            <div className="product-price">
              <p>{item.price}</p>
            </div>
           </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionPage;
