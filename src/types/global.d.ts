declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 申明 对象
declare type EmptyObjectType<T = any> = {
  [key: string]: T;
};

// 申明 数组
declare type EmptyArrayType<T = any> = T[];

declare type ValueOf<T> = T[keyof T] extends string|number|boolean|Record<any, any>|Array<any> ? T[keyof T] : never
