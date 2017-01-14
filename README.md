
# Angular meets Electron

This project is configured for people who would like to get basic setup of Angular and Electron working.
I advise you to use VSCode with it. This will give a best development experience for you by allowing to use
native debugging tools for typescript, etc.

# Technologies used

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

# install vscode
Download <a href="https://code.visualstudio.com/download">VSCode</a>.

# fork, clone or download this repo
git clone https://github.com/ubarevicius/angular-meets-electron.git

# install yarn globally, this will speed up your installation process of npm modules
npm i -g yarn

# install packages via yarn
yarn install

# run webpack dev server
yarn start

# run karma tests
yarn test

# build angular and webpack. This also starts watching for changes on both angular and electron codebases. If one of them changes, refresh will be triggered
yarn run dev

# preview electron (without angular build)
yarn run electron

# create electron package (build included)
npm run package
