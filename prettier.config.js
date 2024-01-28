/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react$|^react-dom/(.*)$|^react/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/components/ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
};

export default config;
