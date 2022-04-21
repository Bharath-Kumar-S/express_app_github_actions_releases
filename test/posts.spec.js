import fetch from 'node-fetch';
import { expect } from 'chai';
import { posts } from '../assets/posts.js';

describe("Posts", function () {
  it("should be able fetch posts", async () => {
    const response = await fetch("http://localhost:5000/posts");
    expect(response.status).to.equal(200);
    const data = await response.json();
    expect(data).to.deep.equal(posts);
  });
});
