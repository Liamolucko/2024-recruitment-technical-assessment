import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html className="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>frontend</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="m-0 flex h-full">
        <Navbar />
        <Component />
      </body>
    </html>
  );
}
