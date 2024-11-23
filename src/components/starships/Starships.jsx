import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import starshipImage from '../../../public/starship.webp';
import logo from '../../../public/Star_Wars_Logo.svg.png'

const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [nextUrl, setNextUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStarships = async () => {
            let url = 'https://swapi.dev/api/starships/';
            if (nextUrl) url = nextUrl;

            try {
                const response = await axios.get(url);
                setStarships(response.data.results);
                setNextUrl(response.data.next);
            } catch (error) {
                console.error("Error fetching starships:", error);
            }
        };

        fetchStarships();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStarships = starships.filter((starship) =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        starship.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const loadMoreStarships = async () => {
        if (!nextUrl) return; try {
            const response = await axios.get(nextUrl);
            setStarships(prevStarships => [...prevStarships, ...response.data.results]);
            setNextUrl(response.data.next);
        } catch (error) {
            console.error("Error fetching more starships:", error);
        }
    };

    const viewDetails = (starship) => {
        const id = starship.url.split('/').filter(Boolean).pop();
        navigate(`/starship/${id}`);
    }
    return (
        <div>
            <div className='header-content'>
                <img src={logo} alt="Star Wars" style={{ width: '300px', marginRight: '10px', borderRadius: '50px' }} />
                <input
                    type="text"
                    placeholder='Name /Model'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className='starships-container'>
                {filteredStarships.map((starship) => (
                    <div className='starship-card' key={starship.name}>
                        <img className='starship-image'
                            src={starshipImage}
                            alt={starship.name}
                        />
                        <div className='card-content'>
                            <h3>{starship.name}</h3>
                            <p>Model: {starship.model}</p>
                            <p>Speed: {starship.max_atmosphering_speed}</p>
                            <button onClick={() => viewDetails(starship)}>Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {nextUrl && (
                <button onClick={loadMoreStarships}>Load More</button>
            )}
        </div>
    );
};

export default Starships;