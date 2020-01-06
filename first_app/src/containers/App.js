import React from 'react'
import { connect, Provider } from 'react-redux'

import PostActions from '../redux/PostRedux'

import logo from '../logo.svg'
import '../styles/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.getPosts(2)
  }

  render() {
    const { store, posts } = this.props
    console.log(this.props)
    return (
      <Provider store={store}>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          {posts.map((post) => (
            <p key={post.id}>
              {post.id}. {post.title}
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
  }
}
const mapDispatchToProps = {
  getPosts: PostActions.getPosts,
  getPostsSuccess: PostActions.getPostsSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
