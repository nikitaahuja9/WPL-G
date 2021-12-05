import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

import RangeSlider from '../../Common/RangeSlider';

const priceMarks = {
  1: { label: <p className='fw-1 text-black'>$1</p> },
  500: { label: <p className='fw-1 text-black'>$500</p> }
};

const ProductFilter = props => {
  const { filterProducts } = props;

  return (
    <div className='product-filter'>
      <Card className='mb-4'>
        <CardHeader tag='h3'>Price</CardHeader>
        <CardBody>
          <div className='mx-2 mb-3'>
            <RangeSlider
              marks={priceMarks}
              defaultValue={[1, 500]}
              onChange={v => {
                filterProducts('price', v);
              }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductFilter;
