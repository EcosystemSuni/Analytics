webpackHotUpdate_N_E("pages/users/[id]",{

/***/ "./src/components/AppNavigation.js":
/*!*****************************************!*\
  !*** ./src/components/AppNavigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppNavigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_edinsoncs_Desktop_Projects_sushiswap_analytics_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Sushi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sushi */ "./src/components/Sushi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\edinsoncs\\Desktop\\Projects\\sushiswap-analytics\\src\\components\\AppNavigation.js",
    _s = $RefreshSig$();







var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {},
    list: {// "& > *": {
      //   paddingLeft: theme.spacing(3),
      // },
    },
    nested: {
      paddingLeft: theme.spacing(3)
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar
  };
});
function AppNavigation() {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      open = _useState[0],
      setOpen = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(C_Users_edinsoncs_Desktop_Projects_sushiswap_analytics_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      dialogOpen = _React$useState2[0],
      setDialogOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(C_Users_edinsoncs_Desktop_Projects_sushiswap_analytics_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      address = _React$useState4[0],
      setAddress = _React$useState4[1];

  var handleClickOpen = function handleClickOpen() {
    setDialogOpen(true);
  };

  var handleClose = function handleClose() {
    setDialogOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    classes: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.toolbar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
        smUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          display: "flex",
          alignItems: "center",
          py: 0.5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
            edge: false,
            onClick: function onClick() {
              return router.push("/");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sushi__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "subtitle1",
            color: "textPrimary",
            noWrap: true,
            children: "SUNI Analytics"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
      className: classes.list // aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Overview
      //   </ListSubheader>
      // }
      ,
      direction: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        selected: router.pathname === "/",
        onClick: function onClick() {
          return router.push("/");
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, "/", true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        selected: router.pathname === "/bar",
        onClick: function onClick() {
          return router.push("/bar");
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FastfoodOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Bar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)]
      }, "/bar", true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["WavesOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Pools"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ExpandLess"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 19
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ExpandMore"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
        "in": open,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
          component: "div",
          disablePadding: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pools/recent",
            onClick: function onClick() {
              return router.push("/pools/recent");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FiberNewOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "Recent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pools",
            onClick: function onClick() {
              return router.push("/pools");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DetailsOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Pairs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ExpandLess"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 19
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ExpandMore"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
        "in": open,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
          component: "div",
          disablePadding: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/recent",
            onClick: function onClick() {
              return router.push("/pairs/recent");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FiberNewOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "Recent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs",
            onClick: function onClick() {
              return router.push("/pairs");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DetailsOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/gainers",
            onClick: function onClick() {
              return router.push("/pairs/gainers");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["TrendingUpOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "Gainers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/losers",
            onClick: function onClick() {
              return router.push("/pairs/losers");
            },
            className: classes.nested,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["TrendingDownOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: "Losers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        selected: router.pathname.includes("tokens"),
        onClick: function onClick() {
          return router.push("/tokens");
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MoneyOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Tokens"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, this)]
      }, "/tokens", true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
      maxWidth: "sm",
      open: dialogOpen,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
        id: "form-dialog-title",
        children: "Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
          children: "Enter an address and click load."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
          autoFocus: true,
          margin: "dense",
          id: "address",
          label: "Address",
          type: "text",
          onChange: function onChange(event) {
            setAddress(event.target.value);
          },
          fullWidth: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: handleClose,
          color: "primary",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: function onClick() {
            localStorage.setItem("defaultAddress", address);
            router.push("/users/" + address);
            handleClose();
          },
          color: "primary",
          children: "Load"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

_s(AppNavigation, "Gw7NLKmVvSRsQzIjjE1FHUs8n7o=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = AppNavigation;

var _c;

$RefreshReg$(_c, "AppNavigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJsaXN0IiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwidG9vbGJhciIsIm1peGlucyIsIkFwcE5hdmlnYXRpb24iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJkaWFsb2dPcGVuIiwic2V0RGlhbG9nT3BlbiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xvc2UiLCJwdXNoIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkJBO0FBdUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLFFBQUksRUFBRSxDQUNKO0FBQ0E7QUFDQTtBQUhJLEtBRmlDO0FBT3ZDQyxVQUFNLEVBQUU7QUFDTkMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURQLEtBUCtCO0FBVXZDO0FBQ0FDLFdBQU8sRUFBRU4sS0FBSyxDQUFDTyxNQUFOLENBQWFEO0FBWGlCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBY2UsU0FBU0UsYUFBVCxHQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxNQUFNRSxLQUFLLEdB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QUFxQixnQkFBckIsRUFBdUNYLE9BQXZDO0FBQ0FSLGtCQUFNLENBQUNZLElBQVAsQ0FBWSxZQUFZSixPQUF4QjtBQUNBRyx1QkFBVztBQUNaLFdBTEg7QUFNRSxlQUFLLEVBQUMsU0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdk5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaVFEOztHQWxSdUJkLGE7VUFDTlYsUyxFQUNGWSxpRSxFQUNDRSxxRDs7O0tBSE9KLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS4zOGEwMTY0NDQ0Y2U0MDdhZGMzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBY2NvdW50VHJlZU91dGxpbmVkLFxyXG4gIEFwcHNPdXRsaW5lZCxcclxuICBCcmlnaHRuZXNzNCxcclxuICBCcmlnaHRuZXNzNE91dGxpbmVkLFxyXG4gIEJyaWdodG5lc3M3LFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbiAgRGFzaGJvYXJkT3V0bGluZWQsXHJcbiAgRGV0YWlsc091dGxpbmVkLFxyXG4gIEV4cGFuZExlc3MsXHJcbiAgRXhwYW5kTW9yZSxcclxuICBGYXN0Zm9vZE91dGxpbmVkLFxyXG4gIEZpYmVyTmV3T3V0bGluZWQsXHJcbiAgSGlzdG9yeU91dGxpbmVkLFxyXG4gIExpbmtPdXRsaW5lZCxcclxuICBMaXN0QWx0T3V0bGluZWQsXHJcbiAgTWVudSxcclxuICBNb25leU91dGxpbmVkLFxyXG4gIFJhZGlvQnV0dG9uVW5jaGVja2VkT3V0bGluZWQsXHJcbiAgUmVvcmRlck91dGxpbmVkLFxyXG4gIFNldHRpbmdzRXRoZXJuZXRPdXRsaW5lZCxcclxuICBTdGFyQm9yZGVyLFxyXG4gIFRyZW5kaW5nRG93bk91dGxpbmVkLFxyXG4gIFRyZW5kaW5nVXBPdXRsaW5lZCxcclxuICBWaWV3U3RyZWFtT3V0bGluZWQsXHJcbiAgV2F2ZXNPdXRsaW5lZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb2xsYXBzZSxcclxuICBEaWFsb2csXHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIERpdmlkZXIsXHJcbiAgSGlkZGVuLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRvb2xiYXIsXHJcbiAgVG9vbHRpcCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmltcG9ydCBTdXNoaSBmcm9tIFwiLi9TdXNoaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgbGlzdDoge1xyXG4gICAgLy8gXCImID4gKlwiOiB7XHJcbiAgICAvLyAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIG5lc3RlZDoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldERpYWxvZ09wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzZXM9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBweT17MC41fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgICAgICAgPFN1c2hpIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgU1VOSSBBbmFseXRpY3NcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgIC8vIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXHJcbiAgICAgICAgLy8gc3ViaGVhZGVyPXtcclxuICAgICAgICAvLyAgIDxMaXN0U3ViaGVhZGVyIGNvbXBvbmVudD1cImRpdlwiIGlkPVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCI+XHJcbiAgICAgICAgLy8gICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgLy8gICA8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvXCJcclxuICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPERhc2hib2FyZE91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvYmFyXCJcclxuICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYmFyXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9iYXJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPEZhc3Rmb29kT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQmFyXCIgLz5cclxuICAgICAgICAgIHsvKiB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59ICovfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBrZXk9XCIvYmFyXCJcclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9iYXJcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9iYXJcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8Vmlld1N0cmVhbU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3ZlcnZpZXdcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8SGlzdG9yeU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGFzdCBTZXJ2aW5nc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT4gKi99XHJcblxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8V2F2ZXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQb29sc1wiIC8+XHJcbiAgICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wb29scy9yZWNlbnRcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wb29scy9yZWNlbnRcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8RmliZXJOZXdPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJlY2VudFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Bvb2xzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcG9vbHNcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWxsXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wb29scy9nYWluZXJzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcG9vbHMvZ2FpbmVyc1wiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJHYWluZXJzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9vbHMvbG9zZXJzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcG9vbHMvbG9zZXJzXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nRG93bk91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTG9zZXJzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT4gKi99XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuXHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaW5rT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGFpcnNcIiAvPlxyXG4gICAgICAgICAge29wZW4gPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcGFpcnMvcmVjZW50XCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcGFpcnMvcmVjZW50XCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPEZpYmVyTmV3T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZWNlbnRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wYWlyc1wifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhaXJzXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPERldGFpbHNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wYWlycy9nYWluZXJzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcGFpcnMvZ2FpbmVyc1wiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJHYWluZXJzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcGFpcnMvbG9zZXJzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcGFpcnMvbG9zZXJzXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nRG93bk91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTG9zZXJzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAga2V5PVwiL3Rva2Vuc1wiXHJcbiAgICAgICAgICBidXR0b25cclxuICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJ0b2tlbnNcIil9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi90b2tlbnNcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPE1vbmV5T3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVG9rZW5zXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIHsvKjxMaXN0SXRlbVxyXG4gICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICBrZXk9XCIvcG9ydGZvbGlvXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvcG9ydGZvbGlvXCIpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVmYXVsdEFkZHJlc3NcIik7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0QWRkcmVzcykge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJzL1wiICsgZGVmYXVsdEFkZHJlc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNsaWNrT3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxBY2NvdW50VHJlZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT4qL31cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgbWF4V2lkdGg9XCJzbVwiXHJcbiAgICAgICAgb3Blbj17ZGlhbG9nT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlBvcnRmb2xpbzwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgIEVudGVyIGFuIGFkZHJlc3MgYW5kIGNsaWNrIGxvYWQuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICBpZD1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVmYXVsdEFkZHJlc3NcIiwgYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlcnMvXCIgKyBhZGRyZXNzKTtcclxuICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2FkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9