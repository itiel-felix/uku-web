

const MainCard = ({children}) =>{
    return (
        <div className="bg-white rounded-2xl min-h-screen m-4 sm:ml-40 sm:mr-40">
            <div className="p-6 ">
            {children ?? null}
            </div>
        </div>
    )
}
export default MainCard