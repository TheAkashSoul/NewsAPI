export default function NewsCard({title, name, img}){

    return(
        <main>
            <div className="m-1 p-2 flex bg-slate-300 mx-auto w-[100%] rounded-xl shadow-sm hover:shadow-black hover:bg-slate-200 cursor-pointer">
                <div className="flex flex-row">
                    <div className="flex flex-col gap-1 w-[80%]">
                        <h2 className="p-1 font-bold bg-red-500 w-fit text-white text-sm">{name}</h2>
                        <h3 className="flex items-start font-medium text-base leading-5">{title}</h3>
                    </div>
                    <div className="flex items-center">
                        <img className="w-64 h-30 px-2 py-4" src={img || "https://media.cnn.com/api/v1/images/stellar/prod/231209154523-rafah-gaza-12-09-2023.jpg?c=16x9&q=w_800,c_fill"} />
                    </div>
                </div>

            </div>
        </main>
    )
}