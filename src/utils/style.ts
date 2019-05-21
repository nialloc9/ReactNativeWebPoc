/**
 * @description merges styles objects together if array
 */
export const mergeStyle =
 (styles : any | any[]) => 
    !Array.isArray(styles) ? styles :  styles.reduce((total, curr) => ({ ...total, ...curr }), {});

/**
 * @description turns px into rem
 */
export const remCalc = (pixels:any) :string => `${(pixels / 10).toFixed(4)}rem`