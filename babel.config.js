
// babel.config.js
/* module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
plugins: [
  "nativewind/babel",
  'react-native-reanimated/plugin',
'@babel/plugin-transform-private-methods' 
],
}; */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["nativewind/babel", { loose: true }],
    ["@babel/plugin-transform-private-methods", { loose: true }],
    ["@babel/plugin-transform-class-properties", { loose: true }],
    ["@babel/plugin-transform-private-property-in-object", { loose: true }],
    'react-native-reanimated/plugin'
  ],
};

// todo 
//?gkkkk
/*
JYKLŞOŞÇHBF
?yfufyukyu
!UJCGYKUKU

*/



