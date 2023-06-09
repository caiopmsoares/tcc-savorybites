import React from 'react'
import {
	BlogPostContainer,
	BlogPostTitle,
	UserContainer,
	UserIcon,
	UserName,
	DatePublished,
	UserLine,
	BlogImage,
	Paragraph,
} from './BlogFeed.styles'

import userIcon from '../../images/user-icon.png'
import coxinhaImage from '../../images/coxinha.png'

interface BlogPost {
	id: string
	content: string[]
	imageUrl: string
	username: string
	date: string
}

interface BlogFeedProps {
	posts: BlogPost[]
}

const BlogFeed: React.FC<BlogFeedProps> = ({ posts }) => {
	return (
		<div>
			{posts.map(post => (
				<BlogPostContainer key={post.id}>
					<BlogPostTitle>COXINHA DE FRANGO</BlogPostTitle>
					<UserContainer>
						<UserIcon src={userIcon} alt="Ícone do usuário" />
						<div>
							<UserName>{post.username}</UserName>
							<DatePublished>{post.date}</DatePublished>
						</div>
					</UserContainer>
					<UserLine />
					{post.content.slice(0, 3).map((paragraph, index) => (
						<Paragraph key={index}>
							<p>{paragraph}</p>
						</Paragraph>
					))}
					<BlogImage src={coxinhaImage} alt="Imagem do post" />
					{post.content.slice(3).map((paragraph, index) => (
						<Paragraph key={index + post.content.length}>
							<p>{paragraph}</p>
						</Paragraph>
					))}
				</BlogPostContainer>
			))}
		</div>
	)
}

export default BlogFeed
