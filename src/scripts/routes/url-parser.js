const urlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();

    if (url.includes('about-us')) {
      setTimeout(() => {
        const aboutSection = document.querySelector('#about-us');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return '/';
    }

    const splittedUrl = this._urlSplitter(url);
    this._scrollToTop();

    return this._urlCombiner(splittedUrl);
  },

  parseActiveWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    this._scrollToTop();
    return this._urlSplitter(url);
  },

  _scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },

  _urlSplitter(url) {
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
      + (splittedUrl.verb ? `/${splittedUrl.verb}` : '');
  }
};

export default urlParser;