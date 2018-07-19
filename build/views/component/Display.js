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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'grid_padding': 'grid_padding__Display__1Iask',
    'close': 'close__Display__PRTRt',
    'title': 'title__Display__YV17F',
    'container': 'container__Display__12SNb',
    'caption': 'caption__Display__2Vswa',
    'content': 'content__Display__3hqqw',
    'grid_container': 'grid_container__Display__2NYHT',
    'grid_header': 'grid_header__Display__6f97O',
    'grid_street': 'grid_street__Display__22iiI',
    'grid_suite': 'grid_suite__Display__ET16N',
    'grid_city': 'grid_city__Display__Yc5Gp',
    'grid_zipcode': 'grid_zipcode__Display__1NhWo',
    'grid_contact': 'grid_contact__Display__3nCBp',
    'menu': 'menu__Display__1cXwl',
    'user_item': 'user_item__Display__4zMXg',
    'slogan': 'slogan__Display__3g3ae'
};

var Display = function (_React$Component) {
    _inherits(Display, _React$Component);

    function Display(props) {
        _classCallCheck(this, Display);

        var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

        _this.dispatchUser = _this.dispatchUser.bind(_this);
        _this.clearUser = _this.clearUser.bind(_this);
        return _this;
    }

    _createClass(Display, [{
        key: 'dispatchUser',
        value: function dispatchUser(e) {
            this.props.storeUser(JSON.parse(e.target.id));
        }
    }, {
        key: 'clearUser',
        value: function clearUser() {
            this.props.storeUser({});
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.currentUser;
            var userArray = createList(this.props.userData);
            return _react2.default.createElement(
                'div',
                { className: styles.container },
                user.name && userGrid(user, this.clearUser) || userList(userArray, this.dispatchUser)
            );
        }
    }]);

    return Display;
}(_react2.default.Component);

var userGrid = function userGrid(user, callback) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: styles.close, onClick: callback },
            '\u2715'
        ),
        _react2.default.createElement(
            'h1',
            { className: styles.title },
            user.name
        ),
        _react2.default.createElement(
            'span',
            null,
            '@' + user.username
        ),
        _react2.default.createElement(
            'div',
            { className: styles.grid_container },
            _react2.default.createElement(
                'div',
                { className: styles.grid_header },
                'Address'
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_street },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Street'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.address.street
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_suite },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Suite'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.address.suite
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_city },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'City'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.address.city
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_zipcode },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Zip Code'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.address.zipcode
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_header },
                'Contact'
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_contact },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Phone'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.phone
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_contact },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Email'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.email
                )
            ),
            _react2.default.createElement(
                'div',
                { className: styles.grid_contact },
                _react2.default.createElement(
                    'strong',
                    { className: styles.caption },
                    'Website'
                ),
                _react2.default.createElement(
                    'div',
                    { className: styles.content },
                    user.website
                )
            )
        )
    );
};

var userList = function userList(list, callback) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: styles.slogan },
            _react2.default.createElement(
                'h1',
                null,
                'A Search Bar for fake data...'
            )
        ),
        _react2.default.createElement(
            'ul',
            { className: styles.menu },
            _react2.default.createElement(
                'h2',
                null,
                'All fake users'
            ),
            list.map(function (user, index) {
                return _react2.default.createElement(
                    'li',
                    { id: JSON.stringify(user), onClick: callback,
                        className: styles.user_item, key: index },
                    _react2.default.createElement(
                        'h3',
                        { id: JSON.stringify(user) },
                        user.name
                    ),
                    _react2.default.createElement(
                        'h5',
                        { id: JSON.stringify(user) },
                        '@' + user.username
                    )
                );
            })
        )
    );
};

// create a user list
var createList = function createList(tree) {
    var result = [];

    for (var key in tree) {
        result.push.apply(result, _toConsumableArray(tree[key].list));
    }

    return result;
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        userData: state.userData,
        currentUser: state.currentUser
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        storeUser: function storeUser(user) {
            return dispatch((0, _action.storeUser)(user));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Display);