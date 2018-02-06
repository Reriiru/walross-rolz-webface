FROM nginx
COPY nginx-custom.conf /etc/nginx/nginx.conf
COPY dist/prod /usr/share/nginx/html
