[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/mapokapo/passwire">
    <img src="images/icon.svg" alt="Passwire Icon" width="80" height="80">
  </a>

  <h3 align="center">Passwire</h3>

  <p align="center">
    A minimal but feature packed password manager, available for mobile, web, and desktop platforms.
    <br />
    <a href="https://github.com/mapokapo/passwire"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mapokapo/passwire">View Demo</a>
    ·
    <a href="https://github.com/mapokapo/passwire/issues">Report Bug</a>
    ·
    <a href="https://github.com/mapokapo/passwire/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#made-with">Made With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#building">Building</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<a href="https://github.com/mapokapo/passwire">
  <img src="images/logo.svg" alt="Passwire Logo">
</a>

This repository contains the server and client code use by by and for Passwire.

You can build each component of Passwire manually using the instructions in <a href="#getting-started">Usage</a>.

The Passwire server is available for self-hosting, and you are encouraged to modify the client apps to include the features you want.

### Made With

**Backend:**

- [NestJS](https://nestjs.com/)
- [Firebase Auth](https://firebase.google.com/)
- [Prisma](https://www.prisma.io/)
- [Swagger](https://swagger.io/)
- [Typescript](https://www.typescriptlang.org/)

**Web app:**

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)

**Mobile app:**

- [Flutter](https://flutter.dev/)

## Getting Started

### Prerequisites

- Install NodeJS
  - (Windows) Download and install from https://nodejs.org/en/download/
  - (UNIX) Install using package manager
  ```sh
  sudo apt install nodejs
  ```
- Install Flutter
  - Follow the instructions at https://docs.flutter.dev/get-started/install
- Setup a Firebase instance and configure Firebase Auth
  - Get started at https://console.firebase.google.com/

### Building

1. Clone the repo
   ```sh
   git clone https://github.com/mapokapo/passwire.git
   cd passwire
   ```
2. Run the build.js script using NodeJS

```sh
node build.js
```

This will build every component of Passwire 3. Change configuration files in the server directory to use your Firebase Auth instance 4. Change configuration files in the client directories to point to the URL where the server is running 5. Run the server

```sh
cd server/
npm run start
```

6. Launch a client app or use the API in any other way you like

## Usage

Connect to the hosted API from the client app or use your favorite HTTP program/library and issue requests for data.

You can view all of the available API routes and documentation through the [Swagger docs](https://passwire.com/api/docs).

## Roadmap

See the [open issues](https://github.com/mapokapo/passwire/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Leo Petrovic - <leopetrovic11@gmail.com>

Project Link: [https://github.com/mapokapo/passwire](https://github.com/mapokapo/passwire)

[contributors-shield]: https://img.shields.io/github/contributors/mapokapo/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/mapokapo/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mapokapo/repo.svg?style=for-the-badge
[forks-url]: https://github.com/mapokapo/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/mapokapo/repo.svg?style=for-the-badge
[stars-url]: https://github.com/mapokapo/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/mapokapo/repo.svg?style=for-the-badge
[issues-url]: https://github.com/mapokapo/repo/issues
[license-shield]: https://img.shields.io/github/license/mapokapo/repo.svg?style=for-the-badge
[license-url]: https://github.com/mapokapo/repo/blob/master/LICENSE.txt
[product-screenshot]: https://github.com/mapokapo/passwire/blob/master/images/screenshot.png
