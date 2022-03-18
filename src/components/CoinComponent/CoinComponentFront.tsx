import {CoinComponentFrontProps} from './CoinComponentInterfaces';
import { useToggle } from '../../customHooks/useToggle';

const CoinComponentFront = ({image, name, currentPrice, setIsFlipped}: CoinComponentFrontProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useToggle();

    return (
        <div
            className='flip-card-front absolute w-full h-full bg-white border rounded-lg'
            style={{backfaceVisibility: 'hidden'}}
        >
            <div className="flex justify-end px-4 pt-4">
                <button 
                    className="sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button"
                    onClick={setIsFlipped}
                >
                    <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                </button>
                <button 
                    id="dropdownButton" 
                    type="button"
                    data-dropdown-toggle="dropdown" 
                    className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" 
                    onClick={setIsDropdownOpen}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {isDropdownOpen ? <div id="dropdown" className="absolute top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="dropdownButton">
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                    </ul>
                </div> : null}
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="mb-3 w-8 h-8 rounded-full shadow-lg" src={image} alt={name}/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Current Price: {currentPrice}</span>
            </div>
        </div>
    );
}

export default CoinComponentFront;