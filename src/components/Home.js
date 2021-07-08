import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false
    };
  }

  // componentDidMount() {
  //   // get the data from the server
  //   // when component mounted to the DOM
  //   // ex: this is an API that return JSON
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       this.setState({
  //         posts: res.data.slice(0, 10),
  //         loading: false
  //       });
  //     });
  // }

  render() {
    // loading animation when fetching the data
    const isLoading = this.state.loading;
    const loaderAnimation = (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

    // build the post list
    // if it exist
    const posts = this.props.posts;
    const postList = (function () {  // self-invoking function, i prefer to use this than ternary operator
      //
      if (posts.length) {
        return posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <div className="card-content">
                {/* Route parameter > dynamic web page */}
                <Link to={`/${post.id}`}>
                  <span className="card-title">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          );
        });
      }
      else {
        return <div className="center">Post is empty</div>
      }
      //
    })();

    return (
      <div className="container">
        <h4>Home</h4>
        {isLoading ? loaderAnimation : postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Home);