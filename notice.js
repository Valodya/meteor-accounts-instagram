if (Package['accounts-ui'] && !Package['service-configuration'] && !Package['valodya:instagram-config-ui']) {

  console.warn(
    'Note: You\'re using accounts-ui and valodya:accounts-instagram,\n' +
    'but didn\'t install the configuration UI for the Instagram OAuth.\n' +
    'You can install it with:\n' +
    '\n' +
    '    meteor add valodya:instagram-config-ui' +
    '\n'
  )
}
