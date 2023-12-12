# Chart.js Example

[Chart.js Homepage](https://www.chartjs.org/)

## Download instructions
1. Download the script file for local consumtion. Or you could just include it from the CDN as they describe, your choice.
  
    Either:
    
    -
      ```shell
      wget https://cdn.jsdelivr.net/npm/chart.js
      ```

    Or:

    -
      ```html
      <script defer src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      ```

2. Download the type declaration for IntelliSense support
    ```shell
    wget https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/chart.js/index.d.ts
    ```

3. Tell IntelliSense that you want to include the type definitions for the library, mind giving it the correct path to the *.d.ts file
    `main.js`
    ```js
    /// <reference path="./index.d.ts" />
    ```

4. Link the *.js file up in your HTML file
    ```html
    <script defer type="module" src="chart.js"></script>
    ```

5. Create a Canvas Element that Chart.js will use
    ```html
    <canvas id="my-chart"></canvas>
    ```

5. Hook it up inside your JavaScript. The way we are doing things here, makes everything from the chart.js library available in the global namespace.
    ```js
    // The Chart constructor takes the canvas element as the first argument
    // and a complex set of options and data as the second argument. Read the docs!
    new chartjs.Chart(
      document.getElementById("my-chart"),

    )
    ```