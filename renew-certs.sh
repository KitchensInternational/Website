#!/bin/bash

docker run -it --rm --name letsencrypt \
        -v /etc/letsencrypt:/etc/letsencrypt \
        -v /var/log/letsencrypt:/var/log/letsencrypt \
        -v /var/lib/letsencrypt:/var/lib/letsencrypt \
        -v /var/www/letsencrypt:/var/www/letsencrypt \
        quay.io/letsencrypt/letsencrypt \
        renew

docker kill --signal=HUP kitchens
