import React, { useState } from 'react';
import { pathOr } from 'ramda';
import {
  Container,
  OwnerContainer,
  Comment,
  Avatar,
  OwnerName,
  CommentText,
  ShowComment,
} from './styles';

export default ({ comments }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);

  if (isActive) {
    return (
      <Container>
        {comments.map((item) => {
          console.log('item', item);
          return (
            <Comment key={item.id}>
              <OwnerContainer>
                <Avatar src={pathOr(null, ['owner', 'avatar'], item)} />
                <OwnerName>
                  {pathOr(null, ['owner', 'username'], item)}
                </OwnerName>
              </OwnerContainer>
              <CommentText>{pathOr(null, ['comment'], item)}</CommentText>
            </Comment>
          );
        })}
      </Container>
    );
  } else {
    return (
      <Container>
        <ShowComment onClick={toggleIsActive}>
          {comments.length} commentaires
        </ShowComment>
      </Container>
    );
  }
};
