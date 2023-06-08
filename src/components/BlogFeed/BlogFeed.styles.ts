import styled from "styled-components";

export const BlogPostContainer = styled.div`
  justify-content: center;
  margin: 25%;
  margin-left: 10%;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin: 10%;
    margin-bottom: 25%;
  }
`;

export const Paragraph = styled.div`
  padding: 0 0 35px 0;
  font-weight: 500;
  font-style: italic;
`;

export const BlogPostTitle = styled.h1`
  margin-bottom: -40px;
  font-weight: 700;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 50px;
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 1.4em;
  font-weight: 500;
`;

export const DatePublished = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  font-style: italic;
  color: #888; /* cor do texto da data */
`;

export const UserLine = styled.hr`
  flex-grow: 1;
  height: 2px;
  background-color: #c6c6c6;
  border-style: none;
  margin-bottom: 35px;
  margin-top: 20px;
`;

export const BlogImage = styled.img`
  max-width: 100%;
  margin: 0 0 35px 0;
`;
