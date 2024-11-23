import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import starshipImage from '../../../public/starship.webp';

const StarshipDetail = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchStarship = async () => {
            console.log('Starship ID:', id);
            try {
                const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
                setStarship(response.data);
            } catch (error) {
                console.error("Error fetching starship details:", error);
            }
        };
        fetchStarship();
    }, [id]);


    if (!starship) return <p>Loading...</p>;

    return (
        <div className='starship-detail-card'>
            <img className='starship-detail-image'
                src={starshipImage}
                alt={starship.name}
            />
            <div className="detail-card-content">
                <h2>{starship.name}</h2>
                <p>Model: {starship.model}</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Max Speed: {starship.max_atmosphering_speed}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Crew: {starship.crew}</p>
                <p>Cargo Capacity: {starship.cargo_capacity}</p>
                <button onClick={() => navigate(-1)}>Back to List</button>
            </div>
        </div>
    );
};

export default StarshipDetail;