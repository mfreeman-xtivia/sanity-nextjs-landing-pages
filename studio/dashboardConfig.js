export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62fa5400f5c5fc5bbcc318f0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sz3nkxwq',
                  apiId: '3e00babd-1687-4e44-ad62-941fdcbbe47d'
                },
                {
                  buildHookId: '62fa54006ae1936253f6dcc5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1tf9bafz',
                  apiId: 'dadf5fb7-a577-4a7c-a668-847810735fce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mfreeman-xtivia/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1tf9bafz.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
