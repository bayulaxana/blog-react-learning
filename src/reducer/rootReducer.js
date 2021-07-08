const initialState = {
  posts: [
    {id: '1', title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
    {id: '2', title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'},
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPost = state.posts.filter(post => {
      return action.id !== post.id
    });

    return {
      ...state, posts: newPost
    };
  }
  return state;
}

export default rootReducer;