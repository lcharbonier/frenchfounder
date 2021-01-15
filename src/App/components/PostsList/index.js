import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { getPosts } from '../../redux/selectors';
import PostCard from '../PostCard';

export default () => {
  const posts = useSelector(getPosts);
  return (
    <Container>
      {posts.map((item) => {
        return (
          <PostCard
            key={item.id}
            description={item.description}
            image={item.image}
            owner={item.owner}
            comments={item.comments}
          />
        );
      })}
    </Container>
  );
};
