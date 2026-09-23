import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

export default defineConfig({
  site: 'https://docs.aquapackrobotics.org',
  outDir: './_site',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'AquaPack Robotics',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ncsurobotics/documentation',
        },
      ],
      favicon: '/favicon.ico',
      customCss: ['./src/styles/colors.css'],
      components: {
        Sidebar: './src/components/Sidebar.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        Hero: './src/components/Hero.astro',
      },
      plugins: [
        starlightSidebarTopics(
          ['Software', 'Mechanical', 'Electrical'].map((label) => ({
            label,
            link: `/${label.toLowerCase()}/`,
            items: [{ autogenerate: { directory: label.toLowerCase() } }],
          })),
        ),
      ],
    }),
  ],
});
