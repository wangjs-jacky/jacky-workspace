import { useCallback } from 'react';
import { useState } from 'react';

const useUpdate = () => {
  const [, update] = useState({});
  return useCallback(() => update({}), []);
};

export default useUpdate;
