import { Link } from "react-router-dom"
import { Image } from "../types/Images"

type Props = {
    item: Image
}

export const ImageItem = ({item}:Props) => {
   
    return (
        <>
            <li key={item.id} className="cursor-pointer flex flex-col mb-4 w-20">
                <Link key={item.id} to={`${item.name}`} className="w-fit group relative hover:rounded-md">
                    <img 
                        src={item.url} 
                        alt={`photo-${item.url}`} 
                        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 rounded-lg group-hover:scale-105 flex items-center justify-center transition-transform">
                        <span className="text-white text-sm font-semibold">View Image</span>
                    </div>
                </Link>
                <div className="text-sm">{item.name}</div>
            </li>
        </>
    )
}