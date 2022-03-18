import {CoinComponentBackProps} from './CoinComponentInterfaces';

const CoinComponentBack = ({coinDescription, setIsFlipped}: CoinComponentBackProps) => {
    return (
        <div
            className='flip-card-back absolute w-full h-full bg-white border rounded-lg overflow-y-scroll'
            style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}
        >
            <div className="flex justify-end px-4 pt-4">
                <button 
                    className="sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button"
                    onClick={setIsFlipped}
                >
                    <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </button>
            </div>
            <div className="text-center px-4 font-mono">
                <p dangerouslySetInnerHTML={{__html: coinDescription}} />
            </div>
        </div>
    )
}

export default CoinComponentBack;