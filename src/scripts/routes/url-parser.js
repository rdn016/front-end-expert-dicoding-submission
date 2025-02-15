const urlParser = {
  parseActiveUrlWithCombiner(){
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    this._scrollToTop();
    return this._urlCombiner(splittedUrl);
  },

  parseActiveWithoutCombiner(){
    const url = window.location.hash.slice(1).toLowerCase();
    this._scrollToTop();
    return this._urlSplitter(url);
  },
  _scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Untuk efek scroll yang halus
    });
  },

  _urlSplitter(url){
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/')
        + (splittedUrl.id ? '/:id' : '')
        + (splittedUrl.verb? `/${splittedUrl.verb}` : '');

  }
};

export default urlParser;