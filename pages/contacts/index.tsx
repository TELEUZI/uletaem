import Head from 'next/head';
import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import styles from './contacts-page.module.css';

const Contacts = () => {
  return (
    <section className="contacts-page" id="contact">
      <Head>
        <title>Uletaem | Контакты</title>
      </Head>
      <h2 className={`${styles['section-header']} title`}>Контакты</h2>
      <div className={styles['contact-wrapper']}>
        <form id="contact-form" className={styles['form-horizontal']}>
          <div className={styles['form-group']}>
            <div className={styles['col-sm-12']}>
              <input
                type="text"
                className={styles['form-control']}
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className={styles['form-group']}>
            <div className={styles['col-sm-12']}>
              <input
                type="email"
                className={styles['form-control']}
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            className={styles['form-control'].concat(` ${styles.textarea}`)}
            rows={10}
            placeholder="MESSAGE"
            name="message"
            required
          />

          <button
            className={styles['send-button']}
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className={styles['alt-send-button']}>
              <FaRegPaperPlane className={styles.plane} />
              <span className={styles['send-text']}>SEND</span>
            </div>
          </button>
        </form>

        <div className={styles['direct-contact-container']}>
          <ul className={styles['contact-list']}>
            <li className={styles['list-item']}>
              <i className={styles['fa fa-map-marker fa-2x']}>
                <span className="contact-text place">
                  Минск, Республика Беларусь
                </span>
              </i>
            </li>

            {/* <li className={styles['list-item']}>
              <i className={styles['fa fa-phone fa-2x']}>
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    375(25) 555-2368
                  </a>
                </span>
              </i>
            </li> */}

            <li className={styles['list-item']}>
              <i className={styles['fa fa-envelope fa-2x']}>
                <span className="contact-text gmail">
                  <a href="mailto:uletaemm@gmail.com" title="Send me an email">
                    uletaemm@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr className={styles.separator} />

          {/* <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
