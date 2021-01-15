import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const OwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 25px;
`;
export const OwnerName = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 0px;
  margin-left: 5px;
`;
export const CommentText = styled.p`
  margin: 0px;
  font-size: 12px;
`;

export const ShowComment = styled.p`
  margin: 0px;
  margin-top: 10px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
