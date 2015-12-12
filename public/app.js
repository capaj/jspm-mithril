import m from 'mithril'

var Demo = {
  // controller
  controller: function () {
    return {
      pages: [
        {'title': 'Getting Started', 'url': 'getting-started.html'},
        {'title': 'Documentation', 'url': 'mithril.html'},
        {'title': 'Mithril Blog', 'url': 'http://lhorie.github.io/mithril-blog/'},
        {'title': 'Mailing List', 'url': 'https://groups.google.com/forum/#!forum/mithriljs'}
      ],
      log: function () {
        console.log('clicked')
      }
    }
  },

  // view
  view: function (ctrl) {
    return m('div', {className: 'list'}, [
      ctrl.pages.map(function (page) {
        return m('div', [m('a', {href: page.url}, page.title)])
      }),
      m('button', {onclick: ctrl.log}, 'console log test')
    ])
  }
}

// initialize
m.route(document.getElementById('app'), '/', {
  '/': Demo
})

if (System.trace) {
  m.route(m.route())	// little hack for hot reload to work with mithrill router
}
