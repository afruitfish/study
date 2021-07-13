class LikeButton {
    render() {
        this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
          <span>👍</span>
        </button>
      `)
        this.el.addEventListener('click', () => console.log('click'), false)
        return this.el
    }
}