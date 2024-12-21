import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Abyssinian'},
  { name: 'Mittens', age: '2', breed: 'Sphynx'  },
  { name: 'Shadow', age: '1', breed: 'Bengal'  },
  { name: 'Pumpkin', age: '3' , breed: 'Peterbald'},
  { name: 'Luna', age: '4', breed: 'Birman'  },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
  { name: 'Timba', age: '1', breed: 'Sphynx' },
  { name: 'Tam', age: '3', breed: 'Persian'  },
  { name: 'Tahsin', age: '2', breed: 'Siamese' },
  { name: 'Tanjir', age: '1', breed: 'Peterbald' },
  { name: 'Elman', age: '2', breed: 'Birman' },
  { name: 'WhiteCake', age: '1', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breed, setBreed] = useState('');
  const [search, setSearch] = useState('');

  const uniqueBreeds = [...new Set(availableCats.map((cat) => cat.breed))];

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilter = () => {
    let filtered = cats;
    if (breed) filtered = filtered.filter((cat) => cat.breed === breed);
    if (search) filtered = filtered.filter((cat) => cat.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filter-section my-4 d-flex justify-content-center">
        <select
          className="form-select me-2"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="">Select Breed</option>
          {uniqueBreeds.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '200px' }}
        />

        <button className="btn btn-primary" onClick={handleFilter}>
          Search
        </button>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '180px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
