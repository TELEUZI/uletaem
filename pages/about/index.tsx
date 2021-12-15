import Head from 'next/head';
import TabsContainer from '../../containers/TabsContainer';

const About = () => (
  <div className="about-page">
    <Head>
      <title>Uletaem | О нас</title>
    </Head>
    <h2 className="title">О нас</h2>
    <TabsContainer />
  </div>
);
export default About;
