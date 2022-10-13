import { Error, Loader, SongCard } from "../components"; 
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useSelector, useDispatch  } from "react-redux";


const Discover = () => {
  const dispatch = useDispatch()
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const {data, isFatching, errro} = useGetTopChartsQuery()
  
  return (
   <div className="flex flex-col"> 
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
    <h2 className="font-bold text-3xl text-white text-left">Discover {genres[0].title}</h2>
      <select 
        onChange={()=> {}}
      value =""
      className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 ">
        {genres.map((genre) => {
           return <option key = {genre.value} value={genre.value}>{genre.title}</option>
        })}
      </select>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.map((song,index) => {
        return <SongCard 
          key={index}
          song={song}
          isPlaying = {isPlaying}
          activeSong = {activeSong}
          i={index}
          data = {data}
        />
      })}
    </div>
   </div>
  )
}

export default Discover;
