# Meteor Accounts Instagram

#### Instagram account login for meteor without Blaze and jQuery

## Install

`meteor add valodya:accounts-instagram`


## Setup

1. Register your app with Instagram Developer Site at following url - http://instagram.com/developer/clients/register

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri: `<your-server-domain>:<port>/_oauth/instagram`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/instagram`

3. After registration, note down the clientid and client secret.

```   
    ServiceConfiguration.configurations.upsert({ service: 'instagram' }, {
      $set: {
        clientId: '<your-instagram-client-id>',
        secret  : '<your-instagram-client-secret>'
      }
    })
```


## Usage


```
    Meteor.loginWithInstagram(error => {
        if (error) {
          console.log('login failed: ', error);
          
        } else {
          console.log('login success: ', Meteor.user());
        }
    });
```
