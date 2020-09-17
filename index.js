/* Note */
function Note() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'yellow',
      padding: '5px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      textAlign: 'center'
    }
  }, "Resize the browser window to see the responsive effect."));
}
/* Header */


function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("h1", null, "My Website"), /*#__PURE__*/React.createElement("p", null, "With a ", /*#__PURE__*/React.createElement("b", null, "flexible"), " layout."));
}
/* Navigation Bar */


function Navbar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Link"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Link"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Link"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Link"));
}
/* The flexible grid (content) */


function Main() {
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, /*#__PURE__*/React.createElement("h2", null, "About Me"), /*#__PURE__*/React.createElement("h5", null, "Photo of me:"), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '200px'
    }
  }, "Image"), /*#__PURE__*/React.createElement("p", null, "Some text about me in culpa qui officia deserunt mollit anim.."), /*#__PURE__*/React.createElement("h3", null, "More Text"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit ame."), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '60px'
    }
  }, "Image"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '60px'
    }
  }, "Image"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '60px'
    }
  }, "Image")), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("h2", null, "TITLE HEADING"), /*#__PURE__*/React.createElement("h5", null, "Title description, Dec 7, 2017"), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '200px'
    }
  }, "Image"), /*#__PURE__*/React.createElement("p", null, "Some text.."), /*#__PURE__*/React.createElement("p", null, "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "TITLE HEADING"), /*#__PURE__*/React.createElement("h5", null, "Title description, Sep 2, 2017"), /*#__PURE__*/React.createElement("div", {
    className: "fakeimg",
    style: {
      height: '200px'
    }
  }, "Image"), /*#__PURE__*/React.createElement("p", null, "Some text.."), /*#__PURE__*/React.createElement("p", null, "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.")));
}
/* Footer */


function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("h2", null, "Footer"));
}
/* Page */


function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Note, null), /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(Footer, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
