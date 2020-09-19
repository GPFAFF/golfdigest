import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../hooks';
import Loading from '../Loading';
import './index.scss';

export const Video = ({ videoId, image }) => {
  const { data } = useSWR(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`, fetcher)

  const URL = `https://youtube.com/embed/${videoId}`;

  if (!data) return <Loading />;

  const { items } = data;

  const {
    snippet
  } = items[0];

  const {
    description,
    title,
    tags,
  } = snippet;

  const link = description
    .split(' ')
    .find(x => x.includes('golfdigestyoutubesub'))

  const index = description
    .split(' ')
    .findIndex(x => x.includes('Still'))

  const parsedDescription = description
    .split(' ')
    .splice(0, index)
    .join(' ')

  return (
    <div>
      <div className="details">
        <iframe
        className="video--frame"
        src={URL}
        title={title}
        allowFullScreen
        />
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="video--description">{parsedDescription}.</p>
        </div>
      </div>
      <div>
        <h3>Subscribe to Golf Digest</h3>
        <a href={link}>SUBSCRIBE</a>
      </div>
      <ul className="tags">
        {tags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
