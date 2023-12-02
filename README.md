<a name="readme-top"></a>

[![Publish Package](https://github.com/rGustave07/Simple-Dsa/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/rGustave07/Simple-Dsa/actions/workflows/npm-publish.yml)


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rgustave07/simple-dsa">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Simple Data Structures & Algorithms</h3>

  <p align="center">
    Simple, Extendable, Data Structures + Algorithms
    <br />
    <a href="https://github.com/rgustave07/simple-dsa"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/rgustave07/simple-dsa/issues">Report Bug</a>
    ·
    <a href="https://github.com/rgustave07/simple-dsa/issues">Request Feature</a>
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
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)
This project was born out of the need to have very small base line data structures with the intent to extend them in the projects they're imported in, or you could simply just use the baseline structures. Making these data structures very generic to cover a wide range of use is important for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Typescript][Typescript]]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

As with any other npm package, npm install.

### Prerequisites / Installation

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm i @ritterg/simple-dsa
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You will be able to import data structures straight from the package based on category.

   ```js
    import {
        // Lists
        LinkedList,
        SingleLinkedList,
        SinglyLinkedList, 
        DoubleLinkedList,
        DoublyLinkedList,
        // Trees & Heaps
        Graph,
        BinarySearchTree,
        BSTNode,
        HeapDataNode,
        BinaryHeap,
        // Queues
        Queue,
        PriorityQueue,
        // Stack
        Stack,
    } from "@ritterg/simple-dsa";
   ```

Then just instantiate a new DS via the new keyword

    ```js
        const list = new LinkedList();
    ```

... more documentation for DS Signatures coming soon
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Graph
    - [x] Weighted
    - [x] Unweighted
    - [x] Directed
    - [x] Undirected

- [x] Heap

- [ ] Tree
    - [x] Binary Search
    - [ ] Red Black
    - [ ] AVL

- [x] Lists
    - [x] Linked Single
    - [x] Linked Double

- [x] Queue
    - [x] Priority Queue

- [x] Stack

- [ ] Hash Tables

- [ ] Algorithms
    - [ ] Djikstras
    - [ ] Revolving Calculated Window

See the [open issues](https://github.com/rgustave07/simple-dsa/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Feel free to contribute!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/rgustave07/simple-dsa](https://github.com/rgustave07/simple-dsa)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rgustave07/simple-dsa.svg?style=for-the-badge
[contributors-url]: https://github.com/rgustave07/simple-dsa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rgustave07/simple-dsa.svg?style=for-the-badge
[forks-url]: https://github.com/rgustave07/simple-dsa/network/members
[stars-shield]: https://img.shields.io/github/stars/rgustave07/simple-dsa.svg?style=for-the-badge
[stars-url]: https://github.com/rgustave07/simple-dsa/stargazers
[issues-shield]: https://img.shields.io/github/issues/rgustave07/simple-dsa.svg?style=for-the-badge
[issues-url]: https://github.com/rgustave07/simple-dsa/issues
[license-shield]: https://img.shields.io/github/license/rgustave07/simple-dsa.svg?style=for-the-badge
[license-url]: https://github.com/rgustave07/simple-dsa/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rittergustavecodes
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Typescript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 