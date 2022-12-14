import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
  return (
    <div className="mx-auto mt-3 posts">
      {posts.map((post) => (
        <div className="post mt-4" key={post.id}>
          <Post id={post.id} post={post.data()} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
