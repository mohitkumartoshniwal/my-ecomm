import React from 'react';
import SHOP_DATA from './shop.data';
import CollectonPreview from '../../components/collection-preview/collection-preview.component';



class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}=this.state;

        return(
           <div className="shop-page">{
              
            collections.map(({id, ...otherCollectionProps}) =>(
                   <CollectonPreview key={id} {...otherCollectionProps} />
               ))
        
        }
               
           </div>
        )
    }
    
} 

export default ShopPage;