// /**
//  * UtilHelper
//  */
// export const UtilHelper = {
//   /**
//    * debouncing
//    * @param {*} fn
//    * @param {*} delay
//    * @returns
//    */
//   debounce: function (fn: any, delay: number = 300) {
//     let timer: any;
//     return function () {
//       let context = this,
//         args = arguments;

//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, delay);
//     };
//   },
// };

export const UtilHelper = {
  debounce: <T extends (...args: any[]) => any>(fn: T, delay: number = 300) => {
    let timer: any;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  },
};
