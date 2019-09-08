import React, { Component } from "react";
import api from "../services/api";
import { Form, Input, Button} from "antd";
import "antd/dist/antd.css";
import "./New.css";

export default class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();

    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);
   
    await api.post("posts", data);

    this.props.history.push('/');

  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    console.log(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
     <div id="content-form">
          <Form id="post-form" onSubmit={this.handleSubmit}>
        <Form.Item>
          <input type="file" onChange={this.handleImageChange} />
            {/* <Button>
              <Icon type="upload" /> Escolha a
              image
            </Button> */}
        </Form.Item>
        <Form.Item>
          <Input
            name="author"
            placeholder="Autor do post"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="place"
            placeholder="Local do post"
            onChange={this.handleChange}
            value={this.state.place}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="description"
            placeholder="Descrição do post"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="hashtags"
            placeholder="hashtag do post"
            onChange={this.handleChange}
            value={this.state.hashtags}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Postar</Button>
        </Form.Item>
      </Form>
     </div> 
    );
  }
}
