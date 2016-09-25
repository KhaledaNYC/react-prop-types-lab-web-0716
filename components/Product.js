const React = require('react')

class Product extends React.Component {
  render () {
    return (<div></div>)
  }
}
Product.defaultProps = {
  hasWatermark: false
}
Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight:(props, propName, componentName) => {
    debugger;
      if (props[propName] === undefined ) {
        return new Error('WEight must be defined');
      }
      if (isNaN(props[propName])) {
        return new Error('Weight must be a number');
      }
      if (!(props[propName] > 80 && props[propName] < 300)) {
        return new Error('Weight must be betwen 80-300');
      }
    }
  }


module.exports = Product
