
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ARTICLE":
        return [
          ...state,
          {
            id: Math.floor(Math.random()*1000),
                title: action.article.title,
                body: action.article.body,
          },
        ]
      default:
       return state
    }
  }
  