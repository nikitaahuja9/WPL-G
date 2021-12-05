 import React from 'react';

 import {
   EmailShareButton,
   TwitterShareButton,
   WhatsappShareButton,
   FacebookShareButton
 } from 'react-share';
 
 const SocialShare = props => {
   const { product } = props;
 
   const shareMsg = `I ♥ ${
     product.name
   } product on Store!  Here's the link, ${
     window.location.protocol !== 'https' ? 'http' : 'https'
   }://${window.location.host}/product/${product.slug}`;
 
   return (
     <ul className='d-flex flex-row mx-0 mb-0 justify-content-center justify-content-md-start share-box'>
       <li>
         <a href="#" className='share-btn facebook'>
           <i className='fa fa-facebook'></i>
         </a>
       </li>
       <li>
        <a href="#" className='share-btn twitter'>
           <i className='fa fa-twitter'></i>
         </a>
       </li>
       <li>
         <a href="#" className='share-btn envelope'>
           <i className='fa fa-envelope-o'></i>
         </a>
       </li>
       <li>
         <a href="#" className='share-btn whatsapp'>
           <i className='fa fa-whatsapp'></i>
         </a>
       </li>
     </ul>
   );
 };
 
 export default SocialShare;
 