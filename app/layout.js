import "./globals.css";

export const metadata = {
  title: "El Tomate Mecánico | Escuela de Fútbol Formativo",
  description: "Formación de fútbol de alto rendimiento para jóvenes en Santiago.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
