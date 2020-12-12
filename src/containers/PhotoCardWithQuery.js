import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PhotoCard } from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ detailId }) => {
  const { loading, error, data = {} } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id: detailId },
  });
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Se dañó</p>;

  return <PhotoCard {...data.photo} />;
};
