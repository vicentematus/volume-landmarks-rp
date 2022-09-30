export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <h1>Esto es menu creado por layout</h1>
      </header>
      {children}
    </>
  );
}
