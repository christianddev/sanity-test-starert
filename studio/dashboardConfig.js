export default {
  widgets: [
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
                  buildHookId: '6350e45676079a6dae3b66ae',
                  title: 'Sanity Studio',
                  name: 'sanity-test-starert-studio',
                  apiId: '750c8d56-2249-4abb-b832-21d560c9b7d9'
                },
                {
                  buildHookId: '6350e456fa5c3e6bdfd7b0d1',
                  title: 'Blog Website',
                  name: 'sanity-test-starert',
                  apiId: 'db125ca3-662b-4716-bdac-afb6e5a06d06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christianddev/sanity-test-starert',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-starert.netlify.app', category: 'apps'}
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
