'use client';

import 'sakana-widget/lib/index.css';
import './index.scss';
import { useEffect } from 'react';
import SakanaWidget from 'sakana-widget';

const Widget = () => {
  useEffect(() => {
    let inst: SakanaWidget | null = null;

    const mountWidget = () => {
      if (inst) return inst;
      inst = new SakanaWidget({ saveState: true })
        .addStateListener((state) => {
          if (window._changeSakanaState) {
            window._changeSakanaState(state);
          }
        })
        .mount('#sakana-widget');
      window._sakana = inst;
      return inst;
    };
    mountWidget();

    return () => {
      if (inst) {
        inst.unmount();
      }
    };
  }, []);

  return <div id='sakana-widget' />;
};

export default Widget;
