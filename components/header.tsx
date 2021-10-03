import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1 className="sr-only">Улетаем</h1>
      <div className="logo-wrapper">
        <div className="logo" />
        <h2 className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 website-name">
          <Link href="/">
            <a className="hover:underline">Uletaem</a>
          </Link>
        </h2>
      </div>
    </header>
  );
}
