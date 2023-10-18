import styles from "./MyComponent.module.css";
//The CSS styling inside a module is available only to the component that imports the said module, therefore there is no risk for global naming conflicts

function MyComponent(){
    return(
        <>

            //////////////////////////////
            THIS IS WHERE HTML STUFF WILL GO
            //////////////////////////////

        </>
    );
}

export default MyComponent;