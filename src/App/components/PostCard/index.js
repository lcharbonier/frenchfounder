import React from 'react';
import {
  Card,
  Description,
  Image,
  Avatar,
  OwnerContainer,
  OwnerName,
  EmptyComments,
} from './styles';
import LikeButton from '../LikeButton';
import Comments from '../Comments';

export default ({ description, image, owner, comments }) => {
  console.log(comments);
  return (
    <Card>
      <OwnerContainer>
        <Avatar src={owner.avatar} />
        <OwnerName>{owner.username}</OwnerName>
      </OwnerContainer>
      <Image src={image} />
      <LikeButton />
      <Description>{description}</Description>
      {comments.length ? (
        <Comments comments={comments} />
      ) : (
        <EmptyComments>Aucun commentaires</EmptyComments>
      )}
    </Card>
  );
};
