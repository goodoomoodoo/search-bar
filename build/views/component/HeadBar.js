'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _action = require('../redux/action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'container': 'container__HeadBar__3pHCJ'
};

var HeadBar = function (_React$Component) {
    _inherits(HeadBar, _React$Component);

    function HeadBar(props) {
        _classCallCheck(this, HeadBar);

        var _this = _possibleConstructorReturn(this, (HeadBar.__proto__ || Object.getPrototypeOf(HeadBar)).call(this, props));

        _this.state = {
            searchTerm: ''
        };

        _this.handleSearchTerm = _this.handleSearchTerm.bind(_this);
        _this.filterSearch = _this.filterSearch.bind(_this);
        _this.clearSearchBar = _this.clearSearchBar.bind(_this);
        _this.dispatchUser = _this.dispatchUser.bind(_this);
        return _this;
    }

    _createClass(HeadBar, [{
        key: 'clearSearchBar',
        value: function clearSearchBar() {
            this.setState({
                searchTerm: ''
            });
        }
    }, {
        key: 'handleSearchTerm',
        value: function handleSearchTerm(e) {
            this.setState({
                searchTerm: e.target.value
            });
        }
    }, {
        key: 'dispatchUser',
        value: function dispatchUser(e) {
            this.props.storeUser(JSON.parse(e.target.id));
            this.clearSearchBar();
        }

        // this algorithm sucks. need revision

    }, {
        key: 'filterSearch',
        value: function filterSearch() {
            var keyword = this.state.searchTerm;
            var currentState = this.props.userData;
            var lastNameList = [{
                name: ''
            }];
            var termsCheck = false;
            var i = 0;

            // iterate through the tree with char of the keyword
            for (; i < keyword.length; i++) {
                var firstChar = keyword.substring(i, i + 1);

                if (!currentState[firstChar]) break;else {
                    lastNameList = currentState[firstChar].list;
                    currentState = currentState[firstChar].nextRoot;
                }
            }

            // final check when the list is narrowed down
            for (var n in lastNameList) {
                termsCheck = termsCheck || lastNameList[n].name.includes(keyword);
            }

            // return names if the keyword matches 
            if (i === 0 || !termsCheck) return [{}];else return lastNameList;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var nameList = this.filterSearch();

            return _react2.default.createElement(
                'div',
                { className: styles.container },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'keyword', placeholder: 'Search...', value: this.state.searchTerm, onChange: this.handleSearchTerm }),
                    _react2.default.createElement(
                        'div',
                        { className: styles.menu },
                        _react2.default.createElement(
                            'ul',
                            null,
                            this.state.searchTerm !== '' && nameList.map(function (user, index) {
                                return user.name ? _react2.default.createElement(
                                    'a',
                                    { id: JSON.stringify(user), onClick: _this2.dispatchUser, key: index },
                                    user.name
                                ) : _react2.default.createElement(
                                    'a',
                                    { key: index },
                                    'No matches'
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return HeadBar;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        userData: state.userData
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        storeUser: function storeUser(user) {
            return dispatch((0, _action.storeUser)(user));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HeadBar);