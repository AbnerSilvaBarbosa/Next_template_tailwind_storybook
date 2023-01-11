import { ReactNode } from "react"

export type ResponseQuery = {
	userId: number
	id: number
	title: string
	body: string
}

export type LayoutProps = {
	children?: ReactNode
}
