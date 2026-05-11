'use client';

import { useEffect, useState } from 'react';

const SakanaBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window._changeSakanaState = (state: string) => {
      setShowBtn(state === 'hide');
    };
    return () => {
      window._changeSakanaState = null;
    };
  }, []);

  const handleClick = () => {
    if (window._sakana?.show) {
      window._sakana.show();
    }
    setShowBtn(false);
  };

  if (!showBtn) {
    return null;
  }
  return (
    <div className='sakanawbtn' onClick={handleClick}>
      显示小组件
    </div>
  );
};

export default SakanaBtn;
