export const metadata = {
  title: "FinPilot",
  description: "Finance AI Workspace"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
