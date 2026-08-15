import "./globals.css";

export const metadata = {
  title: "Pooja Nemade — Data & ML Engineer",
  description:
    "Data Engineer & ML Engineer turning messy pipelines into decisions that hold up under pressure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
