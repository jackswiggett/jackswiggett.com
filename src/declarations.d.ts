declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export = content;
}

declare module 'mailtoui/dist/mailtoui-min.js';
