// src/components/CountryInfo.js
import { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Card, CardContent, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { Link, useParams } from 'react-router-dom';
import api from '../../api/api';

const CountryInfo = () => {
    const { countryCode, countryName } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        async function getCountryInfo() {
            try {
                const response = await api.get(`/countries/${countryName}/${countryCode}`);
                console.log(response.data)
                setCountryInfo(response.data);
            } catch (error) {
                console.error('Error fetching country info:', error);
            }
        }
        getCountryInfo();
    }, [countryCode, countryName]);

    if (!countryInfo) return <p>Loading...</p>;

    return (
        <Container>
            <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>
                {countryName}
            </Typography>
            <Card>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <img src={countryInfo.flag} alt={`${countryName} flag`} width='100' />
                    </Box>
                    <Typography variant='h6'>Border Countries</Typography>
                    <List>
                        {countryInfo.borders.map((borderCountry) => (
                            <Link
                                to={`/${borderCountry.commonName}/${borderCountry.countryCode}`}
                                key={borderCountry.countryCode}
                                style={{
                                    textDecoration: 'none',
                                    '&:visited': {
                                        textDecoration: 'none',
                                    }
                                }}
                            >
                                <ListItem button>
                                    <ListItemText primary={borderCountry.commonName} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Typography variant='h6'>Population Over Time</Typography>
                    <ResponsiveContainer width='100%' height={400}>
                        <BarChart data={countryInfo.population} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='year' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey='value' fill='#1976d2' />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CountryInfo;
