import React from 'react';
import { Link } from 'react-router-dom';

const NewestProduct = () => {
  return (
    <div className='my-12 px-4 lg:px-24 flex justify-between items-center'>
      <h2 className='text-5xl font-bold mb-10 leading-snug'>Newest Product</h2>
      <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
        <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          {/* Update the image source */}
          <img src="/images/gala-apple-1_1.png" alt="Green Apple" style={{ width: 246, height: 246 }} />
        </div>
        <div style={{ paddingTop: 12, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, left: 0, top: 248, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
          {/* Update the text content */}
          <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            <div style={{ width: 216, color: '#4D4D4D', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word' }}>Green Apple</div>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
              <div style={{ color: '#1A1A1A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>$14.99</div>
            </div>
          </div>
          {/* Add code for stars and "Add to Cart" button */}
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* Add stars code here */}
          </div>
          <button style={{ marginTop: '10px' }}>Add to Cart</button>
        </div>
        <div style={{ width: 40, height: 40, left: 192, top: 274, position: 'absolute' }}>
          <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', borderRadius: 9999 }} />
          <div style={{ width: 20, height: 20, left: 10, top: 10, position: 'absolute' }}>
            <div style={{ width: 15, height: 15, left: 2.50, top: 2.50, position: 'absolute', border: '1.30px #1A1A1A solid' }}></div>
          </div>
        </div>
      </div>
      <Link to="/shop" className='text-green-700'>
        <button
          style={{
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: '#34D399',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          className='font-semibold rounded hover:bg-green-700 hover:text-white transition-all duration-300 ml-auto'
        >
          View all...
        </button>
      </Link>
    </div>
  );
}

export default NewestProduct;
