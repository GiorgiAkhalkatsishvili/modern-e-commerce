import React, { useEffect, useMemo, useState } from 'react';
import './CollectionPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleSearchBar } from '../../Redux/productsSlice';
import { useNavigate } from 'react-router-dom';

const aliasMap = {
  men:  ['men', 'man', 'male', 'mens', "men's"],
  women: ['women', 'woman', 'female', 'ladies', 'womens', "women's"],
  kids: ['kids', 'kid', 'child', 'children', 'youth', 'junior', 'boy', 'boys', 'girl', 'girls', 'infant', 'baby', 'toddler']
};

const normalize = (v) => String(v ?? '').trim().toLowerCase();


const canonicalize = (token) => {
  const t = normalize(token);
  for (const [canon, aliases] of Object.entries(aliasMap)) {
    if (aliases.includes(t)) return canon;
  }
  if (['men','women','kids'].includes(t)) return t;
  return null;
};


const extractCategoryTokens = (item) => {
  const candidates = [];


  ['category', 'gender', 'segment', 'department', 'audience', 'target'].forEach((k) => {
    if (item?.[k]) candidates.push(item[k]);
  });


  ['categories', 'tags', 'labels'].forEach((k) => {
    if (Array.isArray(item?.[k])) candidates.push(...item[k]);
  });

  if (item?.title) candidates.push(item.title);

  const tokens = candidates
    .flatMap((v) => Array.isArray(v) ? v : String(v).split(/[,/|]/))
    .map((v) => v && v.toString());

  return tokens.filter(Boolean);
};

const parsePrice = (p) => {
  const num = typeof p === 'number' ? p : parseFloat(String(p).replace(/[^\d.-]/g, ''));
  return Number.isFinite(num) ? num : 0;
};

const CollectionPage = () => {
  const productsRaw = useSelector((state) => state.products.products) || [];
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.products.toggleSearchBar);

  const [inputValue, setInputValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const navigate = useNavigate();

  const products = useMemo(() => {
    return productsRaw.map((item) => {
      const tokens = extractCategoryTokens(item);
      const buckets = new Set(
        tokens
          .map(canonicalize)
          .filter(Boolean)
      );
      return { ...item, _buckets: buckets }; // attach detected buckets
    });
  }, [productsRaw]);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search by title
    if (inputValue.trim()) {
      const q = normalize(inputValue);
      list = list.filter((item) => normalize(item.title).includes(q));
    }

    // Category filter (canonical buckets)
    if (selectedCategories.length > 0) {
      list = list.filter((item) =>
        selectedCategories.some((need) => item._buckets?.has(need))
      );
    }

    // Sort
    if (sortOption === 'lowToHigh') {
      list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOption === 'highToLow') {
      list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return list;
  }, [products, inputValue, selectedCategories, sortOption]);

  // Handlers
  const handleCategoryChange = (e) => {
    const raw = e.target.value;
    const canon = canonicalize(raw) || normalize(raw);
    setSelectedCategories((prev) =>
      e.target.checked ? [...new Set([...prev, canon])] : prev.filter((c) => c !== canon)
    );
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleCloseSearch = () => dispatch(setToggleSearchBar(false));

  const handleClick = (link) => {
    if (link) navigate(link);
    window.scrollTo(0, 0);
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
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="closing-svg" onClick={handleCloseSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  fill="#636363"
                />
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
                    value="Men"
                    type="checkbox"
                    onChange={handleCategoryChange}
                    checked={selectedCategories.includes('men')}
                  />
                  <p>Men</p>
                </div>
                <div className="listOne secondOption">
                  <input
                    value="Women"
                    type="checkbox"
                    onChange={handleCategoryChange}
                    checked={selectedCategories.includes('women')}
                  />
                  <p>Women</p>
                </div>
                <div className="listOne thirdOption">
                  <input
                    value="Kids"
                    type="checkbox"
                    onChange={handleCategoryChange}
                    checked={selectedCategories.includes('kids')}
                  />
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
                  <input type="checkbox" disabled />
                  <p>Topwear</p>
                </div>
                <div className="listOne secondOption">
                  <input type="checkbox" disabled />
                  <p>Bottomwear</p>
                </div>
                <div className="listOne thirdOption">
                  <input type="checkbox" disabled />
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
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Sort by: Relevant</option>
                <option value="lowToHigh">Sort by: Low to high</option>
                <option value="highToLow">Sort by: High to low</option>
              </select>
            </div>
          </div>

          <div className="products">
            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No items match your filters.</p>
              </div>
            ) : (
              filteredProducts.map((item, index) => (
                <div onClick={() => handleClick(item.link)} key={index} className="eachProduct">
                  <div className="product-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="product-title">
                    <p>{item.title}</p>
                  </div>
                  <div className="product-price">
                    <p>{item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
