import { Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { Twitter, Language, Business, LocationOn } from '@mui/icons-material';

const LocationInformation = (props) => {
    const { userState } = props;
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState
    return (
        <Grid
            spacing={{ xs: 1, sm: 2 }}
            container
            sx={{ marginTop: '30px' }}
        >
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <LocationOn />
                    {
                        location !== null
                            ?
                            <Typography>{location}</Typography>
                            :
                            <Typography>No hay localización</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Twitter />
                    {
                        twitter_username !== null
                            ?
                            <Typography>{`@${twitter_username}`}</Typography>
                            :
                            <Typography>Sin twitter</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Language />
                    {
                        blog !== ""
                            ?
                            <a target='_blank' href={blog}><Typography>{blog}</Typography></a>
                            :
                            <Typography>Sin ubicación</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Business />
                    {
                        company !== null
                            ?
                            <Typography>{company}</Typography>
                            :
                            <Typography>Sin compañia</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation;
