import React, { Component } from "react";
import api from "../services/api";
import io from "socket.io-client";
import "./Feed.css";

import more from "../assests/more.png";
import like from "../assests/like.png";
import likeM from "../assests/likeM.jpeg";
import comment from "../assests/comment.png";
import send from "../assests/send.png";

export default class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("posts");
    this.setState({ feed: response.data });
  }

  handleLike = id =>{
    api.post(`post/${id}/like`);
  }

  registerToSocket = () => {
    const socket = io("http://localhost:3334");

    socket.on('post', newPost => {
      this.setState({feed:[newPost, ...this.state.feed]})
    })

    socket.on('like', newLike => {
      this.setState({
        feed: this.state.feed.map(post =>
            post._id === newLike._id ? newLike : post
          )
      })
    })
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img className="" src={more} alt="mais" />
            </header>
            <img src={`http://localhost:3334/files/${post.image}`} alt="" />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={post.likes > 0 ? likeM : like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}
