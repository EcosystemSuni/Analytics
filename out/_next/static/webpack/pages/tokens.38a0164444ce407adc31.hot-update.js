webpackHotUpdate_N_E("pages/tokens",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJsaXN0IiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwidG9vbGJhciIsIm1peGlucyIsIkFwcE5hdmlnYXRpb24iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJkaWFsb2dPcGVuIiwic2V0RGlhbG9nT3BlbiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xvc2UiLCJwdXNoIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkJBO0FBdUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLFFBQUksRUFBRSxDQUNKO0FBQ0E7QUFDQTtBQUhJLEtBRmlDO0FBT3ZDQyxVQUFNLEVBQUU7QUFDTkMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURQLEtBUCtCO0FBVXZDO0FBQ0FDLFdBQU8sRUFBRU4sS0FBSyxDQUFDTyxNQUFOLENBQWFEO0FBWGlCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBY2UsU0FBU0UsYUFBVCxHQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxNQUFNRSxLQUFLLEdB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QUFxQixnQkFBckIsRUFBdUNYLE9BQXZDO0FBQ0FSLGtCQUFNLENBQUNZLElBQVAsQ0FBWSxZQUFZSixPQUF4QjtBQUNBRyx1QkFBVztBQUNaLFdBTEg7QUFNRSxlQUFLLEVBQUMsU0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdk5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaVFEOztHQWxSdUJkLGE7VUFDTlYsUyxFQUNGWSxpRSxFQUNDRSxxRDs7O0tBSE9KLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9rZW5zLjM4YTAxNjQ0NDRjZTQwN2FkYzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFjY291bnRUcmVlT3V0bGluZWQsXHJcbiAgQXBwc091dGxpbmVkLFxyXG4gIEJyaWdodG5lc3M0LFxyXG4gIEJyaWdodG5lc3M0T3V0bGluZWQsXHJcbiAgQnJpZ2h0bmVzczcsXHJcbiAgQ2xvc2VPdXRsaW5lZCxcclxuICBEYXNoYm9hcmRPdXRsaW5lZCxcclxuICBEZXRhaWxzT3V0bGluZWQsXHJcbiAgRXhwYW5kTGVzcyxcclxuICBFeHBhbmRNb3JlLFxyXG4gIEZhc3Rmb29kT3V0bGluZWQsXHJcbiAgRmliZXJOZXdPdXRsaW5lZCxcclxuICBIaXN0b3J5T3V0bGluZWQsXHJcbiAgTGlua091dGxpbmVkLFxyXG4gIExpc3RBbHRPdXRsaW5lZCxcclxuICBNZW51LFxyXG4gIE1vbmV5T3V0bGluZWQsXHJcbiAgUmFkaW9CdXR0b25VbmNoZWNrZWRPdXRsaW5lZCxcclxuICBSZW9yZGVyT3V0bGluZWQsXHJcbiAgU2V0dGluZ3NFdGhlcm5ldE91dGxpbmVkLFxyXG4gIFN0YXJCb3JkZXIsXHJcbiAgVHJlbmRpbmdEb3duT3V0bGluZWQsXHJcbiAgVHJlbmRpbmdVcE91dGxpbmVkLFxyXG4gIFZpZXdTdHJlYW1PdXRsaW5lZCxcclxuICBXYXZlc091dGxpbmVkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbGxhcHNlLFxyXG4gIERpYWxvZyxcclxuICBEaWFsb2dBY3Rpb25zLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgRGlhbG9nVGl0bGUsXHJcbiAgRGl2aWRlcixcclxuICBIaWRkZW4sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBUZXh0RmllbGQsXHJcbiAgVG9vbGJhcixcclxuICBUb29sdGlwLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IFN1c2hpIGZyb20gXCIuL1N1c2hpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBsaXN0OiB7XHJcbiAgICAvLyBcIiYgPiAqXCI6IHtcclxuICAgIC8vICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgbmVzdGVkOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGlhbG9nT3Blbiwgc2V0RGlhbG9nT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREaWFsb2dPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3Nlcz17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHB5PXswLjV9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPXtmYWxzZX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICAgICAgICA8U3VzaGkgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICBTVU5JIEFuYWx5dGljc1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgLy8gYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcclxuICAgICAgICAvLyBzdWJoZWFkZXI9e1xyXG4gICAgICAgIC8vICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCIgaWQ9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIj5cclxuICAgICAgICAvLyAgICAgT3ZlcnZpZXdcclxuICAgICAgICAvLyAgIDwvTGlzdFN1YmhlYWRlcj5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIGtleT1cIi9cIlxyXG4gICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8RGFzaGJvYXJkT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG5cclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIGtleT1cIi9iYXJcIlxyXG4gICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9iYXJcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2JhclwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8RmFzdGZvb2RPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJCYXJcIiAvPlxyXG4gICAgICAgICAgey8qIHtvcGVuID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn0gKi99XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgey8qIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT1cIi9iYXJcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2JhclwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2JhclwiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxWaWV3U3RyZWFtT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdmVydmlld1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxIaXN0b3J5T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXN0IFNlcnZpbmdzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPiAqL31cclxuXHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxXYXZlc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBvb2xzXCIgLz5cclxuICAgICAgICAgIHtvcGVuID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Bvb2xzL3JlY2VudFwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Bvb2xzL3JlY2VudFwiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxGaWJlck5ld091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVjZW50XCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9vbHNcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wb29sc1wiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBbGxcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG5cclxuICAgICAgICAgICAgey8qIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Bvb2xzL2dhaW5lcnNcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wb29scy9nYWluZXJzXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nVXBPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdhaW5lcnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wb29scy9sb3NlcnNcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wb29scy9sb3NlcnNcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8VHJlbmRpbmdEb3duT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb3NlcnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPiAqL31cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpbmtPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYWlyc1wiIC8+XHJcbiAgICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wYWlycy9yZWNlbnRcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wYWlycy9yZWNlbnRcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8RmliZXJOZXdPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJlY2VudFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BhaXJzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcGFpcnNcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWxsXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BhaXJzL2dhaW5lcnNcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wYWlycy9nYWluZXJzXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nVXBPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdhaW5lcnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wYWlycy9sb3NlcnNcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wYWlycy9sb3NlcnNcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8VHJlbmRpbmdEb3duT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb3NlcnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvdG9rZW5zXCJcclxuICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcInRva2Vuc1wiKX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Rva2Vuc1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TW9uZXlPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUb2tlbnNcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgey8qPExpc3RJdGVtXHJcbiAgICAgICAgICBidXR0b25cclxuICAgICAgICAgIGtleT1cIi9wb3J0Zm9saW9cIlxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9wb3J0Zm9saW9cIil9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBZGRyZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZWZhdWx0QWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRBZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlcnMvXCIgKyBkZWZhdWx0QWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tPcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPEFjY291bnRUcmVlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUG9ydGZvbGlvXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPiovfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaWFsb2dcclxuICAgICAgICBtYXhXaWR0aD1cInNtXCJcclxuICAgICAgICBvcGVuPXtkaWFsb2dPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+UG9ydGZvbGlvPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgRW50ZXIgYW4gYWRkcmVzcyBhbmQgY2xpY2sgbG9hZC5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZhdWx0QWRkcmVzc1wiLCBhZGRyZXNzKTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi91c2Vycy9cIiArIGFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvYWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=