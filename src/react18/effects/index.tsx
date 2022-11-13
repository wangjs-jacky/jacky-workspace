import React, { useState } from 'react';

const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  return { isLoading };
};

function Effects() {
  const { isLoading } = useLoadingState();
  return isLoading ? <h1>组件已被加载</h1> : <div>Loading....</div>;
}

export default Effects;
