import Image from "next/image"
import styled from "styled-components"
import { Main } from "../style"

interface PropsType {
	link: string
	image: string
	priority?: boolean
}

export const Portfolio = () => {
	return (
		<div className="changer">
			<Main>
				<Section>
					<Item
						image="/portfolio/jessica_bede.png"
						link="https://jessica-bede.vercel.app"
						priority
					/>
					<hr />
					<Item
						image="/portfolio/netflix_clone.png"
						link="https://github.com/antonionetodeveloper/netflix-clone"
						priority
					/>
					<hr />
					<Item
						image="/portfolio/escolinha.png"
						link="https://learning-next-beryl.vercel.app"
					/>
					<hr />
					<Item
						image="/portfolio/CRUD.png"
						link="https://github.com/antonionetodeveloper/CRUD"
					/>
					<hr />
					<Item image="/portfolio/site2it.png" link="https://site2it.com" />
					<hr />
					<Item
						image="/portfolio/login_azure.png"
						link="https://github.com/antonionetodeveloper/login_ui"
					/>
				</Section>
			</Main>
		</div>
	)
}
const Section = styled.section`
	height: 80vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	gap: 2vw;

	@media screen and (max-width: 500px) {
		width: 90vw;
		height: 70vh;
	}

	hr {
		width: 90%;
	}
`

const Item = ({ link, image, priority }: PropsType) => {
	return (
		<ItemContent>
			{priority ? (
				<>
					<Image
						src={image}
						alt="projeto"
						width={300}
						height={200}
						priority
						layout="responsive"
						loading="lazy"
						placeholder="blur"
					/>
					<a href={link} target="_blank" rel="noreferrer">
						saiba mais{" "}
						<img src="/linkIcon.png" alt="Ícone de link" className="linkIcon" />
					</a>
				</>
			) : (
				<>
					<Image
						src={image}
						alt="projeto"
						width={300}
						height={200}
						layout="responsive"
						loading="lazy"
						placeholder="blur"
					/>
					<a href={link} target="_blank" rel="noreferrer">
						saiba mais{" "}
						<img src="/linkIcon.png" alt="Ícone de link" className="linkIcon" />
					</a>
				</>
			)}
		</ItemContent>
	)
}
const ItemContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 2vw;

	a {
		width: 20%;
		display: flex;
		@media screen and (max-width: 500px) {
			display: none;
		}
		align-items: center;
		justify-content: center;
		font-size: 1.5vw;
		gap: 0.5vw;
		text-decoration: none;
		color: #cccccc;

		:hover {
			cursor: pointer;
			text-decoration: underline;
		}

		img.linkIcon {
			width: 15%;
		}
	}
`

export default Portfolio
