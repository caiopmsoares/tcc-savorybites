import React from "react";
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
} from "./BlogFeed.styles";

interface BlogPost {
  id: string;
  content: string[];
  imageUrl: string;
  username: string;
  date: string;
}

interface BlogFeedProps {
  posts: BlogPost[];
}

const BlogFeed: React.FC<BlogFeedProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPostContainer key={post.id}>
          <BlogPostTitle>CHICKEN CLOUD BITES</BlogPostTitle>
          <UserContainer>
            <UserIcon
              src={require("../../images/user-icon.png")}
              alt="Ícone do usuário"
            />
            <div>
              <UserName>{post.username}</UserName>
              <DatePublished>{post.date}</DatePublished>
            </div>
          </UserContainer>
          <UserLine />
          {post.content.slice(0, 3).map((paragraph, index) => (
            <Paragraph>
              {" "}
              <p key={index}>{paragraph}</p>
            </Paragraph>
          ))}
          <BlogImage
            src={require("../../images/coxinha.png")}
            alt="Imagem do post"
          />
          {post.content.slice(3).map((paragraph, index) => (
            <Paragraph>
              {" "}
              <p key={index + post.content.length}>{paragraph}</p>
            </Paragraph>
          ))}
        </BlogPostContainer>
      ))}
    </div>
  );
};

export default BlogFeed;
