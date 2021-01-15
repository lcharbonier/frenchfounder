import styled from 'styled-components';
import colors from '../../constants/colors';

export const Card = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  padding: 15px;
`;
export const OwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;
export const OwnerName = styled.div`
  font-weight: bold;
  margin-left: 5px;
  color: ${colors.primaryTitle};
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const Image = styled.img`
  width: 320px;
  height: 320px;
`;
export const Description = styled.p`
  color: ${colors.textLight};
  margin: 0px 5px;
`;

export const EmptyComments = styled.p`
  color: ${colors.black};
  margin: 0px;
  margin-top: 10px;
  font-size: 12px;
`;
