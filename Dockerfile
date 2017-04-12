FROM php:7.0-apache

LABEL maintainer "Mark Hobson <mark.hobson@blackpepper.co.uk>"

RUN apt-get update \
	&& apt-get install -yq unzip libmcrypt-dev libmagickwand-dev \
	&& docker-php-ext-install pdo_mysql mcrypt \
	&& pecl install imagick \
	&& docker-php-ext-enable imagick \
	&& rm -rf /var/lib/apt/lists/*

# Enable .htaccess
RUN a2enmod rewrite

ENV CRAFT_VERSION=2.6 \
		CRAFT_BUILD=2971
ENV CRAFT_ZIP=Craft-$CRAFT_VERSION.$CRAFT_BUILD.zip

# ADD https://download.buildwithcraft.com/craft/$CRAFT_VERSION/$CRAFT_VERSION.$CRAFT_BUILD/$CRAFT_ZIP /tmp/$CRAFT_ZIP
ADD https://github.com/craftcms/cms/archive/3.0.0-beta.10.zip /tmp/$CRAFT_ZIP

RUN unzip -q tmp/$CRAFT_ZIP -d / \
	&& rm tmp/$CRAFT_ZIP \
	# && mv /var/www/public/* /var/www/html/ \
	# && mv /var/www/html/htaccess /var/www/html/.htaccess \
	# && rmdir /var/www/public

# Allow Craft to be configured with environment variables
ADD config/db.php config/general.php craft/config/

RUN chown -R www-data:www-data \
	craft/app/ \
	craft/config/ \
	craft/storage/

ENV CRAFT_DATABASE_HOST=localhost \
	CRAFT_DATABASE_PORT=3306 \
	CRAFT_DATABASE_USER=root \
	CRAFT_DATABASE_PASSWORD= \
	CRAFT_DATABASE_NAME= \
	CRAFT_ALLOW_AUTO_UPDATES=true \
	CRAFT_COOLDOWN_DURATION=PT5M \
	CRAFT_DEV_MODE=false \
	CRAFT_MAX_UPLOAD_FILE_SIZE=16777216 \
	CRAFT_OMIT_SCRIPT_NAME_IN_URLS=auto \
	CRAFT_USE_COMPRESSED_JS=true \
	CRAFT_USER_SESSION_DURATION=PT1H
