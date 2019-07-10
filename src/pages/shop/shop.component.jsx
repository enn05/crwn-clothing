import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collectios: SHOP_DATA
    }
  }

  render() {
    const {collectios} = this.state;
    return (
      <div className='shop-page'>
        {
          collectios.map(({ id, ...otherColletionProps }) => (
            <CollectionPreview key={id} {...otherColletionProps} />
          ))
        }
      </div>
    )
  }

}

export default ShopPage;