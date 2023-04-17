import Head from 'next/head'
import Script from 'next/script';

export default function Home() {

const renderButton = () => {
  paypal.use( ['login'], function (login) {
    login.render ({
        "appid":"AbnRQAaC4VtPyh4syUy6z2Yc4_JCvQblTutnWU5TRx1YM7CavFW-zxM-sAUNsm_YgLQkbjODY87q2fPt",
        "scopes":"openid",
        "containerid":"paypal-connect",
        "responseType":"code id_Token",
        "locale":"en-us",
        "buttonType":"CWP",
        "buttonShape":"pill",
        "buttonSize":"lg",
        "fullPage":"false",
        "returnurl":"http://127.0.0.1:3000/"
    });
  });
}

  return (
    <>
      <Head>
        <title>Paypal Integration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script 
        src="https://www.paypalobjects.com/js/external/api.js"
        onReady={() => {
          renderButton()
        }}
      />
      <main>
        <div>
        <span id='paypal-connect'/>
        </div>
      </main>
    </>
  )
}
