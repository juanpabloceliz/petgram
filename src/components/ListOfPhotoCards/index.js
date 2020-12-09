import React from 'react';

import { PhotoCard } from '../PhotoCard';

import { gql, useQuery } from '@apollo/client';

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export function ListOfPhotoCards() {
  const { loading, error, data } = useQuery(GET_PHOTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
        </li>
      ))}
    </ul>
  );
}
