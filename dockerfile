FROM nginx:latest
COPY . /usr/share/nginx/html
COPY default_nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod 644 /usr/share/nginx/html/*
RUN chown -R nginx:nginx /usr/share/nginx/html