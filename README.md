<!-- Replace these using search repo_name, project_title, short_description, project_description, view_demo_link -->
<!-- Prepend a hash # to filter active ones -->
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />

<div align="center">
  <a href="https://www.flaticon.com/free-icons/think" title="think icons">
    <img src="github_assets/logo.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Random Task Today</h3>

  <p align="center">
    Bored? Generate a random task to do today and see a refreshing photo.
    <br />

  [**Explore the docs »**](https://github.com/webdevsk/Random-task-today)

  [View Demo](https://splendid-narwhal-4770fd.netlify.app/)
  · [Report Bug](https://github.com/webdevsk/Random-task-today/issues)
  · [Request Feature](https://github.com/webdevsk/Random-task-today/issues)
  </p>
</div>

---
<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>
<br />

- [About The Project](#about-the-project)
    - [What users can expect from this App](#what-users-can-expect-from-this-app)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

</details>
<br/>

<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">

[![Product snapshot](github_assets/snapshot.webp)](https://splendid-narwhal-4770fd.netlify.app/)

</div>
<br/>

- This is a simple app that gives you a random task and a related photo.
- They are fetched from **[Bored API](https://www.boredapi.com/)** and **[Unsplash API](https://unsplash.com/developers)** respectively.
- This app demonstrates how efficiently I made Axios(Fetch) calls to two different APIs sequentially.
- It also demonstrates how I managed preloading, loading and status states based on async functions.
- Wrote custom functions so that you will see the photo only when it is downloaded completely.
- Was looking for a way to hide API keys. Had two options. So I obviously chose the harder and more interesting one. 😉
- Integrated **[Netlify Serverless Functions](https://www.netlify.com/products/functions/)** (Which is based on [Amazon AWS Lambda](https://aws.amazon.com/lambda/)) to perform backend tasks.
- All API calls are made from the backend functions, keeping API credentials secret.

#### What users can expect from this App

- A productive task to do today.
- A nice refreshing photo in the background.
- A carefully designed UI so that the text is distinguishable regardless of the photo behind.
- You can just click on the text and write whatever you want.
- Photos recieved from Unsplash are not always accurate. But what can you expect without integrating Ai 😅

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React]][React-url]  
[![TailwindCSS][TailwindCSS]][Tailwind-url]  
[![Netlify][Netlify]][Netlify-url]  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

🌐 The site is already live at: [https://splendid-narwhal-4770fd.netlify.app/](https://splendid-narwhal-4770fd.netlify.app/)

OR

🖥️ You can test it on your local machine by following the steps below.

### Prerequisites

1. **Install** [NODE.JS](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads)
1. Open your projects base folder and launch any **terminal** of your choice.
1. Run this command:

   ```sh
   npm install npm@latest -g
   npm install netlify-cli -g
   ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo

    ```sh
    git clone https://github.com/webdevsk/Random-task-today.git
    ```

1. Install NPM packages

    ```sh
    npm install
    ```
  
1. Fill in a `.env.local` file following the patterns of `envSample.txt`

1. Run Dev server along with serverless functions

    ```sh
    netlify dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- ## Features



<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/webdevsk/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the Branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

[![Follow on GitHub][GitHub]](https://github.com/webdevsk)
[![Follow on Linkedin][Linkedin]][Linkedin-url]

Project Link: [https://github.com/webdevsk/Random-task-today](https://github.com/webdevsk/Random-task-today)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>

<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Linkedin-url]: https://linkedin.com/in/webdevsk
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Linkedin]: https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white
[contributors-shield]: https://img.shields.io/github/contributors/webdevsk/Random-task-today.svg?style=for-the-badge
[contributors-url]: https://github.com/webdevsk/Random-task-today/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/webdevsk/Random-task-today.svg?style=for-the-badge
[forks-url]: https://github.com/webdevsk/Random-task-today/network/members
[stars-shield]: https://img.shields.io/github/stars/webdevsk/Random-task-today.svg?style=for-the-badge
[stars-url]: https://github.com/webdevsk/Random-task-today/stargazers
[issues-shield]: https://img.shields.io/github/issues/webdevsk/Random-task-today.svg?style=for-the-badge
[issues-url]: https://github.com/webdevsk/Random-task-today/issues
[license-shield]: https://img.shields.io/github/license/webdevsk/Random-task-today.svg?style=for-the-badge
[license-url]: https://github.com/webdevsk/Random-task-today/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Next-url]: https://nextjs.org/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Bootstrap]: https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://react-bootstrap.netlify.app/
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[Chakra]: https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-url]: https://chakra-ui.com/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[Styled Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-url]: https://www.styled-components.com/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/
[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Three-js]: https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white
[Three-js-url]: https://threejs.org/
[GSAP]: https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[GSAP-url]: https://greensock.com/gsap/
[Netlify]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Netlify-url]: https://www.netlify.com/