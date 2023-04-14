module.exports = {
  plugins: [require("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
  pluginSearchDirs: false,
  printWidth: 800,
  semi: true,
  // The override is for pnpm support https://github.com/withastro/prettier-plugin-astro#pnpm-support-1
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
