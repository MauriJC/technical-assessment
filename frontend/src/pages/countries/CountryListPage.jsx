// pages/index.js
import { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

import api from '../../api/api';
import { Link } from 'react-router-dom';

export default function CountryListPage() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getAvailableCountries() {
            const response = await api.get('/countries/available');
            setCountries(response.data);
        }
        getAvailableCountries();
    }, []);

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4' gutterBottom>Available Countries List</Typography>
            <List sx={{ width: '90%' }}>
                {countries.map((country) => (
                    <Link key={country.countryCode} to={`/${country.name}/${country.countryCode}`} style={{
                        textDecoration: 'none',
                        '&:visited': {
                            textDecoration: 'none',
                        }
                    }}
                    >
                        <ListItem button  >
                            <ListItemText primary={country.name} secondary={country.countryCode} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Container>
    );
}
