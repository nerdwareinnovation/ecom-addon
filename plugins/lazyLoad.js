import { defineNuxtPlugin } from "#app";
import VueLazyload from "vue3-lazyload";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 0,
    throttleWait: 0,
    attempt: 1,
    scale: 0,
    observer: true,

    // Optional
    observerOptions: {
      rootMargin: "0px",
      threshold: 0.1,
    },
    // adapter: {
    //   loaded({ bindType, el }) {
    //     if (el.nodeName === "IMG") {
    //       handler(el);
    //     }
    //   },
    //   loading(listener) {
    //     if (!listener.el.style.paddingTop) {
    //       let padding = 100;
    //       const ratio = listener.el.getAttribute("ratio");
    //       if (ratio) {
    //         padding = ratio;
    //       } else if (
    //         listener.el.getAttribute("width") &&
    //         listener.el.getAttribute("height")
    //       ) {
    //         padding =
    //           (listener.el.getAttribute("height") /
    //             listener.el.getAttribute("width")) *
    //           100;
    //       }
    //       if (listener.el.nodeName === "IMG") {
    //         listener.el.style.paddingTop = padding + "%";
    //         listener.el.style.height = 0;
    //       }
    //     }
    //   },
    // },
  });
});

// function handler(el) {
//   let num = 0;
//   const interval = window.setInterval(() => {
//     if (el.currentSrc || num === 100) {
//       el.removeAttribute("style");
//       if (!el.classList.contains("product-image-hover")) {
//         el.classList.add("fade-in");
//       }
//       window.clearInterval(interval);
//     }
//     num++;
//   }, 300);
// }
