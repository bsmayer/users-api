<h2><b>Users API</b></h2>

A simple Rest API containing:

<ul>
    <li>Node JS + Express</li>
    <li>Typescript</li>
    <li>Dependency Injection</li>
    <li>MongoDB integration (with mongoose)</li>
    <li>Module organization</li>
    <li>Docker + PM2</li>
    <li>Docker Compose for local running</li>
    <li>Unit Tests using Jest + TypeMoq</li>
</ul>

<h3><b>How to run</b></h3>

Just execute the file "run_dev.sh". <br />
<b>Note:</b> you should have Docker installed and running.

<h3><b>How to test</b></h3>

Just import one of its test schemas to your favorite rest app. <br />
Currently, there are Postman and Insomnia :heart: support. 

<h3><b>Running unit tests</b></h3>

Please, note that not all the unit tests were implemented, since it's a demonstration of how to deal with unit tests + typescript. <br />
To run unit tests, execute the following command: <br />

````
npm test
````

If you want to run the test coverage, this is how we can do it: <br />

````
npm run testcoverage
````

