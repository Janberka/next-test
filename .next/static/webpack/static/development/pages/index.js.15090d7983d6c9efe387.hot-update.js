webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");


var _jsxFileName = "/Users/janberk/Desktop/nexttest1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Home = function Home(_ref) {
  var posts = _ref.posts,
      comments = _ref.comments;
  return __jsx("div", {
    className: "jsx-1000307833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1000307833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Home")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1000307833" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1000307833" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Welcome to Next.js!"), __jsx("p", {
    className: "jsx-1000307833" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "To get started, edit ", __jsx("code", {
    className: "jsx-1000307833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "pages/index.js"), " and save to reload."), __jsx("div", {
    className: "jsx-1000307833" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, comments.map(function (comment) {
    return __jsx("a", {
      href: "https://nextjs.org/docs",
      key: comment.id,
      className: "jsx-1000307833" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1000307833",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, comment.title, " \u2192"), __jsx("p", {
      className: "jsx-1000307833",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, comment.body));
  })), __jsx("div", {
    className: "jsx-1000307833" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, posts.map(function (post) {
    return __jsx("a", {
      href: "https://nextjs.org/docs",
      key: post.id,
      className: "jsx-1000307833" + " " + 'card',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-1000307833",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, post.title, " \u2192"), __jsx("p", {
      className: "jsx-1000307833",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, post.body));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1000307833",
    __self: this
  }, ".hero.jsx-1000307833{width:100%;color:#333;}.title.jsx-1000307833{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1000307833,.description.jsx-1000307833{text-align:center;}.row.jsx-1000307833{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-1000307833{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#000;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1000307833:hover{border-color:#067df7;}.card.jsx-1000307833 h3.jsx-1000307833{margin:0;color:#067df7;font-size:18px;}.card.jsx-1000307833 p.jsx-1000307833{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW5iZXJrL0Rlc2t0b3AvbmV4dHRlc3QxL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZ0IsQUFHb0IsQUFJRixBQVFTLEFBR0YsQUFRTyxBQVNGLEFBR1osQUFLQSxTQW5DRSxBQStCRyxBQUtHLEVBeENOLEtBZVcsRUFIeEIsRUFQbUIsQ0EyQm5CLENBL0JBLENBc0JjLEFBYUcsR0FLQSxTQWpCQyxFQWxCQyxDQVVKLEFBcUJmLEdBS2EsVUFqQlUsQ0FrQnZCLEVBcENpQixlQUNqQixnQ0FrQmtCLFdBVEcsS0FVTCxjQUNXLHlCQUMzQix5QkFYaUIseURBQ2MsMkhBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9qYW5iZXJrL0Rlc2t0b3AvbmV4dHRlc3QxL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcblxuY29uc3QgSG9tZSA9ICh7cG9zdHMsIGNvbW1lbnRzfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cblxuICAgIDxOYXYgLz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5XZWxjb21lIHRvIE5leHQuanMhPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICBUbyBnZXQgc3RhcnRlZCwgZWRpdCA8Y29kZT5wYWdlcy9pbmRleC5qczwvY29kZT4gYW5kIHNhdmUgdG8gcmVsb2FkLlxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAge2NvbW1lbnRzLm1hcChjb21tZW50PT4oXG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2RvY3MnIGNsYXNzTmFtZT0nY2FyZCcga2V5PXtjb21tZW50LmlkfT5cbiAgICAgICAgICAgIDxoMz57Y29tbWVudC50aXRsZX0gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPntjb21tZW50LmJvZHl9PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0PT4oXG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2RvY3MnIGNsYXNzTmFtZT0nY2FyZCcga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX0gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgIH1cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgfVxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJykudGhlbihyPT5yLmpzb24oKSk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cycpLnRoZW4ocj0+ci5qc29uKCkpO1xuXG4gIHJldHVybiB7cG9zdHMsIGNvbW1lbnRzfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/janberk/Desktop/nexttest1/pages/index.js */"));
};

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var posts, comments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()('https://jsonplaceholder.typicode.com/posts').then(function (r) {
            return r.json();
          });

        case 2:
          posts = _context.sent;
          _context.next = 5;
          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()('https://jsonplaceholder.typicode.com/comments').then(function (r) {
            return r.json();
          });

        case 5:
          comments = _context.sent;
          return _context.abrupt("return", {
            posts: posts,
            comments: comments
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.15090d7983d6c9efe387.hot-update.js.map