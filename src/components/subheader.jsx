'use client'

function SubHeader() {
    return (
        <header className="bg-gray-900 flex sticky top-0">

            <nav className="text-white mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">

                <Option name="DISCOVER" mobile={false} />
                <Option name="TOP SONGS" />
                <Option name="CHORDS CHART" />
                <Option name="RESOURCES" mobile={false} />
                <Option name="SUBMIT A SONG!" />
            </nav>
        </header>
    )
}

const Option = (props) => {
    const { name, mobile = true } = props;
    const className = "text-white sm:flex  bg-transparent px-6 py-3 text-sm text-center font-extrabold " + (mobile? "" : "hidden");
    return (
        <div className={className}>
            {name}
        </div>
    )
}

export default SubHeader;