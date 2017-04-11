<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
      'omitScriptNameInUrls' => true,
    ),
    'craft-react.dev' => array(
        // ...
        'environmentVariables' => array(
            'basePath' => '/users/sites/craft-react.com/public/',
            'baseUrl'  => 'http://craft-react.dev/',
            'siteUrl' => 'http://craft-react.dev/',
        ),

    ),

    'craft-react.com' => array(
        // ...

        'environmentVariables' => array(
            'basePath' => '/public_html/',
            'baseUrl'  => 'http://craft-react.com/',
        ),
      'siteUrl' => array(
          'en' => 'http://craft-react.com/',
      ),
    )

);
