'use client'
import { useState, useEffect } from 'react'

function SubHeader() {
    const [isXsScreen, setIsXsScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsXsScreen(window.innerWidth < 640);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    return (
        <header className="bg-black flex ">

            <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">

                <Option name="DISCOVER" isHidden={isXsScreen} />
                <Option name="TOP SONGS" />
                <Option name="CHORDS CHART" />
                <Option name="RESOURCES" isHidden={isXsScreen} />
                <Option name="SUBMIT A SONG!" />
            </nav>
        </header>
    )
}

const Option = (props) => {
    const { name, isHidden = false } = props;
    const className = "flex xl:w-80 max-xl:w-full bg-transparent px-6 py-3 text-sm text-center font-extrabold" + (isHidden ? " hidden" : "");
    return (
        <div className={className}>
            {name}
        </div>
    )
}

export default SubHeader;