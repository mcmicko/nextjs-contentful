import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
        <br />
        <Link href="https://github.com/mcmicko/nextjs-contentful">
          <a className="gitHub">GitHub Repository For This Project</a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>

      <style jsx>{`
        .gitHub {
          margin-top: 20px;
          border: 2px solid black;
          padding: 15px;
          transition: 500ms ease;
        }
        .gitHub:hover {
          background: black;
          color: yellow;
        }
      `}</style>
    </div>
  );
}
