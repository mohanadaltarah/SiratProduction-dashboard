export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
    },
    navigationMenu: {
      slots: {
        list: "flex flex-col gap-6",
        link: "text-lg",
      },
    },
    dashboardPanel: {
      slots: {
        root: "drop-shadow drop-shadow-neutral-200",
      },
    },
  },
});
