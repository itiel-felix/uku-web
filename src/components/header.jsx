

function Header() {
    return (
        <header className="bg-black text-white flex w-full font-sans">

            <div className="bg-white w-12 h-12  sm:h-16 sm:w-16 flex items-center justify-center rounded-full font-extrabold min-w-12 min-h-12 text-gray-700  sm:mr-4 mr-0 sm:ml-6  ml-4 sm:mt-3 mt-5 text-center text-overflow">
                your logo
            </div>
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div
                    className='flex ml-3 xl:w-80 max-xl:w-full bg-transparent px-6 py-3 rounded-xl outline outline-gray-600  '>

                    <input type='text' placeholder='Search something...'
                        className='w-20.5 text-sm lg:text-sm bg-transparent rounded-lg outline-none  text-white' />
                </div>
            </nav>
            <div className="bg-transparent items-center mr-12 pt-6 pb-6">
                <button class="bg-[#FFA629]  hover:bg-[#eb9621] text-white font-bold py-3 
                active:bg-[#be7b1c]
                text-sm
                min-w-20
                rounded-xl">
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default Header;