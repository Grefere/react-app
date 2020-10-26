/// <reference types="react-scripts" />

declare module '*.graphql' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string; };
    export default content;
}

declare module '*.css' {
    const content: { [className: string]: string; };
    export default content;
}
