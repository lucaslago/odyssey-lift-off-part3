import React from "react";
import Layout from "../components/layout";
import QueryResult from "../components/query-result";
import { useQuery, gql } from "@apollo/client";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

const Track = ({ trackId }) => {
  console.log({ trackId });
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  console.log({ loading, data, error });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
