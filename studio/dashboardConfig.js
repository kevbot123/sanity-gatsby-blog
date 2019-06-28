export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d16a03167f9243dc60b1722',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vb9tsdqu',
                  apiId: 'a9efb838-2997-4bba-8707-294e586444c3'
                },
                {
                  buildHookId: '5d16a031c8f515acf64d466b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mcze6riu',
                  apiId: '6ae172b7-3d31-45cd-a58f-1bae8526d784'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinatiyeh/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mcze6riu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
