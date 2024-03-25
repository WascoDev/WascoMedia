import React, { useEffect, useState } from 'react'
import { ChannelCard, Videos } from './'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Box } from '@mui/material'

function ChannelDetail() {
 const [channelDetail, setChannelDetail] = useState(null)
 const [videos, setVideos] = useState([])
 const { id } = useParams()

 console.log(channelDetail)

 useEffect(() => {
  const fetchResults = async () => {
   const data = await fetchFromApi(`channels?part=snippet&id=${id}`)
   setChannelDetail(data?.items[0])

   const videosData = await fetchFromApi(
    `search?channelId=${id}&part=snippet%2Cid&order=date`
   )

   setVideos(videosData?.items)
  }

  fetchResults()
 }, [id])

 return (
  <Box minHeight='95vh'>
   <div
    style={{
     background:
      'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,219,1) 100%)',
     zIndex: '10',
     height: '300px',
    }}
   />
   <Box>
    <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
   </Box>
   <Box display='flex' p='2'>
    <Box sx={{ mr: { sm: '100px' } }} />
    <Videos videos={videos} />
   </Box>
  </Box>
 )
}

export default ChannelDetail
