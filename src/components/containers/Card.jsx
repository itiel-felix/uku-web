
import '@/app/globalicons.css'
const Card = ({ children, title = "TEST TITLE" }) => {

    return (
        <div className=" justify-center mb-3 shadow-md rounded-lg  bg-orange-50">
            {/* header */}
            <div className="  rounded-t-lg rounded-tr-lg flex  w-auto border border-1 border-gray-100   border-b-0 p-1 justify-items-center">
                <div className="text-black ml-4
                italic font-bold">
                    {title}
                </div>
            </div>
            <div className="p-2 pt-0 border-t-0 rounded-b-lg ml-4 mr-4 rounded-br-lg bg-orange-50  ">
                {children ?? (
                    testData.map((element, index)=> 
                    <Row name={element.name} 
                    author = {element.author}
                    place={index == 0 ? 'first' : ''}
                    />)
                )}
                
            </div>
        </div>
    )
}

const Row = ({name, author, place}) =>{
    const border= (place !== 'first' ? 'border-t-0' : '') 
    return(
        <div className = {`w-full h-auto border-2 border-r-0 border-l-0 border-orange-100 hover:bg-orange-100 p-1 cursor-default `+ border}>
            <div className = "text-extrabold">{name}</div>
            <div className="text-sm text-gray-500 italic">{author}</div>
        </div>
    )

}
const testData = [
    {
        name: "Don't Stop Me Now",
        author: 'Queen'
    },
    {
        name: "Take On Me",
        author: "A-Ha"
    },
    {
        name: "Hasta la raiz",
        author: "Natalia Lafourcade"
    },
    {
        name: "Can't help falling in love",
        author: "Elvis Presley"
    },
    {
        name: "Chlorine",
        author: "Twenty One Pilots"
    }
]
export default Card