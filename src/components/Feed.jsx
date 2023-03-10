import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import { apiFetch } from '../utils/apiFetch'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    apiFetch(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory])
  return (
    <Stack sx={{flexDirection: { sx: 'column', md: 'row'}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: '0', md: 2} }}>
        <Sidebar 
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'} }>
          JolomiTee &copy; 2023
        </Typography>
      </Box>

      <Box p={3} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Videos />
      </Box>

    </Stack>
  )
}

export default Feed