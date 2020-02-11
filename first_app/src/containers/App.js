import React from 'react'
import { connect, Provider } from 'react-redux'

import PostActions from '../redux/PostRedux'

import logo from '../logo.svg'
import '../styles/App.css'

const emptyObject = {}
class App extends React.Component {
  componentDidMount() {
    this.props.getPosts(2)
  }

  handleOnClick = (post) => {
    this.props.selectPost(post)
  }

  handleEditPost = (path, value) => {
    // if (path.include('name')) {
    //   ...
    // }
    this.props.editPostValue(['posts', 3, 'title'], 'test')
  }

  render() {
    const { store, posts, post } = this.props
    console.log(this.props)
    return (
      <Provider store={store}>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            inputHelps={emptyObject}
            onClick={this.handleEditPost}
          >
            change
          </a>
          {post && (
            <div style={{ marginBottom: 15 }}>
              <strong>{post.id}.&nbsp;</strong>
              <strong>{post.title}</strong>
            </div>
          )}
          {posts.map((post) => (
            <p key={post.id}>
              {post.id}. {post.title}{' '}
              <a
                onClick={() => {
                  this.handleOnClick(post)
                }}
              >
                select
              </a>
            </p>
          ))}
        </div>
      </Provider>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.postState.posts,
    post: state.postState.post,
  }
}
const mapDispatchToProps = {
  getPosts: PostActions.getPosts,
  getPostsSuccess: PostActions.getPostsSuccess,
  selectPost: PostActions.selectPost,
  editPostValue: PostActions.editPostValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
