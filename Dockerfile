FROM python:3.6.1-alpine
WORKDIR /appdata/menumanager
COPY menumanager /appdata/menumanager
RUN pip3 install -r requirements.txt 
CMD ["python","manage.py","runserver","0.0.0.0:80"]
EXPOSE 80
