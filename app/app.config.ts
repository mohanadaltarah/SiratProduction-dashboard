export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
    },
    navigationMenu: {
      slots: {
        list: "flex justify-center gap-6",
        link: "text-lg",
      },
    },
  },
});
