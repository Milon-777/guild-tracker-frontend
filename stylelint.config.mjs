/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],
    rules: {
        'no-empty-source': null,
        'order/properties-alphabetical-order': true,
        'scss/dollar-variable-pattern': '^[_a-z]+[a-zA-Z0-9-]*$',
        'scss/at-mixin-pattern': '^[_a-z]+[a-zA-Z0-9-]*$',
        'selector-class-pattern': null,
    },
};
