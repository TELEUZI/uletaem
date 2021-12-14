// import { CMS_URL, CMS_NAME } from '../lib/constants';

export default function Intro() {
  return (
    <section className="intro flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4> */}
      <div className="intro__background">
        <h2 className="intro__heading title">
          Куда <span className="fly">улетаем</span> на этот раз?
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div><script charset="utf-8" src="//www.travelpayouts.com/widgets/b214fdcc3b51649076e3183a7703edea.js?v=2183" async></script></div>',
          }}
        />
      </div>
    </section>
  );
}
