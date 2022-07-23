import React from 'react';

export const Icon = ({ icon, ...props }) => {
  return (
   <div {...props}>
     {icon}
   </div>
  );
};

export default Icon;