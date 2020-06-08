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
                  buildHookId: '5ede3846434ba8821f8ad2a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9vouihfa',
                  apiId: '2d977bb8-ea99-4ceb-b434-e984d3e28192'
                },
                {
                  buildHookId: '5ede384739279b81f14f9c6a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xqufdsy1',
                  apiId: '7183f7d8-28a6-4787-afd7-96fd0ccc5038'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SHoar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xqufdsy1.netlify.app', category: 'apps'}
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
