import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../hooks';

import { Video } from '../Video';
import Loading from '../Loading';

export const Wrapper = () => {
  const { data } = useSWR(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`, fetcher)

  if (!data) return <Loading />

  const { items } = data;

  return (
    <section>
      <ul>
        <li>
        </li>
      </ul>
      {items.map(item => {
        const { title, id, snippet } = item;
        const {
          thumbnails: {
            medium: {
              url
            }
          }
        } = snippet;

        const parsedId = url.split('/')[4];

        return (
          <Video
            key={id}
            videoId={parsedId}
            title={title}
          />
        )
      })}
    </section>
  )
}
