import type { GetStaticProps, NextPage } from 'next'
import { MovieService } from '../service/movie.service'
import { IHome } from '@/components/screens/home/home.interface'
import Home from '@/components/screens/home/Home'


const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}
export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newMovies } = await MovieService.getAll()

		return {
			props: {
				newMovies
			},
			revalidate: 60

		}

	} catch (e) {
		console.log('err', e)
		return {
			props: {
				newMovies: []
			}
		}
	}
}

export default HomePage
