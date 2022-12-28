import {FC} from 'react'
import Head  from 'next/head'
import { IMeta } from './meta.interface'


const Meta:FC<IMeta>=({description, title})=>{
	return <>
	<Head>
		<title>{title}</title>
		<link rel="shorcut icon" href="/favicon.png" type="image/png"/>
		{
			description ? <meta
			itemProp="description"
			name="description"
			content={description}/>
			: <meta name="robots" content="noindex, nofollow"/>
		}
	</Head>
	</>
}
export default Meta