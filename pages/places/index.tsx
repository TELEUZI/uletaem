import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

export default function Places(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Uletaem | Места</title>
      </Head>
      <div className="places-page">
        <section className="map">
          <h2 className="title">
            <span className="title__colored">Весь мир</span> в кармане!
          </h2>
          <div className="container">
            <p className="advantages__description">
              Выбирайте по городам и странам для быстрого и точного поиска
            </p>
            <div className="video">
              <Image layout="fill" alt="map" src="/images/Frame 10.svg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
