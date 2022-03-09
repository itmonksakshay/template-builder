import { useEditor } from '@craftjs/core';
import cx from 'classnames';
import React, { useEffect } from 'react';

import Header from './header';
import Sidebar from './sidebar';
// import { Toolbox } from './Toolbox';

const Viewport = ({ children }) => {
    const {enabled,connectors,actions: { setOptions },} = useEditor((state) => ({
                            enabled: state.options.enabled,
    }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
        <div className={cx(['h-screen overflow-hidden w-full relative'])}>
            <div className='w-full'>
                <Header style={{ height: '64px',background: '#FFFFFF',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)' }} />
            </div>
        <div className='w-full h-full flex flex-row'>
            <div className="flex flex-row basis-5/6 h-full">
            <div
                className={cx([
                'craftjs-renderer flex-1 h-full w-full transition overflow-auto',
                {
                    'bg-renderer-gray': enabled,
                },
                ])}
                ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
                >
                    <div className="relative h-full flex-col flex items-center">
                    {children}
                    </div>
                </div> 
            </div>
            <div className='basis-1/6'>
            <Sidebar />
            </div>
        
    </div>

      </div>
    </div>
  );
};

export default Viewport;
