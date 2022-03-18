import {useEffect} from 'react';
import CoinComponent from '../components/CoinComponent/CoinComponent';
import Error from '../components/Error';
import Loader from '../components/Loader';
import {useFetch} from '../customHooks/useFetch';

const Coins = () => {
    // const [data, setData] = useState<any[]>([]);
	// const {data: coinsData, loading, error} = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
	const [coinsData, error, fetchCoinsData] = useFetch();
	// 	//https://api.coingecko.com/api/v3/simple/supported_vs_currencies
	// 	//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
	// 	// https://api.coingecko.com/api/v3/coins/{id} -> bitcoin

	useEffect(() => {
		fetchCoinsData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
	}, [])
	// useEffect(() => {
	// 	try {
			
	// 		window.fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then(async (response) => {
	// 			const data = await response.json();
	// 			setData(data)
	// 			// console.log(data);
	// 		})
	// 	} catch {
	// 		console.log('la')
	// 	}
	// }, []);

	useEffect(() => {
		console.log('here', coinsData,)
	})

	if (!coinsData?.length) return <Loader />
	if (error) return <Error error={error} />

    return (
		<div className="container flex flex-wrap justify-between items-center mx-auto max-w-3xl">
			{coinsData.map((coin: any) => <CoinComponent key={coin.id} id={coin.id} image={coin.image} name={coin.name} currentPrice={coin.current_price} />)}
		</div>
	);
};

export default Coins;