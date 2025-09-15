# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# FAQ - 

1) Why we need Error Boundary in ReactJs?

 Ans - Error Boundary is a component that catches errors in any of its child components and displays a fallback UI instead of the component tree that crashed.


2) Why we need componentDidCatch hook in Error Boundary?

 Ans - componentDidCatch is a lifecycle method that is called when an error occurs in a child component. It allows you to handle the error and display a fallback UI.


3) It only work when?-

Ans - It only work when Crash happen during rendering, inside useEffect, inside Custom hook.

4) When it will not work?

Ans - 
     Inside Event handler 
     Inside setTimeout
     Inside async code 

so if it will not work in above case then we need to use Custom hook to trigger Error boundary.


5) Do i have always create Error Boundary in my component?

Ans - First of all Error Boundary only work with class component so we can use it otherwise we can use liberary for handle Error Boundary in ReactJs called [react-error-boundary].
Behind the scene liberary also use the same class component way to handle error.

6) Do i have to wrap every component with Error Boundary?

Ans - No, we can use Error Boundary in Section of code where we want to handle error.
      Like we have navbar,sidebar,footer and dashboard component so we can wrap them with Error Boundary.If any one of section crash then it will show fallback UI not whole page.





