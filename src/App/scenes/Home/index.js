import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getLoginID, getPosts } from '../../redux/selectors/index';
import { fetchUser } from '../../redux/actions/users';
import { fetchPosts } from '../../redux/actions/posts';
import Container from '../../components/ScreenContainer';
import PostsList from '../../components/PostsList';

export default () => {
  const loginId = useSelector(getLoginID);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(loginId));
    dispatch(fetchPosts());
  }, []);
  return (
    <Container>
      <PostsList />
    </Container>
  );
};
