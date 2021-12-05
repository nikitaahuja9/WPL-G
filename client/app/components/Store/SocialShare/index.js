 import React from 'react';

 const SocialShare = props => {
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
 