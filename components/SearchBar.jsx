
export default function SearchBar(){
    return (
        <div className="flex flex-row gap-0">
            <input placeholder="Search news " className="flex bg-slate-700 h-12 text-white px-4 py-2 rounded-l-full" />
            <button className="px-4 py-2 bg-blue-300 rounded-r-full font-bold ">Search</button>
        </div>
    )
}