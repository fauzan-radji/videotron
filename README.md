<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/fauzan-radji/videotron">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Videotron</h3>

  <p align="center">
    Electron based video player with a simple and clean interface.
    <br />
    <a href="https://github.com/fauzan-radji/videotron/releases"><strong>Download »</strong></a>
    <br />
    <a href="https://github.com/fauzan-radji/videotron/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/fauzan-radji/videotron/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#platform-support">Platform Support</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#build-on-your-own">Build On Your Own</a></li>
    <li><a href="#publishing">Publishing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Videotron is a simple video player built with Electron.js. It has a clean and simple interface that is easy to use. It is a great alternative to the default video player on your computer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![HTML][html]
- ![CSS][css]
- ![JavaScript][javascript]
- [![Electron.js][Electronjs.org]][Electron-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Platform Support

- :x: Windows
- :x: MacOS
- :heavy_check_mark: Linux

By this time, Videotron only supports Linux. Support for other platforms will be added in the future. But if you want to build it on your own, you can follow the steps in the [Build On Your Own](#build-on-your-own) section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

1. Download the latest release from the [releases page](https://github.com/fauzan-radji/videotron/releases)
2. Extract the zip file
3. Run the executable file
4. Enjoy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Build On Your Own

To build the application on your own, follow these steps:

1. Clone the repo

   ```sh
   # HTTPS
   git clone https://github.com/fauzan-radji/videotron.git

   # SSH
   git clone git@github.com:fauzan-radji/videotron.git
   ```

2. Install NPM packages

   ```sh
    npm install
   ```

3. Build the project

   ```sh
   npm run make
   ```

4. The executable file will be in the `out/make/` folder.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Publishing

1. To publish the application you need to [generate a GitHub token][generate-github-token] and give it the `public_repo` scope.

2. Copy the `.env.example` file to `.env` and fill in the `GITHUB_TOKEN` field with the token you just generated.

   ```sh
   cp .env.example .env
   ```

3. Run the following command to publish the application.

   ```sh
   npm run publish
   ```

   This will create a draft release on GitHub.

4. To release the application to the public, you can go to the releases page on GitHub and edit the draft release. Change the draft to a release and publish it. The release will be available for download on the releases page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

LinkedIn - [Tri Putra Fauzan H. Radji][linkedin-url]

Project Link: [https://github.com/fauzan-radji/videotron](https://github.com/fauzan-radji/videotron)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/fauzan-radji/videotron.svg?style=for-the-badge
[contributors-url]: https://github.com/fauzan-radji/videotron/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fauzan-radji/videotron.svg?style=for-the-badge
[forks-url]: https://github.com/fauzan-radji/videotron/network/members
[stars-shield]: https://img.shields.io/github/stars/fauzan-radji/videotron.svg?style=for-the-badge
[stars-url]: https://github.com/fauzan-radji/videotron/stargazers
[issues-shield]: https://img.shields.io/github/issues/fauzan-radji/videotron.svg?style=for-the-badge
[issues-url]: https://github.com/fauzan-radji/videotron/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tri-putra-fauzan-h-radji-404810257/
[product-screenshot]: images/screenshot.png
[generate-github-token]: https://github.com/settings/tokens/new
[css]: https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Electronjs.org]: https://img.shields.io/badge/Electron-9FEAF9?style=for-the-badge&logo=electron&logoColor=black
[Electron-url]: https://www.electronjs.org
