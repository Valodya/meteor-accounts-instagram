Accounts.oauth.registerService('instagram')

if (Meteor.isClient) {
  const loginWithInstagram = (options, callback) => {
    if (typeof options === 'function') {
      callback = options
      options = null
    }

    Instagram.requestCredential(options, Accounts.oauth.credentialRequestCompleteHandler(callback))
  }

  Accounts.registerClientLoginFunction('instagram', loginWithInstagram)

  Meteor.loginWithInstagram = () => Accounts.applyLoginFunction('instagram', arguments)

} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.instagram'],
    forOtherUsers  : [
      'services.instagram.id',
      'services.instagram.username',
      'services.instagram.full_name',
      'services.instagram.profile_picture',
    ]
  })
}