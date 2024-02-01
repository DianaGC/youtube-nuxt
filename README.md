# spa-nuxt-youtube

## Objetive 
Develop a Nuxt.js website with a design similar to YouTube, allowing users to watch YouTube
videos and requiring user authentication.
## Tecnologies
- Vue 2
- Nuxt 2
- Vuetify 
- npm
- Firebase
- Vuex
- Jest

## How to prepare your environment

1. install dependencies
```bash
$ npm install or npm i
```
2. create an environment file with the following information
>file name: environment.ts

```bash
export const environment: {
    key: string;
    url: string;
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;

} = {
    key: APY_KEY,
    url: URL,
    apiKey: API_KEY_FIREBASE,
    authDomain: AUTH_DOMAIN,
    projectId: PROYECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGIN,
    appId: APP_ID
}
```
> The keys were sent to the email

3. Run the following command to lift locally
```bash
$ npm run dev
```
>Open http://localhost:3000 to view it in your browser.

## To log in use the following username
>Username: testuser@example.com  Password: testpassword123


## Points to improve
- Complete unit tests as learning exercises
- Use mapActions and mapGetters
- Separate the script into another file, you can create a new file and move the content of the <script> block there. Then import that file into your main component to keep your code more organized.
- Add more functionality to complete the page.
- create a folder src


