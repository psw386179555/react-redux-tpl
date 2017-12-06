/*
* @Author: Administrator
* @Date:   2017-12-05 10:03:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-06 09:09:48
*/
const { injectBabelPlugin} = require('react-app-rewired');

 module.exports = function override(config, env) {
	config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
	return config;
 };

//  module.exports = function override(config, env) {
//   config.resolve.alias['@'] = resolve('src')    // 往config内注入配置
//   config.resolve.alias['@cp'] = resolve('src/components')
//   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
//   return config;
// };