import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Tabs, Tab, Panel } from '../../components/Tab';

const A = () => (
  <script
    charSet="utf-8"
    src="//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183"
    async
  />
);
const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const TabsContainer = () => {
  // const script = useScript(
  //   '//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183',
  //   ref,
  // );
  return (
    <Tabs>
      <div className="tabs">
        <div className="tab-list">
          <Tab>Tab 1</Tab>

          <Tab>Tab 2</Tab>

          <Tab>Tab 3</Tab>
        </div>

        {/* <div className="tab-progress" />
        {tabs.map(tab => (
          <Panel>{tab}</Panel>
        ))} */}
        <Panel>
          <div>
            <Helmet>
              <script
                src="//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183"
                type="text/javascript"
                async
              />
            </Helmet>
          </div>
        </Panel>
        <Panel>
          <div>
            <Helmet>
              <script
                src="//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183"
                type="text/javascript"
                async
              />
            </Helmet>
          </div>
        </Panel>
        <Panel>
          <iframe title="if">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  '<div><script charset="utf-8" src="//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183" async></script></div>',
              }}
            />
          </iframe>
        </Panel>
      </div>
    </Tabs>
  );
};

export default TabsContainer;
