import  { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
  reducerPath : 'shazamCoreApi',
  baseQuery : fetchBaseQuery({
    baseUrl : 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders : (headers) => {
      headers.set('X-RapidAPI-Key', '0887a4f1e9msh0ad3d2e57ddba18p1d6ccdjsn67aa762fc496')
      return headers
    }
  }),
  endpoints : (builder) => ({
    getTopCharts : builder.query({ query: () => '/charts/world'})
  })
})

export const { useGetTopChartsQuery } = shazamCoreApi 
