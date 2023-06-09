import '@styles/globals.css';
import Footer from '@app/components/Footer'
import MenuBar from '@app/components/MenuBar';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
      <MenuBar />
        {children}
        
      <Footer/>
      </body>
      
    </html>
  )
}
