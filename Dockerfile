FROM httpd:2.4-alpine

COPY ./apache/httpd.conf /usr/local/apache2/conf/httpd.conf
