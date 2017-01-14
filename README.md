
# Angular meets Electron</h3>

This project is configured for people who would like to get the basic setup of Angular and Electron working.
I advise you to use VSCode with it. This will give the best development experience for you by allowing to use
native debugging tools for typescript, etc.

<h3>Technologies used</h3>

<ul>
    <li>
        VSCode
    </li>
    <li>
        Electron
    </li>
    <li>
        Angular CLI (beta.24)
    </li>
    <li>
        Typescript for angular & electron projects
    </li>
</ul>

<h3>install vscode</h3>
Download <a href="https://code.visualstudio.com/download">VSCode</a>.

<h3>fork, clone or download this repo</h3>
git clone https://github.com/ubarevicius/angular-meets-electron.git

<h3>install yarn globally, this will speed up your installation process of npm modules</h3>
npm i -g yarn

<h3>install packages via yarn</h3>
yarn install

<h3>run webpack dev server</h3>
yarn start

<h3>run karma tests</h3>
yarn test

<h3>build angular and webpack. This also starts watching for changes on both angular and electron codebases. If one of them changes, refresh will be triggered</h3>
yarn run dev

<h3>preview electron (without angular build)</h3>
yarn run electron

<h3>create electron package for all platforms (build included)</h3>
yarn run package_all
