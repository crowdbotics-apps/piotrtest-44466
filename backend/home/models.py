from django.conf import settings
from django.db import models


class City(models.Model):
    "Generated Model"
    name = models.TextField()
    size = models.BigIntegerField()
    url = models.URLField()
