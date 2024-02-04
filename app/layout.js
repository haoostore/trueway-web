import "normalize.css"
import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from "./components/GoogleAnalytics";
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: '良辰吉市｜精緻企業禮贈品服務',
  description: '良辰吉市致力於提供高品質、獨特且有價值的禮贈品，以滿足個人和企業在各種場合下的禮贈需求。無論是企業贈品、活動獎品、節日禮物還是個人特殊場合的禮贈，我們的目標是為客戶提供無與倫比的禮物選擇和卓越的客戶服務',
  openGraph: {
    title: "良辰吉市｜精緻企業禮贈品服務",
    description: '良辰吉市致力於提供高品質、獨特且有價值的禮贈品，以滿足個人和企業在各種場合下的禮贈需求。無論是企業贈品、活動獎品、節日禮物還是個人特殊場合的禮贈，我們的目標是為客戶提供無與倫比的禮物選擇和卓越的客戶服務',
    images: ['web-image.jpg',],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
