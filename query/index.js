import { gql } from '@apollo/client';

export const GET_FILM = gql`
  query Film {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;
