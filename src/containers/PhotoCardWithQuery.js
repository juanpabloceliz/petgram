import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PhotoCard } from '../components/PhotoCard';

const query = gql`
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
  const { loading, error, data = {} } = useQuery(query, {
    variables: { id: detailId },
  });
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Se dano</p>;
  console.log(data);

  return <PhotoCard {...data.photo} />;
};
