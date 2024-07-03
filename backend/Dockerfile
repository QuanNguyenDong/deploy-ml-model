FROM tensorflow/serving:latest

WORKDIR /

COPY models/models.config /models/models.config
COPY models /models

CMD ["--model_config_file=/models/models.config"]

