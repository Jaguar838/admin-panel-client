import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import AuthProvider from '../app/providers/auth-provider/AuthProvider'
import ThemeProvider from '../app/providers/theme-provider/ThemeProvider'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ThemeProvider>
					<Component {...pageProps} />
				</ThemeProvider>
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
