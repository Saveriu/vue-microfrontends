# vue-micro-frontend

## POC of integrating a VueJS app as Lib into another

Build app1 and app2 as lib
The UMD files will be automaticly copied into the /public folder of the main app to be serve by the dev server of the main app.
<code><pre>
cd app1
npm run lib
cd ../app2
npm run lib

</pre></code>

Run the main app

<code><pre>
cd ../main
npm run serve

</pre></code>
