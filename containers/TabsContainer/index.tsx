import React from 'react';

import { Tabs, Tab, Panel } from '../../components/Tab';

const TabsContainer = () => {
  return (
    <Tabs>
      <div className="tabs">
        <div className="tab-list">
          <Tab>О нас</Tab>

          <Tab>ЧАВО</Tab>

          <Tab>Задать вопрос</Tab>
        </div>
        <Panel>
          Мы посетили 32 страны Европы, Азии, Африки, Ближнего Востока и СНГ, а
          во многих и жили от месяца до года Мы провели в путешествиях 1'000
          дней Мы плавали в Черном море, Средиземном море, Адриатическом море,
          Балеарском море, Балтийском море, Южно-Китайском море, Красном море,
          Андаманском море, Персидском заливе, Сиамском заливе, Индийском
          океане, Мёртвом море, Атлантическом океане
        </Panel>
        <Panel>
          Почему мы путешествуем? <br />
          <br />
          Мы путешествуем, потому что считаем, что жизнь в этом Мире не
          ограничивается проживанием в четырех стенах квартиры, не должна
          проходить в стремлении подняться по карьерной лестнице и не
          заканчивается с рождением детей...
        </Panel>
        <Panel>
          {' '}
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              justifyContent: 'center',
              flex: 1,
            }}
            action=""
          >
            <input
              className="tabs-input"
              style={{ minHeight: '40px' }}
              type="text"
              placeholder="email"
            />
            <textarea
              className="tabs-input"
              style={{ minHeight: '200px', minWidth: '25%' }}
              name=""
              placeholder="Ваше сообщение"
              id=""
            />
            <button type="submit">Отправить</button>
          </form>
        </Panel>
      </div>
    </Tabs>
  );
};

export default TabsContainer;
