Package.describe({
  name   : 'valodya:accounts-instagram',
  summary: 'Login service for Instagram accounts',
  version: '1.0.0',
  git    : 'https://github.com/Valodya/meteor-accounts-instagram.git'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4.3')

  api.use('accounts-base', ['client', 'server'])
  api.imply('accounts-base', ['client', 'server'])
  api.use('accounts-oauth', ['client', 'server'])
  api.use('valodya:instagram-oauth@1.0.0')
  api.imply('valodya:instagram-oauth@1.0.0')
  api.use(['accounts-ui', 'valodya:instagram-config-ui@1.0.0'], ['client', 'server'], { weak: true })

  api.addFiles('notice.js')

  api.addFiles('instagram.js')
})