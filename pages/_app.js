import '../styles/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';


const progress = new ProgressBar({
  size: 5,
  color: "#4ADE85",
  className: "z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
