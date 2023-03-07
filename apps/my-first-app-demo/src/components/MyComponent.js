import styles from "./MyComponent.module.css";
//The CSS styling inside a module is available only to the component that imports the said module, therefore there is no risk for global naming conflicts

function MyComponent(){
    return(
        <>
            <h1 className={styles.heading}>Component Heading</h1>
            <p className={styles.bodyText}>This is a random paragraph. As you can see, the JSX looks similar to HTML. This makes layouting elements easier and more intuitive. Hope you enjoy your react journey!</p>
        </>
    );
}

export default MyComponent;